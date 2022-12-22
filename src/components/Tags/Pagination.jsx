import React from 'react';
import PropTypes from 'prop-types';
import styles from './pagination.module.css';

export const tagsPerPage = 8;
export default function Pagination({ data, prev, next, currentPage }) {
	const totalPages = Math.ceil(data.length / tagsPerPage);

	return (
		<div className={styles.pagination}>
			{currentPage === 1 ? (
				''
			) : (
				<button
					className={styles.pagination__item}
					type="button"
					onClick={prev}
				>
					Prev
				</button>
			)}
			<div
				className={`${styles.pagination__item} ${
					currentPage === 1 ? styles.current : ''
				}`}
			>
				1
			</div>
			{(currentPage === 1 || currentPage === totalPages) && (
				<span className={styles.pagination__item}>...</span>
			)}
			{currentPage > 1 && currentPage < totalPages && (
				<div className={`${styles.pagination__item} ${styles.current}`}>
					{currentPage}
				</div>
			)}
			<div
				className={`${styles.pagination__item} ${
					currentPage === totalPages ? styles.current : ''
				}`}
			>
				{totalPages}
			</div>
			{currentPage === totalPages ? (
				''
			) : (
				<button
					className={styles.pagination__item}
					type="button"
					onClick={next}
				>
					Next
				</button>
			)}
		</div>
	);
}

Pagination.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	prev: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
};
