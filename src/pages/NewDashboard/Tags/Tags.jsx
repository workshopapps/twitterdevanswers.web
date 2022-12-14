import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styles from './tags.module.css';

function Tags({ tags }) {
	return (
		<div className={styles.tags}>
			<h3>Recent Tags</h3>

			<div className={styles.list}>
				{tags.map((tag) => (
					<Tag title={tag} key={tag} />
				))}
			</div>
		</div>
	);
}

export default Tags;

Tags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Tag({ title }) {
	return (
		<Link to="/tags-page" className={styles.tag}>
			{title}
		</Link>
	);
}

Tag.propTypes = {
	title: PropTypes.string.isRequired,
};
