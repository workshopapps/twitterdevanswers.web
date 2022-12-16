import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import options from '../../assets/profile-images/options.png';
import reward from '../../assets/profile-images/reward.svg';
import like from '../../assets/profile-images/like.svg';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import dollarCircle from '../../assets/dashboard-images/dollarCircle.webp';

const token = localStorage.getItem('token');
const userFromStorage = JSON.parse(localStorage.getItem('user'));

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

function UserActivities() {
	const { pathname } = useLocation();
	const thisuser = pathname.slice(pathname.lastIndexOf('/') + 1);
	const formatDate = (date) =>
		new Intl.DateTimeFormat(navigator.language, {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		}).format(new Date(date));

	const [allQuestions, setAllQuestions] = useState([]);
	const [questions, setQuestions] = useState([]);
	const [sections, setSections] = useState();
	const [answers, setAnswers] = useState([]);
	const [tabButtons, setTabButtons] = useState();
	const isVisitor = userFromStorage?.usename !== thisuser;

	const [users, setUsers] = useState([]);
	const [info, setInfo] = useState({});
	const [replies, setReplies] = useState([]);
	const [totalLikes, setTotalLikes] = useState(0);

	const findUser = (id) => users.find((user) => user.user_id === id);
	const findQuestion = (id) =>
		allQuestions?.find((post) => post.question_id === id);

	useEffect(() => {
		setSections(document.querySelectorAll('.section'));
		setTabButtons(document.querySelectorAll('.tabButtons'));
	}, []);

	useEffect(() => {
		(async function getData() {
			const userIdResponse = await axios.get(
				`https://api.devask.hng.tech/users/get/${thisuser}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const userIdData = await userIdResponse.data.data.user_id;

			try {
				const response = await axios.get(
					`https://api.devask.hng.tech/questions/${userIdData}/user`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const fetchedQuestions = await response.data.data;
				setQuestions(fetchedQuestions);
				setUsers(await getUser());

				const fetchedReplies = fetchedQuestions.map(async (fetchedQuestion) =>
					getTotalReplies(fetchedQuestion.question_id)
				);

				Promise.all([...fetchedReplies].reverse()).then((reply) =>
					setReplies((prevState) => [...prevState, reply])
				);
			} catch (error) {
				setQuestions([]);
			}

			const fetchUser = async () => {
				try {
					const data = await axios.get(
						`https://api.devask.hng.tech/users/get/${thisuser}`,
						{
							headers: {
								Authorization: `Bearer ${token}`,
								'Content-Type': 'application/json',
							},
						}
					);
					setInfo(data.data.data);
				} catch (err) {
					// console.error(err);
				}
			};
			fetchUser();

			try {
				const allQuestionsResponse = await axios.get(
					`https://api.devask.hng.tech/questions/`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const allQuestionsData = await allQuestionsResponse.data.data;
				setAllQuestions(allQuestionsData);
			} catch (error) {
				setAllQuestions([]);
			}

			try {
				const allAnswersResponse = await axios.get(
					`https://api.devask.hng.tech/answer/${userIdData}/user/`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const allAnswersData = await allAnswersResponse.data.data;
				setAnswers(allAnswersData);
			} catch (error) {
				setAnswers([]);
			}

			const fetchTotalLikes = async () => {
				try {
					const data = await axios.get(
						`https://api.devask.hng.tech/users/likes/${userIdData}`,
						{
							headers: {
								Authorization: `Bearer ${token}`,
								'Content-Type': 'application/json',
							},
						}
					);
					setTotalLikes(data.data.total_likes);
				} catch (err) {
					// console.error(err);
				}
			};
			fetchTotalLikes();
		})();
	}, [thisuser]);
	const toggleView = (event) => {
		if (event.target.type !== 'button') return;
		const button = event.target;

		sections?.forEach((section, i) => {
			section.classList.add(`${styles.hidden}`);
			tabButtons[i]?.classList.remove(`${styles.active}`);
		});

		document
			.querySelector(`.${`section-${button.textContent.toLowerCase()}`}`)
			.classList.remove(`${styles.hidden}`);
		button.classList.add(`${styles.active}`);
	};
	console.log(isVisitor);

	return (
		<>
			<header
				className={styles.header}
				onKeyDown={() => {}}
				role="menu"
				tabIndex="0"
				onClick={toggleView}
			>
				<button type="button" className={`${styles.active} tabButtons`}>
					Questions
				</button>
				<button className="tabButtons" type="button">
					Replies
				</button>
				<button className="tabButtons" type="button">
					Likes
				</button>
				{!isVisitor && (
					<button className="tabButtons" type="button">
						Rewards
					</button>
				)}
			</header>

			<section
				className={`${styles['section-questions']} ${styles.hidde} section section-questions`}
			>
				{questions.length !== 0 ? (
					questions.map((question, i) => (
						<div className={styles.cardContainer} key={question.question_id}>
							<Link to={`/profile/${findUser(question.owner_id)?.username}`}>
								<img
									src={
										findUser(question.owner_id)?.image_url?.trim()
											? findUser(question.owner_id)?.image_url
											: 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'
									}
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to={`/profile/${findUser(question.owner_id)?.username}`}
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												{findUser(question.owner_id)?.username}
											</h5>
										</Link>
										<p className={styles.time}>
											{question.created_at && formatDate(question.created_at)}
										</p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<div>
									<Link
										to={`/question-page/${question.question_id}`}
										style={{ textDecoration: 'none' }}
										className={styles.title}
									>
										{question.title}
									</Link>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										{question.content}
									</p>
								</div>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<Link
											to={`/question-page/${question.question_id}`}
											style={{ textDecoration: 'none' }}
										>
											<span className={styles.viewReplies}>
												<img src={message} alt="" />
												{replies[0] && replies[0][i]}
											</span>
										</Link>
										<span className={styles.likes}>
											<img src={heartBold} alt="" /> {question.total_like}
										</span>
									</div>
									<span className={styles.reward}>
										<img src={dollarCircle} alt="" /> {question.payment_amount}
										token
									</span>
								</section>
							</div>
						</div>
					))
				) : (
					<p style={{ textAlign: 'center', marginTop: '50px' }}>
						{isVisitor ? `@${thisuser} hasn't` : `You haven't`} asked a question
					</p>
				)}
			</section>

			<section
				className={`${styles['section-replies']} ${styles.hidden} section section-replies`}
			>
				<div className={answers.length !== 0 ? styles.replies : ''}>
					{answers.length !== 0 ? (
						answers.map((answer) => (
							<div key={answer.answer_id} className={styles.thread}>
								<div className={styles.cardContainer}>
									<Link to={`/profile/${findUser(answer.owner_id)?.username}`}>
										<img
											src={
												findUser(answer.owner_id)?.image_url?.trim()
													? findUser(answer.owner_id)?.image_url
													: 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'
											}
											alt=""
											className={styles.profilePicture}
										/>
									</Link>
									<div>
										<section className={styles.cardHeader}>
											<div className={styles.userInfo}>
												<Link
													to={`/profile/${findUser(answer.owner_id)?.username}`}
													style={{ display: 'flex', textDecoration: 'none' }}
												>
													<h5 className={styles.askName}>
														{findUser(answer.owner_id)?.username}
													</h5>
												</Link>
												<p className={styles.time}>
													{' '}
													{answer.created_at && formatDate(answer.created_at)}
												</p>
											</div>
											<img src={options} alt="" className={styles.options} />
										</section>
										<Link
											to={`/question-page/${
												findQuestion(answer.question_id)?.question_id
											}`}
											style={{ textDecoration: 'none' }}
										>
											<h4 className={styles.title}>
												Replying to{' '}
												<span>
													@{' '}
													{
														findUser(findQuestion(answer.question_id)?.owner_id)
															?.username
													}
												</span>
											</h4>
											<p className={styles.reply} style={{ lineHeight: '1.8' }}>
												{answer.content}
											</p>
										</Link>
									</div>
								</div>
							</div>
						))
					) : (
						<p style={{ textAlign: 'center', marginTop: '50px' }}>
							{isVisitor ? `@${thisuser} hasn't` : `You haven't`} replied to any
							question
						</p>
					)}
				</div>
			</section>

			<section
				className={`${styles['section-likes']} ${styles.hidden} section section-likes`}
			>
				<img src={like} alt="heart emoji" />
				<p>
					{isVisitor ? `@${thisuser}` : `You`} liked a total number of{' '}
					{totalLikes || 0} posts
				</p>
			</section>

			<section
				className={`${styles['section-rewards']} ${styles.hidden} section section-rewards`}
			>
				<img src={reward} alt="heart emoji" />
				<p>
					{isVisitor ? `@${thisuser}` : `You`} earned a total reward of{' '}
					{Number(info.account_balance)} Tokens
				</p>
			</section>
		</>
	);
}

export default UserActivities;
