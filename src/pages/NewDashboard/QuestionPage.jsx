import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsChatSquareDots, BsShare, BsArrowLeft } from 'react-icons/bs';
import { ReactComponent as Heart } from './heart.svg';
import ReplyCard from './ReplyCard/ReplyCard';
import TopUsers from './TopUsers/TopUsers';
import Yml from './Yml/Yml';
import avatar from '../../assets/dashboard/user.png';
import styles from './questionPage.module.css';
import AnswerInput from './AnswerInput/AnswerInput';
import useMessenger from './utils';

function QuestionPage() {
	const navigate = useNavigate();
	const { id } = useParams();

	const [question, setQuestion] = useState({});
	const [askedBy, setAskedBy] = useState({});
	const [answers, setAnswers] = useState([]);

	const { getQuestions, getAnswers, getUsers, postAnswer } = useMessenger();

	// get question
	useEffect(() => {
		// fetch all questions
		const fetchQuestions = async () => {
			const result = await getQuestions();
			// get particular question
			const data = result.find(
				({ question_id: questionId }) => questionId === +id
			);
			setQuestion(data);
		};
		fetchQuestions();
	}, []);

	// get answers
	useEffect(() => {
		const fetchAnswers = async () => {
			const result = await getAnswers(id);
			setAnswers(result);
		};

		fetchAnswers();
	}, []);

	// get user
	useEffect(() => {
		const fetchUser = async () => {
			const result = await getUsers();
			const user = result.find(
				({ user_id: userId }) => userId === question.owner_id
			);
			setAskedBy(user);
		};

		if (Object.keys(question).length !== 0) fetchUser();
	}, [question]);

	const handleNavigate = (event, url) => {
		event.stopPropagation();
		navigate(url);
	};

	const formatDate = () => {
		const date = new Date(question?.created_at);

		function addLeadingZeros(num, totalLength) {
			return String(num).padStart(totalLength, '0');
		}

		const minutes = addLeadingZeros(date.getMinutes(), 2);
		const hours = addLeadingZeros(date.getHours(), 2);
		const day = addLeadingZeros(date.getDate(), 2);
		const month = date.toLocaleString('default', { month: 'short' });
		const year = date.getFullYear().toString().slice(-2);

		return `${hours}:${minutes}. ${day} ${month} ${year}`;
	};

	const handleSubmitAnswer = async (event, answer) => {
		event.preventDefault();
		// setAnswers((prev) => [...prev, answer]);
		const { data } = await postAnswer(answer, id);
		setAnswers((prev) => [...prev, data]);
	};

	return (
		<div className="lpContainer">
			<div className={styles.dashboard}>
				<section className={styles.main}>
					<div className={styles.header}>
						<div className={styles.back}>
							<span>
								<BsArrowLeft className={styles.icon} />
							</span>
							<span
								className={styles.text}
								role="button"
								onKeyDown={() => {}}
								onClick={() => navigate(-1)}
								tabIndex="0"
							>
								Go back
							</span>
						</div>
						<p>Based on who you follow</p>
					</div>
					{Object.keys(askedBy).length === 0 ||
					Object.keys(question).length === 0 ? (
						<div>loading</div>
					) : (
						<div className={styles.body}>
							<div className={styles.question}>
								<div className={styles.top}>
									<div className={styles.user}>
										<div
											className={styles.avatar}
											role="link"
											onKeyDown={() => {}}
											tabIndex={0}
											onClick={(event) =>
												handleNavigate(event, `/user-page/${askedBy?.user_id}`)
											}
										>
											<img
												src={
													askedBy?.image_url?.trim() === ''
														? avatar
														: askedBy?.image_url
												}
												alt="user avatar"
											/>
										</div>
										<div className={styles.userNstamp}>
											<span
												className={styles.fullName}
												role="link"
												onKeyDown={() => {}}
												tabIndex={0}
												onClick={(event) =>
													handleNavigate(
														event,
														`/user-page/${askedBy?.user_id}`
													)
												}
											>{`${askedBy?.first_name} ${askedBy?.last_name}`}</span>
											<span className={styles.timeStamp}>{formatDate()}</span>
										</div>
									</div>
									<span className={styles.edit}>Edit</span>
								</div>
								<div className={styles.bottom}>
									<h3 className={styles.title}>{question?.title}</h3>
									<p>{question?.content}</p>
									<div className={styles.details}>
										{question?.expected_result}
									</div>
									{/* <p className={styles.footNote}>
										Thanks anyone out there who can see my mistake!
									</p> */}
									<div>
										{question?.tag.trim() !== '' && (
											<span className={styles.tags}>{question?.tag}</span>
										)}
									</div>

									<div className={styles.interactions}>
										<div className={styles.repliesAndLikes}>
											<span>
												{answers?.length} repl
												{answers?.length > 1 || answers?.length === 0
													? 'ies'
													: 'y'}
											</span>
											<span>
												{question?.total_like} like
												{question?.total_like > 1 || question?.total_like === 0
													? 's'
													: ''}
											</span>
										</div>
										<div className={styles.icons}>
											<div className={styles.message}>
												<BsChatSquareDots className={styles.icon} />
											</div>
											<div className={styles.likes}>
												{/* <IoHeart/> */}
												<Heart
													className={styles.icon}
													style={{ fill: 'transparent' }}
												/>
											</div>
											<div>
												<BsShare className={styles.icon} />
											</div>
										</div>
									</div>
								</div>
							</div>
							<AnswerInput handleSubmitAnswer={handleSubmitAnswer} />
						</div>
					)}

					<div className={`${styles.replies} ${styles.scrollbar}`}>
						{answers.length === 0
							? null
							: answers?.map((reply) => (
									<ReplyCard
										reply={reply}
										key={reply.answer_id}
										poster={askedBy && askedBy.username}
									/>
							  ))}
					</div>
				</section>
				<aside className={styles.aside}>
					<TopUsers />
					<Yml />
				</aside>
			</div>
		</div>
	);
}

export default QuestionPage;
