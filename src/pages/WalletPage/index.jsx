import React from // { useContext }
'react';
import WalletItem from '../../components/WalletItem';
import styles from './Wallet.module.css';
import TransactionHistory from '../../components/History/TransactionHistory';
// import WalletContext from './WalletContext';
import Viewall from '../../assets/wallet-images/Viewall.svg';

function WalletPage() {
	// const { data, withdraw, /* loading */ } = useContext(WalletContext);

	return (
		<div className={styles.wallet_page_container_main}>
			<div className={styles.wallet_page_container}>
				{/* <div className={styles.wallet_container}>
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
				</div> */}

				<main className={styles.wallet_container}>
					<div className={styles.walletTag}>
						<h1 className={styles.Overview}>Overview</h1>
						<div className={styles.walletGrid}>
							<WalletItem
								ammount="10000"
								frame="true"
								// ammount={data.currentBalance}
								label="Current Balance"
							/>
							{/* image1={arrowwhite} */}
							<WalletItem
								label="Total Spent"
								compare="2% compared to last month"
								ammount="500"
								css="box"
							/>
							<WalletItem
								// ammount={data.totalAmmountEarned - data.currentBalance}
								label="Total Earned"
								compare="10% compared to last month"
								ammount="50000"
								css="box"
							/>
							<WalletItem
								label="Total Commission"
								compare="5% compared to last month"
								ammount="2000"
								css="box"
							/>
						</div>
					</div>

					<div className={styles.transTag}>
						<div className={styles.transHist}>
							<TransactionHistory />
						</div>
						<div className={styles.button_positon}>
							<button
								type="button"
								// onClick={withdraw}
								className={styles.btn__primary}
							>
								Withdraw
							</button>
						</div>
					</div>
				</main>

				<div className={styles.histories}>
					<h4>History</h4>

					<div className={styles.tablehist}>
						<section className={styles.sect}>
							<div className={styles.total}>
								<h5>Token Earned history</h5>
								<div className={styles.view}>
									<p>View all </p>
									<img src={Viewall} alt="" />
								</div>
							</div>

							<div className={styles.nov}>
							<p>November 2022</p>

							<div className={styles.earn}>
								<h5>Earned</h5>
								<p>You’ve successfully earned tokens for a correct reply</p>
								<h5>+5000 tokens</h5>
							</div>
							<div className={styles.earn}>
								<h5>Earned</h5>
								<p>You’ve successfully earned tokens for a correct reply</p>
								<h5>+7000 tokens</h5>
							</div>
							</div>

							<hr />

							<div className={styles.nov}>
							<p>August 2022</p>

							<div className={styles.earn}>
								<h5>Earned</h5>
								<p>You’ve successfully earned tokens for a correct reply</p>
								<h5>+6000 tokens</h5>
							</div>
							<div className={styles.earn}>
								<h5>Earned</h5>
								<p>You’ve successfully earned tokens for a correct reply</p>
								<h5>+400 tokens</h5>
							</div>
							</div>
						</section>



						{/* SPENT section */}

						<section className={styles.sect}>
							<div className={styles.total}>
								<h5>Token Spent history</h5>
								<div className={styles.view}>
									<p>View all </p>
									<img src={Viewall} alt="" />
								</div>
							</div>

							<div className={styles.nov}>
							<p>November 2022</p>

							<div className={styles.earn}>
								<h5>Spent</h5>
								<p>You’ve successfully spent tokens for a correct reply</p>
								<h5>-500 tokens</h5>
							</div>
							<div className={styles.earn}>
								<h5>Spent</h5>
								<p>You’ve successfully spent tokens for a correct reply</p>
								<h5>-700 tokens</h5>
							</div>
							</div>

							<hr />

							<div className={styles.nov}>
							<p>August 2022</p>

							<div className={styles.earn}>
								<h5>Spent</h5>
								<p>You’ve successfully spent tokens for a correct reply</p>
								<h5>-600 tokens</h5>
							</div>
							<div className={styles.earn}>
								<h5>Spent</h5>
								<p>You’ve successfully spent tokens for a correct reply</p>
								<h5>-400 tokens</h5>
							</div>
							</div>
						</section>

					</div>
				</div>
			</div>
		</div>
	);
}

export default WalletPage;
