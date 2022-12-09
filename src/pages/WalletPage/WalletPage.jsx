import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AppContext } from '../../store/AppContext';
import WalletItem from '../../components/WalletItem';
import styles from './Wallet.module.css';
import TransactionHistory from '../../components/History/TransactionHistory';
import Viewall from '../../assets/wallet-images/Viewall.svg';



function WalletPage() {
	const [userMsg, setUserMsg] = useState("");
	const [error, setError] = useState(false);
	const [data, setData] = useState({
		totalEarned: 50000,
		currentBalance: 50000,
		totalSpent: 50000,
		walletId: null,
	});

	const {
		state: { user },
	} = useContext(AppContext);
	const userId = user.user_id;
	const walletId = user.wallet.id;

	const fetchUserData = async () => {
		if(userId){
			try {
				const response = await axios.get(`https://api.devask.hng.tech/user/wallet/view/${userId}`);
				const { balance} = response.data;
				const totalSpent = response.data.total_spent;
				const totalEarned = response.data.total_earned;
	
				setData((prev) =>({
					...prev,
					currentBalance: balance,
					totalEarned,
					totalSpent,
				}))
			} catch (e) {
				setUserMsg("Something went wrong refresh your page", error)
				setError(false);
			}
		} else {
      		setUserMsg("Please sign up ");
			setError(false);
		}
	}

	useEffect(() => {
		setError(false);
		fetchUserData();

		setData((prev) =>({
			...prev,
			walletId
		}))
	}, []);
	
	return (
		<>
			{error && <h1>{userMsg}</h1>}
			<div className={styles.wallet_page_container_main}>
				<div className={styles.wallet_page_container}>
				
					<main className={styles.wallet_container}>
						<div className={styles.walletTag}>
							<h1 className={styles.Overview}>Overview</h1>
							<div className={styles.walletGrid}>
								<WalletItem
									ammount= {data.currentBalance}
									frame="true"
									label="Current Balance"
								/>
								<WalletItem
									label="Total Spent"
									compare="2% compared to last month"
									ammount={data.totalSpent}
									css="box"
								/>
								<WalletItem
									label="Total Earned"
									compare="10% compared to last month"
									ammount={data.totalEarned}
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
								<TransactionHistory walletId={data.walletId}/>
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
		</>	
	);
}

export default WalletPage;
