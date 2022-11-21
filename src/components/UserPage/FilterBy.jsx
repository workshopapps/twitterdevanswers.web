import React from 'react';
import styles from '../../pages/UserPage/userPage.module.css';

function FiterBy() {
	return (
		<section className={styles.filter_options}>
			<p>Filter</p>
			<button type="button">Stack</button>
			<button type="button">Followers</button>
			<button type="button">Job title</button>
		</section>
	);
}

export default FiterBy;
