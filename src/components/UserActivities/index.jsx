import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import options from '../../assets/profile-images/options.png';
import reward from '../../assets/profile-images/reward.svg';
import like from '../../assets/profile-images/like.svg';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import share from '../../assets/dashboard-images/share.webp';
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

	const [questions, setQuestions] = useState([]);
	const [sections, setSections] = useState();
	const [tabButtons, setTabButtons] = useState();
	const isVisitor = userFromStorage?.data?.usename !== thisuser;

	const [users, setUsers] = useState([]);
	const [info, setInfo] = useState({});
	const [replies, setReplies] = useState([]);

	const findUser = (id) => users.find((user) => user.user_id === id);
	useEffect(() => {
		setSections(document.querySelectorAll('.section'));
		setTabButtons(document.querySelectorAll('.tabButtons'));
	}, []);

	useEffect(() => {
		(async function getData() {
			const userIdResponse = await axios.get(
				`https://api.devask.hng.tech/users/${thisuser}`,
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
						`https://api.devask.hng.tech/users/${thisuser}`,
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
				{questions.map((question, i) => (
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
										{formatDate(question.created_at)}
									</p>
								</div>
								<img src={options} alt="" className={styles.options} />
							</section>
							<div>
								<Link
									to={`/dashboard/questions/${question.question_id}`}
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
										to={`/dashboard/questions/${question.question_id}`}
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
									<img src={share} alt="" className={styles.share} />
								</div>
								<span className={styles.reward}>
									<img src={dollarCircle} alt="" /> {question.payment_amount}
									token
								</span>
							</section>
						</div>
					</div>
				))}
			</section>

			<section
				className={`${styles['section-replies']} ${styles.hidden} section section-replies`}
			>
				<div className={styles.cardContainer}>
					<Link to="'profile/">
						<img
							src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
							alt=""
							className={styles.profilePicture}
						/>
					</Link>
					<div>
						<section className={styles.cardHeader}>
							<div className={styles.userInfo}>
								<Link
									to="/profile/"
									style={{ display: 'flex', textDecoration: 'none' }}
								>
									<h5 className={styles.askName}>
										<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
									</h5>
								</Link>
								<p className={styles.time}>36 secs</p>
							</div>
							<img src={options} alt="" className={styles.options} />
						</section>
						<Link to="/dashboard/questions" style={{ textDecoration: 'none' }}>
							<h4 className={styles.title}>
								Why does the NoReverse match error pop up when I’m trying to
								marginate my django website?
							</h4>
							<p className={styles.reply} style={{ lineHeight: '1.8' }}>
								I actually have no idea why this happens but i feel like if we
								all come together we can think of something that could work so
								i’m placing a bounty on this question thanks.
							</p>
						</Link>
						<div className={styles.tags}>
							<button type="button">Python</button>
						</div>
						<section className={styles.cardFooter}>
							<div className={styles.icons}>
								<span className={styles.viewReplies}>
									<img src={message} alt="" />
									{'17 '}
								</span>
								<span className={styles.likes}>
									<img src={heartBold} alt="" />
									12
								</span>
								<img src={share} alt="" className={styles.share} />
							</div>
							<span className={styles.reward}>
								<img src={dollarCircle} alt="" /> 1200token
							</span>
						</section>
					</div>
				</div>

				<div className={styles.replies}>
					<div className={styles.thread}>
						{/* Question */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Ayodele Emmanuel</span> <span>@ayemma_dev</span>
											</h5>
										</Link>
										<p className={styles.time}>36 secs</p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Why does the NoReverse match error pop up when I’m trying to
										marginate my django website?
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										I actually have no idea why this happens but i feel like if
										we all come together we can think of something that could
										work so i’m placing a bounty on this question thanks.
									</p>
								</Link>
								<div className={styles.tags}>
									<button type="button">Python</button>
								</div>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
									<span className={styles.reward}>
										<img src={dollarCircle} alt="" /> 1200token
									</span>
								</section>
							</div>
						</div>
						{/* Response 1 */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Codedlibra</span> <span>@codedlibra</span>
											</h5>
										</Link>
										<p className={styles.time}>2 mins</p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@ayemma_dev</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										To start debugging it, you need to start by disecting the
										error message given you. NoReverseMatch at /my_url/, this is
										the url that your application is currently trying to access
										but it contains a url that cannot be matched.
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
						{/* Response 2 */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Kayla Nicole</span> <span>@kayla_nicole </span>
											</h5>
										</Link>
										<p className={styles.time}>36 secs </p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@codedlibra</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										Thanks man🙏
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
					</div>

					<div className={styles.thread}>
						{/* Question */}

						{/* Response 1 */}
						<div className={styles.cardContainer}>
							<Link to="'profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Olamipo Bamisayemi</span>{' '}
												<span>@olabami_dev</span>
											</h5>
										</Link>
										<p className={styles.time}>2 mins</p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@ayemma_dev</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										Start by locating the code in your source relevant to the
										url that is currently being rendered- the url, the view, and
										any templates involved. In most cases, this will be the part
										of the code you’re currently developing.
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
						{/* Response 2 */}
						<div className={styles.cardContainer}>
							<Link to="profile/">
								<img
									src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
									alt=""
									className={styles.profilePicture}
								/>
							</Link>
							<div>
								<section className={styles.cardHeader}>
									<div className={styles.userInfo}>
										<Link
											to="/profile/"
											style={{ display: 'flex', textDecoration: 'none' }}
										>
											<h5 className={styles.askName}>
												<span>Kayla Nicole</span> <span>@kayla_nicole </span>
											</h5>
										</Link>
										<p className={styles.time}>36 secs </p>
									</div>
									<img src={options} alt="" className={styles.options} />
								</section>
								<Link
									to="/dashboard/questions"
									style={{ textDecoration: 'none' }}
								>
									<h4 className={styles.title}>
										Replying to <span>@olabami_dev</span>
									</h4>
									<p className={styles.reply} style={{ lineHeight: '1.8' }}>
										Thanks for helping. Will do that 🙏
									</p>
								</Link>
								<section className={styles.cardFooter}>
									<div className={styles.icons}>
										<span className={styles.viewReplies}>
											<img src={message} alt="" />
											{'17 '}
										</span>
										<span className={styles.likes}>
											<img src={heartBold} alt="" />
											12
										</span>
										<img src={share} alt="" className={styles.share} />
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className={`${styles['section-likes']} ${styles.hidden} section section-likes`}
			>
				<img src={like} alt="heart emoji" />
				<p>You&apos;ve liked a total number of 800 posts</p>
			</section>

			<section
				className={`${styles['section-rewards']} ${styles.hidden} section section-rewards`}
			>
				<img src={reward} alt="heart emoji" />
				<p>
					You’ve earned a total reward of {Number(info.account_balance)} Tokens
				</p>
			</section>
		</>
	);
}

export default UserActivities;
