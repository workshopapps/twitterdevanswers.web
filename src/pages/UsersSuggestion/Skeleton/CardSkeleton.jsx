/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

function CardSkeleton({ cards }) {
	return Array(cards)
		.fill(0)
		.map((_, i) => (
			<div className={styles.card} key={i}>
				<div className={styles.leftCol}>
					<Skeleton circle width={60} height={60} />
				</div>
				<div className={styles.rightCol}>
					<Skeleton height={20} count={4} />
				</div>
			</div>
		));
}

export default CardSkeleton;

CardSkeleton.propTypes = {
	cards: PropTypes.number.isRequired,
};
