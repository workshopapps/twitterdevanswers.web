import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styles from './Asks.module.css';
import arrowLeft from '../../assets/dashboard-images/arrowLeft.webp';
import message from '../../assets/dashboard-images/message.webp';
import heart from '../../assets/dashboard-images/heart.webp';
import share from '../../assets/dashboard-images/share.webp';
import options from '../../assets/dashboard-images/options.webp';
import user from '../../assets/dashboard-images/user.webp';
// import mugiwara from '../../assets/dashboard-images/mugiwara.webp';
// import testQuestions from '../../utils/testQuestions.json';

const token = localStorage.getItem('token');

async function getUser() {
	const response = await axios.get(
		`https://pacific-peak-54505.herokuapp.com/users/`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return response.data.data;
}

function Asks() {
	const formatDate = (date) =>
		new Intl.DateTimeFormat(navigator.language, {
			day: '2-digit',
			month: 'long',
			hour: 'numeric',
			minute: 'numeric',
		}).format(new Date(date));

	const paramValues = useParams();
	const [reply, setReply] = useState('');
	const [question, setQuestion] = useState([]);
	const [users, setUsers] = useState([]);
	const findUser = (id) => users.find((userr) => userr.user_id === id);
	const [answers, setAnswers] = useState([]);
	async function getAnswers(id) {
		const response = await axios.get(
			`https://pacific-peak-54505.herokuapp.com/answer/${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	}

	useEffect(() => {
		(async function getData() {
			const response = await axios.get(
				`https://pacific-peak-54505.herokuapp.com/questions/${paramValues.id}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const fetchedQuestions = await response.data.data;
			setQuestion(fetchedQuestions);
			setUsers(await getUser());
			setAnswers(await getAnswers(paramValues.id));
		})();
	}, []);

	function handleReply(event) {
		setReply(event.target.value);
		console.log(event.target.value);
	}

	function submitHandler() {
		async function postAnswer() {
			const response = await fetch(
				`https://pacific-peak-54505.herokuapp.com/answer/`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json',
						Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYXlvYmF5b0BnbWFpbC5jb20iLCJleHAiOjE2NzAxMjMwMjF9.BEysvyjtWGl_rrIHHPgbPb7BStTGb5lKlLj3YR1LZnU`,
					},
					body: JSON.stringify({
						question_id: paramValues.id,
						content: reply,
					}),
				}
			);

			console.log(response.data);
			setReply('');
			return response.data;
		}
		postAnswer();
	}

	// const selectQuestion = testQuestions.find(
	// 	(question) => question.id_str === paramValues.id
	// );

	const answerss = answers?.map((answer) => (
		<div className={styles.cardContainer} key={answer.answer_id}>
			<section className={styles.cardHeader}>
				<div>
					<img
						src="https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1"
						alt=""
						className={styles.profilePicture}
					/>
					<div>
						<div className={styles.userInfo}>
							<h5 className={styles.askName}>
								{findUser(answer.owner_id)?.username}
								{/* {answer.name.slice(0, 1).toUpperCase()} */}
								{/* {answer.name.slice(1, 30)} */}
							</h5>
							{/* <p className={styles.userName}>{answer.email}</p> */}
							<p className={styles.time}>
								{answer.created_at && formatDate(answer.created_at)}
							</p>
						</div>
						<p className={styles.replying}>
							replying to {findUser(question.owner)?.username}
						</p>
					</div>
				</div>
				{/* <img src={answer.options} alt="" className={styles.optionsReply} /> */}
			</section>
			<h6 className={styles.reply}>{answer.content}</h6>
			<section className={styles.cardFooter}>
				{/* <div className={styles.replyPageIcons}>
					<img src={answer.viewReplies} alt="" />
					<img src={answer.likes} alt="" />
					<img src={answer.correct} alt="" />
					<img src={answer.share} alt="" className={styles.share} />
				</div> */}
			</section>
		</div>
	));

	return (
		<div className={styles.ask}>
			<Link to="/dashboard" className={styles.back}>
				<img src={arrowLeft} alt="" />
				<p>Go back</p>
			</Link>
			<section className={styles.header}>
				<div className={styles.aboutUser}>
					<img
						src="https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1"
						alt="Profile Avatar"
					/>
					<div>
						<h4 className={styles.askName}>
							{findUser(question.owner)?.username}
						</h4>
						<div className={styles.timeDate}>
							{/* <p>11:03</p> */}
							<p>{question.createdAt && formatDate(question.createdAt)}</p>
						</div>
					</div>
				</div>
				<p className={styles.edit}>Edit</p>
				<img src={options} alt="" className={styles.options} />
			</section>
			<section className={styles.question}>
				<h4 className={styles.title}> {question.title}</h4>
				<p className={styles.description}>{question.content}</p>
				{/* <p className={styles.snippet}>{selectQuestion.description}</p> */}
				{/* <p className={styles.description}>
					Thanks anyone out there who can see my mistake!
				</p> */}
			</section>
			<div className={styles.tagEdit}>
				{/* <div className={styles.tagWrapper}>
					{question.tags.map((tag) => (
						<Link
							to="/tags-page"
							style={{ textDecoration: 'none', display: 'flex', width: '100%' }}
							key={tag}
						>
							<p className={styles.tag}>{tag}</p>
						</Link>
					))}
				</div> */}

				<p className={styles.editMobile}>Edit</p>
			</div>
			<section className={styles.stats}>
				<p>
					<strong>{question?.answers?.length}</strong> Replies
				</p>
				<p>
					<strong>2</strong> Likes
				</p>
			</section>
			<section className={styles.icons}>
				<img src={message} alt="" />
				<img src={heart} alt="" />
				<img src={share} alt="" />
			</section>
			<section className={styles.typeReply}>
				<img src={user} alt="" />
				<textarea
					name="text"
					value={reply}
					onChange={handleReply}
					placeholder="Type your reply"
					className={styles.writeReply}
					rows={2}
				/>
				<button type="button" onClick={submitHandler}>
					Post Reply
				</button>
			</section>
			<div className={styles.answers}>{answerss}</div>
		</div>
	);
}

export default Asks;
