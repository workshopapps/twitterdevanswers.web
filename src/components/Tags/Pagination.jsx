import React from 'react';
import styles from './pagination.module.css';

export default function Pagination() {
	return (
		<div className={styles.pagination}>
			<button className={styles.pagination__item} type="button">
				Prev
			</button>
			<div className={styles.pagination__item}>1</div>
			<div className={styles.pagination__itemactive}>2</div>
			<div className={styles.pagination__item}>3</div>
			<span className={styles.pagination__item}>...</span>
			<div className={styles.pagination__item}>942</div>
			<button className={styles.pagination__item} type="button">
				Next
			</button>
		</div>
	);
}
