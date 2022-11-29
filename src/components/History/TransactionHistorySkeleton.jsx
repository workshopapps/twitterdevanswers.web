import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import ArrowUp from '../../assets/arrow-up.svg';
// import ArrowRight from '../../assets/arrow-right.svg';
import styles from './TransactionHistory.module.css';

function TransactionHistorySkeleton() {
	return (
		<section className={styles.container}>
			<div className={styles.transaction_header}>
				<Skeleton />
			</div>
			<div className={styles.date_time}>
				<div>
					<p className={styles.date}>
						<Skeleton width={100} />
					</p>
					<p className={styles.time}>
						<Skeleton width={80} />
					</p>
				</div>
				<div className={styles.history_container}>
					<i>
						<Skeleton width={30} height={30} borderRadius={50} />
					</i>

					<div className={styles.history__grouping}>
						<p className="font-semibold md:text-xs text-sm w-full">
							<Skeleton />
						</p>
						<p className="text-xs font-normal">
							<Skeleton width={200} />
						</p>
					</div>
				</div>
			</div>
			<div className={styles.date_time}>
				<div>
					<p className={styles.time}>
						<Skeleton width={80} />
					</p>
				</div>
				<div className={styles.history_container}>
					<i>
						<Skeleton width={30} height={30} borderRadius={50} />
					</i>

					<div className={styles.history__grouping}>
						<p className="font-semibold md:text-xs text-sm w-full">
							<Skeleton />
						</p>
						<p className="text-xs font-normal">
							<Skeleton width={200} />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TransactionHistorySkeleton;
