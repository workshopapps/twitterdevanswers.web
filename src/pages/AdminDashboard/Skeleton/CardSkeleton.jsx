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
				<div className={styles.firstrightCol}>
					<Skeleton height={40} count={1} className={styles.adminskel} />
				</div>
				<div className={styles.rightCol}>
					<Skeleton height={40} count={4} className={styles.adminskel} />
				</div>
				<div className={styles.rightCol}>
					<Skeleton height={50} count={1} />
				</div>
			</div>
		));
}

export default CardSkeleton ;
CardSkeleton.propTypes = {
	cards: PropTypes.number.isRequired,
};
