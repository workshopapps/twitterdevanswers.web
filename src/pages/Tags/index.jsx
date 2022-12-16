import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Tag from '../../components/Tags/Tag';
// import Data from '../../components/Tags/Data';
import Pagination, { tagsPerPage } from '../../components/Tags/Pagination';
import Button from '../../components/Tags/Button/Button';
import BUTTON_TYPES from '../../components/Tags/Button/Data';

import styles from './tags.module.css';
import tagstyles from './index.module.css';
// import share from '../../assets/dashboard-images/share.webp';

const defaultPage = {
	start: 0,
	end: tagsPerPage,
	currentPage: 1,
};

export default function Tags() {
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
		const response = await axios.get(
			`https://api.devask.hng.tech/answer/${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data.length;
	}

	const [grid, setGrid] = useState(true);
	const [page, setPage] = useState(defaultPage);

	const [questions, setQuestions] = useState([]);
	const [users, setUsers] = useState([]);
	const [replies, setReplies] = useState([]);
	const [tags, setTags] = useState([]);
	const findUser = (id) => users.find((user) => user.user_id === id);

	useEffect(() => {
		(async function getData() {
			const response = await axios.get(
				'https://api.devask.hng.tech/questions/',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const fetchedQuestions = await response.data.data;

			setQuestions(fetchedQuestions);
			setTags(fetchedQuestions);

			setUsers(await getUser());
			const fetchedReplies = fetchedQuestions.map(async (fetchedQuestion) =>
				getTotalReplies(fetchedQuestion.question_id)
			);

			Promise.all([...fetchedReplies].reverse()).then((reply) =>
				setReplies((prevState) => [...prevState, reply])
			);
		})();
	}, []);

	const nextPageHandler = () => {
		setPage((prevVal) => ({
			start: prevVal.start + tagsPerPage,
			end: prevVal.end + tagsPerPage,
			currentPage: prevVal.currentPage + 1,
		}));
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const prevPageHandler = () => {
		setPage((prevVal) => ({
			start: prevVal.start - tagsPerPage,
			end: prevVal.end - tagsPerPage,
			currentPage: prevVal.currentPage - 1,
		}));
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const handleClick = () => {
		setGrid((prevVal) => !prevVal);
	};

	const setActiveBtn = (event) => {
		const btns = document.querySelectorAll('.btn');
		btns.forEach((btn) => btn.classList.remove('active'));
		event.target.classList.add('active');
	};

	const filterTagsHandler = (event) => {
		setActiveBtn(event);
		const filter = event.target.textContent.toLowerCase();
		let filteredTags;

		if (filter === 'view all') {
			filteredTags = questions.filter((tag) => tag.tag !== filter);
			setTags(filteredTags);
			return setPage(defaultPage);
		}

		filteredTags = questions.filter((tag) => tag.tag === filter);
		setTags(filteredTags);
		return setPage(defaultPage);
	};

	return (
		<section className={styles['tags-section']}>
			<div className={styles['tags-container']}>
				<header className={styles['tags-header']}>
					<h1 className={styles['header-title']}>Tags</h1>

					<div className={styles['tags-header__btn-container']}>
						<Button type={BUTTON_TYPES.SECONDARY} btnText="Popular" />
						<button
							className={styles.button}
							type="button"
							onClick={handleClick}
						>
							{grid ? 'Grid' : 'List'}
						</button>
					</div>
				</header>

				<nav className={styles['tags-nav']}>
					<Button
						type={BUTTON_TYPES.SECONDARY}
						onClick={filterTagsHandler}
						btnText="Java"
					/>
					<span className={styles.hidden_8}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Python"
						/>
					</span>

					<span className={styles.hidden_6}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Php"
						/>
					</span>
					<span className={styles.hidden_5}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="C++"
						/>
					</span>
					<span className={styles.hidden_4}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Ajax"
						/>
					</span>

					<span className={styles.hidden_3}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Node.js"
						/>
					</span>
					{/* <span className={styles.hidden_2}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="C#"
						/>
					</span>
					<span className={styles.hidden_2}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="React.js"
						/>
					</span>
					<span className={styles.hidden_1}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Swift"
						/>
					</span>
					<span className={styles.hidden_1}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="Linux"
						/>
					</span>
					<span className={styles.hidden_1}>
						<Button
							type={BUTTON_TYPES.PRIMARY}
							onClick={filterTagsHandler}
							btnText="R"
						/>
					</span> */}
					<Button
						type={BUTTON_TYPES.PRIMARY}
						onClick={filterTagsHandler}
						btnText="View all"
					/>
				</nav>

				<div>
					<div className={grid ? styles.grid : styles.list}>
						{tags.length !== 0
							? tags
									.slice(page.start, page.end)
									.map((item, index) => (
										<Tag
											key={item.id}
											isGridView={grid}
											Data={item}
											users={users}
											replies={replies}
											index={index}
										/>
									))
							: 'Selected Tags Record not Available..'}
					</div>
				</div>
				{tags.length > tagsPerPage && (
					<Pagination
						currentPage={page.currentPage}
						next={nextPageHandler}
						prev={prevPageHandler}
						data={tags}
					/>
				)}
			</div>
			<aside className={tagstyles.aside}>
				<section className={tagstyles['relevant-topics']}>
					{/* Topics suggestions */}
					<div
						className={`${tagstyles.topics} ${tagstyles['aside-container']}`}
					>
						<h3 className={tagstyles['heading-secondary']}>You might like</h3>
						{questions.map((question, i) => (
							<div key={question.question_id} className={tagstyles.topic}>
								<Link to={`/profile/${findUser(question.owner_id)?.username}`}>
									<img
										src={
											findUser(question.owner_id)?.image_url?.trim()
												? findUser(question.owner_id)?.image_url
												: 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'
										}
										alt=""
										className={tagstyles.profilePicture}
									/>
								</Link>

								<div className={tagstyles.content}>
									<Link
										to={`/question-page/${question.question_id}`}
										style={{ textDecoration: 'none' }}
									>
										<h4>{question.content.slice(0, 40)}</h4>
									</Link>
									<p>
										{replies[0] && replies[0][i]}{' '}
										{replies[0] && replies[0][i] === 1 ? 'Reply' : 'Replies'}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Accounts suggestions */}
					<div className={`${tagstyles.users} ${tagstyles['aside-container']}`}>
						<h3 className={tagstyles['heading-secondary']}>You might follow</h3>
						{[...users].slice(0, 3).map((user) => (
							<div key={user.user_id} className={tagstyles.user}>
								<Link to={`/profile/${user?.username}`}>
									<img
										src={
											user?.image_url?.trim()
												? user.image_url
												: 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'
										}
										alt=""
										className={tagstyles.profilePicture}
									/>
								</Link>
								<div className={tagstyles.details}>
									<div>
										<h4>{user.username}</h4>
										<p>@{user.username}</p>
									</div>
									{/* <p>Follows you</p> */}
								</div>
								<button type="button">Follow</button>
							</div>
						))}

						<Link to="/users-page">See more</Link>
					</div>
				</section>
			</aside>
		</section>
	);
}
