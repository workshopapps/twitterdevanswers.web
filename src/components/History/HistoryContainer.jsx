import React from 'react';
import styles from './HistoryContainer.module.css';
import ArrowRight from '../../assets/arrow-right.svg';

import TransactionHistory from './TransactionHistory';
import History from './History';

function HistoryContainer() {
	return (
		<>
			<div className={styles.history__header_text}>
				<div className={styles.header}>
					<p className={styles.label__text}>History</p>
					<p className={styles.label}>
						View All
						<i>
							<img src={ArrowRight} alt="right arrow " />
						</i>
					</p>
				</div>
			</div>
			<div className={styles.history__container}>
				<History />
				<TransactionHistory />
			</div>
		</>
	);
}
export default HistoryContainer;
