import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFilterOutline } from 'react-icons/io5';
import TopUsers from './TopUsers/TopUsers';
import CardSkeleton from '../UsersSuggestion/Skeleton/CardSkeleton';
import Yml from './Yml/Yml';
import PostCard from './PostCard/PostCard';
import Tags from './Tags/Tags';
import styles from './newDashboard.module.css';
import useMessenger from './utils';
import { STORE_USER_DATA } from '../../store/actionTypes';
import { AppContext } from '../../store/AppContext';

function NewDashboard() {
	const { dispatch } = useContext(AppContext);
	const [questions, setQuestions] = useState([]);

	const { getUsers, getQuestions, sortByDate } = useMessenger();

	const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
	const userId = userFromLocalStorage?.user_id;

	useEffect(() => {
		// fetch all questions
		const fetchQuestions = async () => {
			const result = await getQuestions();
			setQuestions(result);
		};

		// fetch logged in user and store data in global state
		if (userId) {
			const fetchUsers = async () => {
				const result = await getUsers();
				const user = result.find(({ user_id: id }) => id === userId);
				localStorage.setItem('userData', JSON.stringify(user));
				dispatch(STORE_USER_DATA, user);
			};

			fetchUsers();
		}
		fetchQuestions();
	}, []);

	return (
		<div className="lpContainer">
			<div className={`${styles.dashboard}`}>
				<div className={styles.questions}>
					<main className={styles.main}>
						<div className={styles.header}>
							<h2>Dashboard</h2>
							<div>
								<span className={styles.icon}>
									<IoFilterOutline />
								</span>
								<Link to="/post-questions" className={styles.btn}>
									Ask A Question
								</Link>
							</div>
						</div>
						<section className={styles.body}>
							<div className={`${styles.postsContainer} ${styles.scrollbar} `}>
								{questions.length === 0 ? (
									<CardSkeleton cards={8} />
								) : (
									sortByDate(questions).map((post) => (
										<PostCard post={post} key={post.question_id} />
									))
								)}
							</div>
						</section>
					</main>
				</div>
				<aside className={styles.aside}>
					{userId && (
						<div className={styles.components}>
							<TopUsers />
							<Tags />
						</div>
					)}

					{!userId && (
						<div className={styles.aside_auth}>
							<h4 className={styles.auth_title}>New to DevAsk?</h4>
							<p className={styles.auth_text}>
								Sign up to get personal account
							</p>

							<p className={styles.alt_text}>
								By signing up, you agree to the{' '}
								<Link to="/terms-of-use">Terms of Use,</Link>{' '}
								<Link to="/privacy">Privacy Policy</Link> and{' '}
								<Link to="/cookie-policy">Cookie Use.</Link>
							</p>

							<Link to="/sign-up">Sign Up with email</Link>

							<p className={styles.auth_text}>
								Already have a DevAsk account? <Link to="/login">Login</Link>
							</p>
						</div>
					)}
					<Yml />
				</aside>
			</div>
		</div>
	);
}

export default NewDashboard;
