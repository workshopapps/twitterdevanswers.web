import React from 'react';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowRight from '../../assets/arrow-right.svg';
import styles from './TransactionHistory.module.css';

function TransactionHistory() {
	return (
		<section className={styles.container}>
			<div className={styles.transaction_header}>
				<p className={styles.header_title}>Transaction History</p>
				<p className={styles.header_button}>
					View All{' '}
					<i>
						<img src={ArrowRight} alt="right arrow " />
					</i>
				</p>
			</div>
			<div className={styles.date_time}>
				<div>
					<p className={styles.date}>Novemener 2022</p>
					<p className={styles.time}>11:02pm</p>
				</div>
				<div className={styles.history_container}>
					<i>
						<img
							src={ArrowUp}
							alt="arrow up"
							className={styles.history_container_img}
						/>
					</i>

					<div className={styles.history__grouping}>
						<p className="font-semibold md:text-xs text-sm w-full">
							5000 token Withdrawn Succesffully
						</p>
						<p className="text-xs font-normal">
							1JiKTG96fYvQ6X8SMLnwk19pKpiWuzbUBR
						</p>
					</div>
				</div>
			</div>
			<div className={styles.date_time}>
				<div>
					<p className={styles.time}>11:02pm</p>
				</div>
				<div className={styles.history_container}>
					<i>
						<img
							src={ArrowUp}
							alt="arrow up"
							className={styles.history_container_img}
						/>
					</i>

					<div className={styles.history__grouping}>
						<p className="font-semibold md:text-xs text-sm w-full">
							5000 token Withdrawn Succesffully
						</p>
						<p className="text-xs font-normal">
							1JiKTG96fYvQ6X8SMLnwk19pKpiWuzbUBR
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TransactionHistory;
