import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

const Edit = () => {
	// Получаем 5 последних записей
	const posts = useSelect(
		(select) => select(coreDataStore).getEntityRecords(
			'postType',
			'post',
			{
				per_page: 5,
				_embed: true // Для получения изображений
			}
		),
		[]
	);

	if (posts.length === 0) {
		return <p>Записи не найдены</p>;
	}

	return (
		<div className="recent-posts-block">
			<h3 className="recent-posts-title">Последние записи</h3>
			<ul className="recent-posts-list">
				{posts.map((post) => (
					<li key={post.id} className="recent-post-item">
						{post._embedded?.['wp:featuredmedia']?.[0] && (
							<img
								src={post._embedded['wp:featuredmedia'][0].source_url}
								alt={post.title.rendered}
								className="recent-post-image"
							/>
						)}
						<h4 className="recent-post-title">
							<a href={post.link} target="_blank" rel="noopener noreferrer">
								{post.title.rendered}
							</a>
						</h4>
						<div
							className="recent-post-excerpt"
							dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
						/>
						<div className="recent-post-date">
							{new Date(post.date).toLocaleDateString()}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Edit;
