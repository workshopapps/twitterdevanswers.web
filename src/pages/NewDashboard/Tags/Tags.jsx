import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styles from './tags.module.css';
import useMessenger from '../utils';

function Tags() {
	const [tags, setTags] = useState([]);

	const { getTags } = useMessenger();

	useEffect(() => {
		const fetchTags = async () => {
			const result = await getTags();
			setTags(result.data);
		};

		fetchTags();
	}, []);

	return (
		tags?.length > 0 && (
			<div className={styles.tags}>
				<h3>Recent Tags</h3>

				<div className={styles.list}>
					{tags.map((tag) => (
						<Tag title={tag.tag_name} key={tag.tag_name} />
					))}
				</div>
			</div>
		)
	);
}

export default Tags;

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
