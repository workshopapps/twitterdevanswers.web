import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

function BlogPost(props) {
	const { link, image, imageAlt, title, date } = props;

	return (
		<div className="blog-post main-axis" style={{ '--gap': '12px' }}>
			<a href={link}>
				<img src={image} alt={imageAlt} />
			</a>

			<div className="main-axis" style={{ '--gap': '6px' }}>
				<h2 className="blog-post__title">
					<a
						href={link}
						style={{
							font: 'inherit',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						{title}
					</a>
				</h2>

				<span className="blog-post__date">{date}</span>
			</div>
		</div>
	);
}

BlogPost.propTypes = {
	image: PropTypes.node.isRequired,
	imageAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default BlogPost;
