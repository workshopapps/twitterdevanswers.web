import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './History.module.css';

function HistorySkeleton() {
	return (
		<section className={styles.history__container}>
			<div className={styles.grouping}>
				<div className={styles.date}>
					<p>
						<Skeleton width={100} />
					</p>
					<div className={styles.history_group}>
						<Skeleton />

						<p className={styles.history__group__text__2__alt}>
							<Skeleton />
						</p>
					</div>
					<div className={styles.history_group}>
						<Skeleton />
						<p className={styles.history__group__text__2__alt}>
							<Skeleton />
						</p>
					</div>
				</div>
				<div className={styles.date}>
					<p>
						<Skeleton width={100} />
					</p>
					<div className={styles.history_group}>
						<Skeleton />

						<p className={styles.history__group__text__2__alt}>
							<Skeleton />
						</p>
					</div>
					<div className={styles.history_group}>
						<Skeleton />
						<p className={styles.history__group__text__2__alt}>
							<Skeleton />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HistorySkeleton;
