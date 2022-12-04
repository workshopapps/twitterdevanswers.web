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

const token = localStorage.getItem('token');

async function getUser() {
	const response = await axios.get(`https://api.devask.hng.tech/users/`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.data;
}
async function getTotalReplies(id) {
	const response = await axios.get(`https://api.devask.hng.tech/answer/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data.length;
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
	const [totalReplies, setTootalReplies] = useState([]);
	const [users, setUsers] = useState([]);
	const findUser = (id) => users.find((userr) => userr.user_id === id);
	const [answers, setAnswers] = useState([]);
	async function getAnswers(id) {
		const response = await axios.get(
			`https://api.devask.hng.tech/answer/${id}`,
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
				`https://api.devask.hng.tech/questions/${paramValues.id}`,
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
			setTootalReplies(await getTotalReplies(paramValues.id));
		})();
	}, []);

	function handleReply(event) {
		setReply(event.target.value);
	}

	function submitHandler() {
		async function postAnswer() {
			const response = await fetch(`https://api.devask.hng.tech/answer/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					question_id: paramValues.id,
					content: reply,
				}),
			});

			setReply('');
			window.location.reload(false);
			return response.data;
		}
		postAnswer();
	}

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
							</h5>

							<p className={styles.time}>
								{answer.created_at && formatDate(answer.created_at)}
							</p>
						</div>
						<p className={styles.replying}>
							replying to {findUser(question.owner)?.username}
						</p>
					</div>
				</div>
			</section>
			<h6 className={styles.reply}>{answer.content}</h6>
			<section className={styles.cardFooter} />
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
							<p>{question.createdAt && formatDate(question.createdAt)}</p>
						</div>
					</div>
				</div>
				{/* <p className={styles.edit}>Edit</p> */}
				<img src={options} alt="" className={styles.options} />
			</section>
			<section className={styles.question}>
				<h4 className={styles.title}> {question.title}</h4>
				<p className={styles.description}>{question.content}</p>
			</section>
			<div className={styles.tagEdit}>
				<p className={styles.editMobile}>Edit</p>
			</div>
			<section className={styles.stats}>
				<p>
					<strong>{totalReplies}</strong> Replies
				</p>
				<p>
					<strong>0</strong> Likes
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
