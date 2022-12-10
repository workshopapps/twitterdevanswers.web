/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { IoFilterOutline } from 'react-icons/io5';
import { AppContext } from '../../store/AppContext';
import TopUsers from './TopUsers/TopUsers';
import Yml from './Yml/Yml';
import userAvatar from '../../assets/dashboard-images/profilePicture.webp';
import PostCard from './PostCard/PostCard';
import Tags from './Tags/Tags';
import styles from './newDashboard.module.css';

const posts = [
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		fullName: 'Darrell Steward',
		username: 'prosper',
		timeStamp: '36secs',
		title:
			'Why does the NoReverse match error pop up when I’m trying to marginate my django website?',
		text: 'I actually have no idea why this happens but i feel like if we all come together we can think of something that could work so i’m placing a bounty on this question thanks.',
		img: '',
		tag: 'Python',
		replies: '17',
		likes: '30',
		tokens: '0.0025',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		fullName: 'Uchiha Madara',
		username: 'madara',
		timeStamp: '36secs',
		title: '',
		text: 'Omooo my eyes have seen shege 😞 Who said writing codes was easy. I fit nod the person aswear',
		img: '',
		tag: 'Python',
		replies: '17',
		likes: '30',
		tokens: '',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		fullName: 'Hashirama Senju',
		username: 'hashirama',
		timeStamp: '36secs',
		title: '',
		text: 'Omooo my eyes have seen shege 😞 Who said writing codes was easy. I fit nod the person aswear',
		img: '',

		tag: 'Javascript',
		replies: '17',
		likes: '30',
		tokens: '0.0025',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		fullName: 'Dami',
		username: 'damie',
		timeStamp: '1hr',
		title: '',
		text: 'She just oozes self confidence and grace. See as person pikin fine, she con sabi code join. A top babe!',

		img: './assets/dami.png',
		tag: '',
		replies: '17',
		likes: '30',
		tokens: '',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		fullName: 'Oshigaki Kisame',
		username: 'kisame',
		timeStamp: '57secs',
		title: '',
		text: 'Omooo my eyes have seen shege 😞 Who said writing codes was easy. I fit nod the person aswear',
		img: '',
		tag: '',
		replies: '17',
		likes: '30',
		tokens: '',
	},
];

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
	const {
		state: { token },
	} = useContext(AppContext);
	console.log(token);

	// useEffect(() => {
	// 	const fetchQuestions = async () => {
	// 		try {
	// 			const response = axios({
	// 				method: 'get',
	// 				url: 'https://api.devask.hng.tech/questions',
	// 			});

	// 			const data = await response;

	// 			console.log(data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};

	// 	fetchQuestions();
	// }, []);

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
							<span className={styles.btn}>Ask A Question</span>
						</div>
					</div>
					<section className={styles.body}>
						{token && (
							<div className={styles.questionInput}>
								<div className={styles.left}>
									<img src={userAvatar} alt="user avatar" />
									<button type="button">Post</button>
								</div>
								<div className={styles.right}>
									<textarea
										name="question"
										id="question"
										cols="30"
										rows="10"
										placeholder="Start a discussion"
									/>
								</div>
							</div>
						)}
						<div className={`${styles.postsContainer} ${styles.scrollbar} `}>
							{posts.map((post) => (
								<PostCard post={post} key={post.fullName} />
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
