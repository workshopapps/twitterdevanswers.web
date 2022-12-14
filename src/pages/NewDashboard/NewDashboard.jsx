import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFilterOutline } from 'react-icons/io5';
import { AppContext } from '../../store/AppContext';
import TopUsers from './TopUsers/TopUsers';
import Yml from './Yml/Yml';
import PostCard from './PostCard/PostCard';
import Tags from './Tags/Tags';
import styles from './newDashboard.module.css';
import useMessenger from './utils';
import { STORE_USER_DATA } from '../../store/actionTypes';

const tags = [
	'python',
	'html',
	'django',
	'android',
	'c#',
	'c++',
	'sql',
	'css',
	'php',
	'java',
	'jquery',
	'node js',
	'react js',
];

function NewDashboard() {
	const [questions, setQuestions] = useState([]);

	const { getQuestions, getUsers } = useMessenger();

	const {
		state: {
			user: { user_id: userId },
		},
		dispatch,
	} = useContext(AppContext);

	useEffect(() => {
		// fetch all questions
		const fetchQuestions = async () => {
			const result = await getQuestions();
			setQuestions(result);
		};

		// fetch logged in user and store data in global state
		const fetchUsers = async () => {
			const result = await getUsers();
			const user = result.find(({ user_id: id }) => id === userId);
			localStorage.setItem('userData', JSON.stringify(user));
			dispatch(STORE_USER_DATA, user);
		};

		fetchQuestions();
		fetchUsers();
	}, []);

	return (
		<div className={` lpContainer`}>
			<div className={`${styles.dashboard}`}>
				<main className={styles.main}>
					<div className={styles.header}>
						<h2>Home</h2>
						<div>
							<span className={styles.icon}>
								<IoFilterOutline />
							</span>
							<Link to="post-questions" className={styles.btn}>
								Ask A Question
							</Link>
						</div>
					</div>
					<section className={styles.body}>
						<div className={`${styles.postsContainer} ${styles.scrollbar} `}>
							{questions.length === 0
								? null
								: questions.map((post) => (
										<PostCard post={post} key={post.question_id} />
								  ))}
						</div>
					</section>
				</main>
				<aside className={styles.aside}>
					<TopUsers />
					<Yml />
					<Tags tags={tags} />
				</aside>
			</div>
		</div>
	);
}

export default NewDashboard;
