import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styles from './ymlPost.module.css';

function YmlPosts({ post: { imgUrl, title, replies } }) {
	return (
		<div className={styles.ymlPost}>
			<img src={imgUrl} alt="user avatar" />
			<div className={styles.text}>
				<p className={styles.title}>
					<Link to="/post">{title}</Link>
				</p>
				<p className={styles.replies}>{replies} Replies</p>
			</div>
		</div>
	);
}

export default YmlPosts;

YmlPosts.propTypes = {
	post: PropTypes.shape({
		imgUrl: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		replies: PropTypes.string.isRequired,
	}).isRequired,
};
