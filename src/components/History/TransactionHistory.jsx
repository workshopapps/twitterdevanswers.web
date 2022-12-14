import React
// { useContext } 
from 'react';
import PropTypes from 'prop-types';
import ArrowUp from '../../assets/wallet-images/arrow-up.svg';
import arrowdown from '../../assets/wallet-images/arrowdown.svg';
import ArrowRight from '../../assets/wallet-images/arrow-right.svg';
import styles from './TransactionHistory.module.css';
// import { useWalletContext } from '../../pages/WalletPage/WalletContext'
// import TransactionHistorySkeleton from './TransactionHistorySkeleton';
// import WalletContext from '../../pages/WalletPage/WalletContext';

function TransactionHistory({walletId}) {
	return (
		<div className={styles.container}>
			<div className={styles.transaction_header}>
				<p className={styles.header_title}>Transaction History</p>
				<p className={styles.header_button}>
	 				View All
				<i>
	 					<img src={ArrowRight} alt="right arrow " />
	 				</i>
	 			</p>
	 		</div>

			<div className={styles.date}>
				<p>November 2022</p>
				<p>11:02pm</p>

				<div className={styles.withdraw}>
					<img src={ArrowUp} alt="right arrow " />
					<h5>5000 token Withdrawn Successfully</h5>
				</div>
				<p className={styles.code}>{walletId}</p>
				<hr />

				<p>12:07pm</p>

				<div className={styles.withdraw}>
					<img src={arrowdown} alt="right arrow " />
					<h5>7000 token Deposited Successfully</h5>
				</div>
				<p className={styles.code}>1JiKTG96fYvQ6X8SMLnwk19pKpiWuzbUBR</p>

				<hr />
			</div>	

			<div className={styles.date}>
				<p>May 2022</p>
				<p>11:02pm</p>

				<div className={styles.withdraw}>
					<img src={ArrowUp} alt="right arrow " />
					<h5>5000 token Withdrawn Successfully</h5>
				</div>
				<p className={styles.code}>{walletId}</p>
				
			</div>
		</div>
	);

	// return loading ? (
	// 	<TransactionHistorySkeleton />
	// ) : (
	// 	<section className={styles.container}>
	// 		<div className={styles.transaction_header}>
	// 			<p className={styles.header_title}>Transaction History</p>
	// 			<p className={styles.header_button}>
	// 				View All{' '}
	// 				<i>
	// 					<img src={ArrowRight} alt="right arrow " />
	// 				</i>
	// 			</p>
	// 		</div>
	// 		{data.walletHistory.map((item) => (
	// 			<div className={styles.date_time}>
	// 				<div>
	// 					<p className={styles.date}>Novemener 2022</p>
	// 					<p className={styles.time}>11:02pm</p>
	// 				</div>
	// 				<div className={styles.history_container}>
	// 					<i>
	// 						<img
	// 							src={ArrowUp}
	// 							alt="arrow up"
	// 							className={styles.history_container_img}
	// 						/>
	// 					</i>

	// 					<div className={styles.history__grouping}>
	// 						<p className="font-semibold md:text-xs text-sm w-full">
	// 							{item.ammount} tokens Withdrawn Succesffully
	// 						</p>
	// 						<p className="text-xs font-normal">{`${item.walletAddress.slice(
	// 							0,
	// 							9
	// 						)}......`}</p>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		))}
	// 	</section>
	// );
}

TransactionHistory.defaultProps = {
	walletId: '1JiKTG96fYvQ6X8SMLnwk19pKpiWuzbUBR',
};

TransactionHistory.propTypes = {
	walletId: PropTypes.string,
};


export default TransactionHistory;
