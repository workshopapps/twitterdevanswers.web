import React, { useContext } from 'react';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowRight from '../../assets/arrow-right.svg';
import styles from './TransactionHistory.module.css';
import TransactionHistorySkeleton from './TransactionHistorySkeleton';
import WalletContext from '../../pages/WalletPage/WalletContext';

function TransactionHistory() {
	const { loading, data } = useContext(WalletContext);
	console.log(data);

	return loading ? (
		<TransactionHistorySkeleton />
	) : (
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
			{data.walletHistory.map((item) => (
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
								{item.ammount} tokens Withdrawn Succesffully
							</p>
							<p className="text-xs font-normal">{`${item.walletAddress.slice(
								0,
								9
							)}......`}</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default TransactionHistory;
