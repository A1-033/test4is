const { useState, useEffect } = wp.element;
const { SelectControl } = wp.components;

export default function Edit({ attributes, setAttributes }) {
	const { selectedCategory } = attributes;
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	// Загрузка категорий
	useEffect(() => {
		wp.apiFetch({ path: '/wp/v2/categories?per_page=-1' })
			.then(cats => {
				const allCategories = [
					{ value: 0, label: 'Все категории' },
					...cats.map(cat => ({ value: cat.id, label: cat.name }))
				];
				setCategories(allCategories);
			});
	}, []);

	// Загрузка постов
	useEffect(() => {
		setLoading(true);
		let url = '/wp/v2/posts?per_page=3';
		if (selectedCategory) {
			url += `&categories=${selectedCategory}`;
		}

		wp.apiFetch({ path: url })
			.then(data => {
				setPosts(data);
				setLoading(false);
			});
	}, [selectedCategory]);

	return (
		<div>
			<SelectControl
				label="Выберите рубрику"
				value={selectedCategory}
				options={categories}
				onChange={value => setAttributes({ selectedCategory: Number(value) })}
			/>

			{loading ? (
				<p>Загрузка...</p>
			) : (
				<div>
					{posts.map(post => (
						<div key={post.id}>
							<h4>{post.title.rendered}</h4>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
