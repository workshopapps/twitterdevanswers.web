/* eslint-disable no-unused-vars */
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
import AuthModal from '../AuthPage/AuthModal';
import { useModal } from '../AuthPage/utils';
import Modal from '../../components/Modal/Modal';

function QuestionPage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const cred = JSON.parse(localStorage.getItem('user'));
	const loggedInUserId = cred?.user_id;

	const [question, setQuestion] = useState({});
	const [askedBy, setAskedBy] = useState({});
	const [answers, setAnswers] = useState([]);
	const [msg, setMsg] = useState('');
	const [show, setShow] = useState(false);
	const [liked, setLiked] = useState([]);
	const [alreadyLiked, setAlreadyLiked] = useState({});
	const [loggedInUserCred, setLoggedInUserCred] = useState({});

	const {
		getQuestions,
		getAnswers,
		getUsers,
		postAnswer,
		sortByDate,
		getLikes,
		likeUnlike,
		deleteQuestion,
		getUserbyUsername,
	} = useMessenger();
	const { modal, showModal } = useModal();

	function showShareModal() {
		setShow(true);
	}

	function hideShareModal() {
		setShow(false);
	}

	const showShare = (event) => {
		event.stopPropagation();
		showShareModal();
	};
	const hideShare = () => hideShareModal();

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

	useEffect(() => {
		const fetchUserByUserName = async () => {
			const result = await getUserbyUsername(cred?.usename);
			setLoggedInUserCred(result);
		};

		// get answers
		const fetchAnswers = async () => {
			const result = await getAnswers(id);
			setAnswers(result);
		};

		const fetchLikes = async () => {
			// get likes array
			const { data } = await getLikes(id);
			setLiked(data);

			// check if the user has liked the question prior
			const response = data?.find(
				({ user_id: userId, like_type: likeType }) =>
					userId === loggedInUserId && likeType === 'up'
			);
			setAlreadyLiked(response);
		};

		fetchLikes();
		fetchAnswers();
		fetchUserByUserName();
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
		try {
			const response = await postAnswer(answer, id);
			setAnswers((prev) => [...prev, response.data]);

			showModal();
			setMsg('Response has been recorded');
		} catch (error) {
			showModal();
			setMsg(error.response.data.detail);
		}
	};

	const handleLIke = (event) => {
		event.stopPropagation();

		if (alreadyLiked) {
			likeUnlike(id, 'down');
			setLiked([...liked].filter((item) => item.user_id !== loggedInUserId));

			setAlreadyLiked(undefined);
		} else {
			likeUnlike(id, 'up');
			setLiked((prev) => [
				...prev,
				{ user_id: loggedInUserId, like_type: 'up', question_id: id },
			]);

			setAlreadyLiked({
				user_id: loggedInUserId,
				like_type: 'up',
				question_id: id,
			});
		}
	};

	const handleDelete = async () => {
		try {
			await deleteQuestion(question.question_id);
			navigate('/dashboard');
		} catch (error) {
			throw new Error();
		}
	};

	console.log(answers);
	const numOfLikes = liked?.filter((item) => item.like_type === 'up');

	return (
		<div className="dashContainer">
			<div className="modal">{modal && <AuthModal text={msg} />}</div>
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
												handleNavigate(event, `/profile/${askedBy?.user_id}`)
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
													handleNavigate(event, `/profile/${askedBy?.user_id}`)
												}
											>{`${askedBy?.first_name} ${askedBy?.last_name}`}</span>
											<span className={styles.timeStamp}>{formatDate()}</span>
										</div>
									</div>
									{askedBy.user_id === loggedInUserId ||
									loggedInUserCred?.is_admin ? (
										<button
											onClick={handleDelete}
											type="button"
											className={styles.delete}
										>
											Delete
										</button>
									) : null}
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
												{numOfLikes?.length} like
												{numOfLikes?.length > 1 || numOfLikes?.length === 0
													? 's'
													: ''}
											</span>
										</div>
										<div className={styles.icons}>
											<div className={styles.message}>
												<BsChatSquareDots className={styles.icon} />
											</div>
											<div className={styles.likes}>
												<Heart
													className={styles.icon}
													onClick={handleLIke}
													style={{
														fill:
															alreadyLiked?.like_type === 'up'
																? '#4343DE'
																: 'transparent',
													}}
												/>
											</div>
											<Modal onClose={hideShare} show={show} hide={hideShare} />

											<button
												type="button"
												onClick={showShare}
												className={styles.share}
											>
												<BsShare className={styles.icon} />
											</button>
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
							: sortByDate(answers)?.map((reply) => (
									<ReplyCard
										reply={reply}
										questionId={id}
										key={reply.answer_id}
										poster={askedBy && askedBy.username}
									/>
							  ))}
					</div>
				</section>
				<aside className={styles.aside}>
					<div className={styles.components}>
						<TopUsers />
						<Yml />
					</div>
				</aside>
			</div>
		</div>
	);
}

export default QuestionPage;
