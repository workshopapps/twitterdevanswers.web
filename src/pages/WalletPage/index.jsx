import React, { useContext } from 'react';
import WalletItem from '../../components/WalletItem';
import HistoryContainer from '../../components/History/HistoryContainer';
import styles from './Wallet.module.css';
import WalletItemSkeleton from '../../components/WalletItem/WalletSkeleton';
import WalletContext from './WalletContext';

function WalletPage() {
	const { data, loading, withdraw } = useContext(WalletContext);

	return (
		<div className={styles.wallet_page_container_main}>
			<div className={styles.wallet_page_container}>
				<div className={styles.button_positon}>
					<button
						type="button"
						onClick={withdraw}
						className={styles.btn__primary}
					>
						Withdraw
					</button>
				</div>

				<div className={styles.wallet_container}>
					{loading ? (
						<>
							<WalletItemSkeleton />
							<WalletItemSkeleton />
							<WalletItemSkeleton />
						</>
					) : (
						<>
							<WalletItem
								ammount={data.currentBalance}
								label="Current Balance"
							/>
							<WalletItem
								label="Total Earned"
								ammount={data.totalAmmountEarned}
							/>
							<WalletItem
								ammount={data.totalAmmountEarned - data.currentBalance}
								label="Total Spent"
							/>
						</>
					)}
				</div>
				<div>
					<HistoryContainer />
				</div>
			</div>
		</div>
	);
}

export default WalletPage;
