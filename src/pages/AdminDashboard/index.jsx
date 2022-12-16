import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { AppContext } from '../../store/AppContext';

import styles from './AdminDashboard.module.css';
import Data from './utils/Data';

function AdminDashboard() {
	const [allUsers, setAllUsers] = useState([]);
	const [isError, setIsError] = useState(true);
	const [filteredUsers, setFilteredUsers] = useState([...allUsers]);
	const [searchValue, setSearchValue] = useState('');
	const [token, setToken] = useState({
		processedToken: 0,
		safeEscrowToken: 0,
		// disbursedToken: 0
	})
	const tokenTransaction = [ token.safeEscrowToken, token.processedToken]
	let constant = 0
	// const usersId = [];


	// console.log('alluser', allUsers)
	const session = JSON.parse(localStorage.getItem('session'));

	// const { state } = useContext(AppContext);

	const navigate = useNavigate();

	const getUsers = async () => {
		const headers = {
			Authorization: `Bearer ${session.user.access_token}`,
			'Content-Type': 'application/json',
		};

		try {
			const data = await axios.get('https://api.devask.hng.tech/users', {
				headers,
			});
			// console.log('data', data.data.data)
			if (data) {
				setAllUsers(data.data.data);
				setFilteredUsers(data.data.data);
			}
		} catch (err) {
			setIsError(false);
		}
	};

	useEffect(() => {
		const filtered = allUsers.filter((user) =>
			user.username.toLowerCase().includes(searchValue)
		);
	
		setFilteredUsers(filtered);

		if (searchValue.length === 0) {
			getUsers();
		}
	}, [searchValue]);

	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	   // Admin Transaction Pay
	// const payAllTransaction = async (amount, questionId) => {
    //     let payTransaction = null;
    //     try{
    //         const pay = {
    //             url: 'https://api.devask.hng.tech/admin/transactions/answer/pay',
    //             method: 'POST',
    //             headers: {
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${session.user.access_token}`,
    //             'Content-Type': 'application/json'
    //             },
    //             data: {
    //                 amount,
    //                 question_id: questionId,
    //                 commission: 10
    //             }
    //         };
    //         payTransaction = await axios(pay);
    //         console.log('pay', payTransaction)
    //     } catch(err) {
    //         // setIsError(false);
	// 		console.log('err', err)
    //     }
    //     return payTransaction   
    // }

	 // Admin Transaction Deduct
	 const deductAllTransaction = async (amount, questionId) => {
        try {
            const deduct = {
                url: 'https://api.devask.hng.tech/admin/transactions/question/deduct',
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                data: {
                    amount,
                    question_id: questionId,
                    commission: 10
                }
            };
            const deductedTransaction = await axios(deduct);
            console.log('deducted',deductedTransaction);
        } catch (err) {
            // setIsError(false);
			console.log('err', err)
        }
    }

	   // Get All Questions
	   const getAllQuestions = async () => {
        try{
            const Questions = await axios.get('https://api.devask.hng.tech/questions/')
			const allQuestions = Questions.data.data;
            // console.log('allQuestions',allQuestions)
            let tokenProcessed = 0
            let safeToken = 0
            // let disbursed = 0
            // let allPayTransaction = null
            allQuestions.forEach(element => {
                    // console.log('t', element)
                    tokenProcessed += element.payment_amount;
					deductAllTransaction(element.payment_amount, element.question_id)
					safeToken += 10
					// payAllTransaction(element.payment_amount, element.question_id)
					// .then((data) => { allPayTransaction = data})
					// disbursed += allPayTransaction.amount_earned
			});
                    // console.log('token', safeToken )

            setToken((prev) =>({
                ...prev,
                processedToken : tokenProcessed,
                safeEscrowToken : safeToken,
                // disbursedToken : disbursed
            }))
        } catch(err) {
            // setIsError(false);
			console.log('err', err)
        }
    }

	useEffect(() => {
        const interval = setInterval(() => {
            getAllQuestions();
            // deductAllTransaction();
            // payAllTransaction();
        }, 3000);
        return () => clearInterval(interval);
    }, []);


	
// Correct way
	// useEffect(() => {
    //     const interval = setInterval(() => {
	// 		for(let i = 0; i < allUsers.length; i + 1 ) {
	// 			usersId.push(allUsers[i].user_id);
	// 		}
	// 		console.log('user', usersId)
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);




	return (
		<section className={styles.bodyContent}>
			<h1 className={styles.pageTitle}>Admin Dashboard</h1>
			<section className={styles.dataWrapper}>
				{Data.map((item) => {
					const { id, title, image, mode } = item;
					constant += 1;
					return (
						<article
							key={id}
							style={{
								background: mode === 'dark' ? '#492B7C' : '#E2D9F2',
								color: mode === 'dark' ? '#E2D9F2' : '#492B7C',
							}}
						>
							<div>
								<h2>{title}</h2>
								<p>{tokenTransaction[constant -1]}</p>
							</div>
							<img src={`${image}`} alt={title} />
						</article>
					);
				})}
			</section>

			<section className={styles.searchWrapper}>
				<h3>Users({allUsers.length === 0 ? 0 : filteredUsers.length})</h3>
				<div className={styles.inputWrapper}>
					<img src="/search-normal.svg" alt="Search Normal" />

					<input
						placeholder="Search by username"
						value={searchValue}
						onChange={handleChange}
						name="searchValue"
					/>
				</div>
			</section>

			{filteredUsers.length === 0 || !isError ? (
				<h3 style={{ paddingLeft: '1em' }}>No results found</h3>
			) : (
				 <> 
					<section className={styles.tableHeader}>
						<h4>#</h4>
						<h4>Username</h4>
						<h4>First name</h4>
						<h4>Last name</h4>
						<h4>Email address</h4>
						<h4>Date Joined</h4>
						<h4>Action</h4>
					</section>

					<section className={styles.tableBodyWrapper}>
						{filteredUsers.length !== 0 &&
							filteredUsers.map((item) => (
								<div className={styles.tableContent} key={item.user_id}>
									<h5>{item.user_id !== ' ' ? item.user_id : 'N/A'}</h5>
									<h5>{item.username !== ' ' ? item.username : 'N/A'}</h5>
									<h5>{item.first_name !== ' ' ? item.first_name : 'N/A'}</h5>
									<h5>{item.last_name !== ' ' ? item.last_name : 'N/A'}</h5>
									<h5>{item.email !== ' ' ? item.email : 'N/A'}</h5>
									<h5>
										{item.date_joined !== ' '
											? new Date(item.date_joined).toDateString()
											: 'N/A'}
									</h5>
									<h5>
										<button
											type="button"
											onClick={() => navigate(`/manage-user/${item.username}`)}
										>
											Manage User
										</button>
									</h5>
								</div>
							))}
					</section>
					<Link to="/blog-page-review">
					<button type="button" className={styles.adminReviewButton}>admin review</button>
					</Link>
				 </> 
			 )} 
		</section>
	);
}

export default AdminDashboard;
