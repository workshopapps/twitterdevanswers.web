import React from 'react';
import WalletItem from '../../components/WalletItem';
import HistoryContainer from '../../components/History/HistoryContainer';
import styles from './Wallet.module.css';

function WalletPage() {
	return (
		<div className={styles.wallet_page_container_main}>
			<div className={styles.wallet_page_container}>
				<div className={styles.button_positon}>
					<button type="button" className={styles.btn__primary}>
						Withdraw
					</button>
				</div>
				<div className={styles.wallet_container}>
					<WalletItem ammount={1000} label="Current Balance" />
					<WalletItem ammount={50000} label="Total Earned" />
					<WalletItem ammount={500} label="Total Spent" />
				</div>
				<div>
					<HistoryContainer />
				</div>
			</div>
		</div>
	);
}

export default WalletPage;
