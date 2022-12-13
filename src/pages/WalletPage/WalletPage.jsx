import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AppContext } from '../../store/AppContext';
import { getFullYear,  getMonth, getTime, getDay} from './ConvertTime';
import earnedTotal from '../../assets/wallet-images/earnedTotal.png';
import spentTotal from '../../assets/wallet-images/spentTotal.png';
import transaction from '../../assets/wallet-images/transaction.png';
import viewMore from '../../assets/wallet-images/viewMore.png';
import viewLess from '../../assets/wallet-images/viewLess.png';
import earn from '../../assets/wallet-images/earn.png';
import spent from '../../assets/wallet-images/spent.png';
import styles from './Wallet.module.css'

function WalletPage() {
    const [userMsg, setUserMsg] = useState("");
    const [viewAll, setViewAll] = useState(true);
    const [earned, setEarned] = useState(false);
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

    // const fetchTransactionHistory = async () => {
    //     if(userId) {
    //         try {
    //             const response = await axios.get(`https://api.devask.hng.tech/admin/transactions/users/${userId}?skip=0&limit=30`)
    //             console.log('response', response)
                
    //         } catch (e) {
    //             setUserMsg("Something went wrong refresh your page", error)
	// 			setError(false);
    //         }

    //     } else {
    //   		setUserMsg("Please sign up ");
	// 		setError(false);
	// 	}
    // }

    useEffect(() => {
		setError(false);
		fetchUserData();
        // fetchTransactionHistory();

		setData((prev) =>({
			...prev,
			walletId
		}))
	}, []);

    const handleEarnedTransaction = () => {
            setEarned(true);
    }

    const  handleSpentTransaction = () => {
            setEarned(false)
    }

    const handleViewAll = () => {
        setViewAll((prev) => (!prev))
    }

    const month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const TransactionHistory = [
        {
            description: null,
            user_id: null,
            transaction_type: {
                code: "spent",
                value: "Spent"
            },
            amount: 50,
            transaction_id: 1,
            transaction_date: "2022-12-10T11:04:11" 
        },
        {
            description: null,
            user_id: null,
            transaction_type: {
                code: "earn",
                value: "Earn"
            },
            amount: 50,
            transaction_id: 2,
            transaction_date: "2022-12-10T11:04:11" 
        },
        {
            description: null,
            user_id: null,
            transaction_type: {
                code: "earn",
                value: "Earn"
            },
            amount: 50,
            transaction_id: 2,
            transaction_date: "2022-12-10T11:04:11" 
        },
        {
            description: null,
            user_id: null,
            transaction_type: {
                code: "spent",
                value: "Spent"
            },
            amount: 50,
            transaction_id: 2,
            transaction_date: "2022-12-10T11:04:11" 
        },
        {
            description: null,
            user_id: null,
            transaction_type: {
                code: "spent",
                value: "Spent"
            },
            amount: 50,
            transaction_id: 2,
            transaction_date: "2022-12-10T11:04:11" 
        },
        {
            description: null,
            user_id: null,
            transaction_type: {
                code: "earn",
                value: "Earn"
            },
            amount: 50,
            transaction_id: 2,
            transaction_date: "2022-12-10T11:04:11" 
        },
        {
            description: null,
            user_id: null,
            transaction_type: {
                code: "spent",
                value: "Spent"
            },
            amount: 50,
            transaction_id: 2,
            transaction_date: "2022-12-10T11:04:11" 
        },
    ] 


  return (
    <>
        {error && <h1>{userMsg}</h1>}
        <div className={styles.walletContainer}>
        <section className={styles.firstSection}>
            <div className={styles.tagWrapper}>
                <div className={styles.balanceTag}>
                    <h4>Total Balance</h4>
                    <p>{data.currentBalance}Tokens</p>
                </div>
                <div className={styles.innerTagWrapper}>
                    <div className={styles.totalEarnedTag}>
                        <img src={earnedTotal} alt="total earned" />
                        <p>+{data.totalEarned} Tokens</p>
                    </div>
                    <div className={styles.totalSpentTag}>
                        <img src={spentTotal} alt="total spent" />
                        <p>-{data.totalSpent} Tokens</p>
                    </div>
                </div>
            </div>
            <div className={styles.recentHistoryWrapper}>
                <h4>Recent Activity</h4>
                <div className={styles.recentHistoryBlock}>
                        <button onClick={handleEarnedTransaction} className={`${styles.historyButtons1} ${earned && styles.currentButton}`} type="button">Earned</button>
                        <button onClick={handleSpentTransaction} className={`${styles.historyButtons2} ${!earned && styles.currentButton}`} type="button">Spent</button>
                    {  earned ?
                        TransactionHistory.map((userTransaction) =>(   
                            ( userTransaction.transaction_type.value === 'Earn' &&
                            (<div className={styles.transactionBlock}>
                                <h4>{`${month[getMonth(userTransaction.transaction_date)]} ${getFullYear(userTransaction.transaction_date)}`}</h4>
                                <div className={styles.transaction}>
                                    <img src={transaction} alt="transactionMade" />
                                    <p>You’ve successfully earned tokens for a correct reply</p>
                                    <span className={styles.date}>{`${getFullYear(userTransaction.transaction_date)}-${getMonth(userTransaction.transaction_date)+ 1}-0${getDay(userTransaction.transaction_date)}`}</span>
                                    <span className={styles.token}>+{userTransaction.amount} tokens</span>
                                </div>
                            </div>))
                        ))    
                        :
                        TransactionHistory.map((userTransaction) =>(   
                            ( userTransaction.transaction_type.value === 'Spent' &&
                            (<div className={styles.transactionBlock}>
                                <h4>{`${month[getMonth(userTransaction.transaction_date)]} ${getFullYear(userTransaction.transaction_date)}`}</h4>
                                <div className={styles.transaction}>
                                    <img src={transaction} alt="transactionMade" />
                                    <p>You’ve successfully earned tokens for a correct reply</p>
                                    <span className={styles.date}>{`${getFullYear(userTransaction.transaction_date)}-${getMonth(userTransaction.transaction_date)+ 1}-0${getDay(userTransaction.transaction_date)}`}</span>
                                    <span className={styles.token}>-{userTransaction.amount} tokens</span>
                                </div>
                            </div>))
                        )) 
                    } 
                </div>
            </div>
        </section>

        <section >
                <div  className={styles.transactionHistoryWrapper}>
                    <div className={styles.transactionHistoryHeader}>
                        <h4>Transaction History</h4>
                        <span role = "button" tabIndex={0} onClick={handleViewAll} onKeyDown={handleViewAll}>
                            <p>{viewAll ? 'View all' : 'View less'}</p>
                            {viewAll ?<img src={viewMore} alt="view all" /> : <img src={viewLess} alt="view all" />}
                        </span>
                    </div>
                    <div className={styles.transactionHistoryBody}>
                        {
                            TransactionHistory.map((userTransaction) =>(
                                userTransaction.transaction_type.value === 'Earn' ?
                                    <div>
                                        <h4>{`${month[getMonth(userTransaction.transaction_date)]} ${getFullYear(userTransaction.transaction_date)}`}</h4>
                                        <div className={styles.transactionHistoryBlock}>
                                                <img src={earn} alt="arrow earn" />
                                            <div className={styles.transactionHistoryRecord}>
                                                <p className={styles.p1}>{userTransaction.amount} token Deposited Successfully</p>
                                                <p className={styles.p2}>{data.walletId}</p>
                                            </div>
                                                <span>{getTime(userTransaction.transaction_date)}</span>
                                        </div>
                                    </div>
                                :
                                <div>
                                    <h4>{`${month[getMonth(userTransaction.transaction_date)]} ${getFullYear(userTransaction.transaction_date)}`}</h4>
                                    <div className={styles.transactionHistoryBlock}>
                                            <img src={spent} alt="arrow spent" />
                                        <div className={styles.transactionHistoryRecord}>
                                            <p className={styles.p1}>{userTransaction.amount} token Withdrawn Successfully</p>
                                            <p className={styles.p2}>{data.walletId}</p>
                                        </div>
                                            <span>{getTime(userTransaction.transaction_date)}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>  

                <div className={styles.paymentButtons}>
                    <button type="button" className={styles.withdrawButton}>Withdraw</button>
                    <button type="button" className={styles.depositButton}>Deposit</button>
                </div>  
        </section>
        </div>
    </>    
  )
}

export default WalletPage