const { useState, useEffect } = wp.element;
const { SelectControl, Spinner } = wp.components;
const { useSelect } = wp.data;
const { __ } = wp.i18n;

export default function Edit({ attributes, setAttributes }) {
	const { selectedCategory } = attributes;
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	// Получаем все рубрики через WordPress Data API
	const categories = useSelect((select) => {
		const terms = select('core').getEntityRecords('taxonomy', 'category', { per_page: -1 });
		if (!terms) return [];

		return [
			{ value: 0, label: __('All Categories', 'text-domain') },
			...terms.map(term => ({
				value: term.id,
				label: term.name
			}))
		];
	}, []);

	// Загрузка постов при изменении рубрики
	useEffect(() => {
		setLoading(true);

		let apiPath = '/wp/v2/posts?per_page=5&_fields=id,title,link';
		if (selectedCategory && selectedCategory !== 0) {
			apiPath += `&categories=${selectedCategory}`;
		}

		wp.apiFetch({ path: apiPath })
			.then(data => {
				setPosts(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching posts:', error);
				setLoading(false);
			});
	}, [selectedCategory]);

	return (
		<div className="category-posts-block">
			<SelectControl
				label={__('Select Category', 'text-domain')}
				value={selectedCategory}
				options={categories}
				onChange={(newCategory) => setAttributes({ selectedCategory: Number(newCategory) })}
			/>

			{loading ? (
				<div style={{ textAlign: 'center' }}>
					<Spinner />
					<p>{__('Loading posts...', 'text-domain')}</p>
				</div>
			) : (
				<div className="posts-list">
					{posts.length > 0 ? (
						<ul>
							{posts.map(post => (
								<li key={post.id}>
									<a href={post.link} target="_blank" rel="noopener noreferrer">
										{post.title.rendered}
									</a>
								</li>
							))}
						</ul>
					) : (
						<p>{__('No posts found in this category.', 'text-domain')}</p>
					)}
				</div>
			)}
		</div>
	);
}
