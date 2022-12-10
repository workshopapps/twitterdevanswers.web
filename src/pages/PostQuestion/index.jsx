import React, { useState, useContext } from 'react';

import 'react-quill/dist/quill.snow.css';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './PostQuestion.module.css';
import Questions from './constants/Questions';
import { AppContext } from '../../store/AppContext';

function PostQuestion() {
	const navigate = useNavigate();
	const [isDetailDisabled, setIsDetailDisabled] = useState(true);
	const [isDescriptionDisabled, setIsDescriptionDisabled] = useState(true);
	const [isTokenError, setIsTokenError] = useState('');

	const { state } = useContext(AppContext);

	const handleClickScroll = () => {
		const element = document.getElementById('root');
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isTagsOpen, setIsTagsOpen] = useState(false);
	const [isTokensOpen, setIsTokensOpen] = useState(false);
	// const [detail, setDetail] = useState({ text: '' });
	// const [description, setDescription] = useState({ text: '' });
	const [questionData, setQuestionData] = useState({
		id: '',
		title: '',
		text: '',
		description: '',
		tag: '',
		token: 0,
	});

	const [tags, setTags] = useState([
		'Java',
		'Python',
		'Android',
		'Php',
		'C++',
		'Ajax',
		'MYSQL',
		'Node.js',
		'C#',
		'React.js',
		'Swift',
		'Linux',
		'R',
		'Golang',
		'CSS',
		'Tailwind',
		'SQL',
	]);

	const [tokens, setTokens] = useState([
		20, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100,
	]);

	const handleTagClick = (tagName) => {
		setTags(
			[
				'Java',
				'Python',
				'Android',
				'Php',
				'C++',
				'Ajax',
				'MYSQL',
				'Node.js',
				'C#',
				'React.js',
				'Swift',
				'Linux',
				'R',
				'Golang',
				'CSS',
				'Tailwind',
				'SQL',
			].filter((tag) => tag !== tagName)
		);
		setQuestionData((prevState) => ({
			...prevState,
			tag: tagName,
		}));
		setIsTagsOpen(!isTagsOpen);
	};

	const handleTokenClick = (tokenValue) => {
		setTokens(
			[20, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].filter(
				(token) => token !== tokenValue
			)
		);
		setQuestionData((prevState) => ({
			...prevState,
			token: tokenValue,
		}));
		setIsTokensOpen(!isTokensOpen);
	};

	const handleTokenRemoval = () => {
		setQuestionData((prevState) => ({
			...prevState,
			token: 0,
		}));
		setTokens([
			20, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100,
		]);
		setIsTokensOpen(false);
	};

	const handleTagRemoval = () => {
		setQuestionData((prevState) => ({
			...prevState,
			tag: '',
		}));
		setTags([
			'Java',
			'Python',
			'Android',
			'Php',
			'C++',
			'Ajax',
			'MYSQL',
			'Node.js',
			'C#',
			'React.js',
			'Swift',
			'Linux',
			'R',
			'Golang',
			'CSS',
			'Tailwind',
			'SQL',
		]);
		setIsTagsOpen(false);
	};

	const handleDisabling = () => {
		if (questionData.title === '') {
			setIsDetailDisabled(true);
			setIsDescriptionDisabled(true);
		}

		if (questionData.detail === '') {
			setIsDescriptionDisabled(true);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setQuestionData((prevState) => ({
			...prevState,
			id: nanoid(),
			[name]: value,
		}));

		handleDisabling();
	};

	// const handleDetail = (value) => {
	// 	setDetail((prev) => ({ ...prev, text: value }));
	// 	handleDisabling();
	// };

	// const handleDescription = (value) => {
	// 	setDescription((prev) => ({ ...prev, text: value }));
	// 	handleDisabling();
	// };

	const handleReview = (event) => {
		event.preventDefault();
		if (
			questionData.title !== '' &&
			questionData.detail !== '' &&
			questionData.description !== '' &&
			questionData.tag !== ''
		) {
			setIsModalOpen(true);
			handleClickScroll();
		}
	};

	const handleNextDetail = () => {
		if (questionData.title !== '') {
			setIsDetailDisabled(false);
		} else {
			setIsDetailDisabled(true);
		}
	};

	const handleNextDescription = () => {
		if (
			questionData.title !== '' &&
			questionData.detail !== '' &&
			questionData.detail.length > 20
		) {
			setIsDescriptionDisabled(false);
		} else {
			setIsDescriptionDisabled(true);
		}
	};

	const postNewQuestion = async () => {
		const details = {
			owner_id: 2,
			content_id: questionData.id,
			title: questionData.title,
			content: `${questionData.detail}`,
			expected_result: `${questionData.description}`,
			payment_amount: `${questionData.token}`,
			answered: false,
			created_at: Date.now(),
			updated_at: Date.now(),
		};

		const headers = {
			Authorization: `Bearer ${state.token}`,
			'Content-Type': 'application/json',
		};

		try {
			const data = await axios.post(
				'https://api.devask.hng.tech/questions',
				details,
				{
					headers,
				}
			);
			if (data) {
				setIsSuccessful(true);

				setTimeout(() => {
					navigate('#/dashboard');
				}, 5000);
			}
		} catch (err) {
			setIsTokenError('Cannot complete request now. Try again later...');
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		postNewQuestion();
	};

	return (
		<main className={styles.containerWrapper}>
			{isModalOpen && (
				<section className={styles.overlay}>
					<div className={styles.modal}>
						{isSuccessful ? (
							<div className={styles.response}>
								<h2>Question Submitted Successfully!</h2>
								<p>Keep an eye for solutions to your question.</p>
								<button
									type="button"
									className={`${styles.modalButton} ${styles.modalCancel}`}
									onClick={() => {
										setIsSuccessful(false);
										setIsModalOpen(false);
									}}
								>
									Close
								</button>
							</div>
						) : (
							<section className={styles.modalContent}>
								{isTokenError ? (
									<div>
										<p className={styles.ErrorBody}>{isTokenError}</p>
										<div className={styles.modalButtonWrapper}>
											<button
												type="button"
												className={`${styles.modalButton} ${styles.modalCancel}`}
												onClick={() => setIsModalOpen(false)}
											>
												Close
											</button>
										</div>
									</div>
								) : (
									<>
										<div>
											<h3 className={styles.modalHeader}>Title</h3>
											<p className={styles.modalBody}>{questionData.title}</p>
										</div>

										<div>
											<h3 className={styles.modalHeader}>Details</h3>
											<p className={styles.modalBody}>{questionData.title}</p>
										</div>

										<div>
											<h3 className={styles.modalHeader}>Description</h3>
											<p className={styles.modalBody}>{questionData.title}</p>
										</div>

										<div>
											<h3 className={styles.modalHeader}>Tag</h3>
											<p className={styles.modalBody}>{questionData.tag}</p>
										</div>

										<div>
											<h3 className={styles.modalHeader}>Tokens</h3>
											<p className={styles.modalBody}>{questionData.token}</p>
										</div>

										<div className={styles.modalButtonWrapper}>
											<button
												type="button"
												className={`${styles.modalButton} ${styles.modalSubmit}`}
												onClick={handleSubmit}
											>
												Submit Question
											</button>
											<button
												type="button"
												className={`${styles.modalButton} ${styles.modalCancel}`}
												onClick={() => setIsModalOpen(false)}
											>
												Cancel
											</button>
										</div>
									</>
								)}
							</section>
						)}
					</div>
				</section>
			)}

			<section className={styles.header}>
				<div>
					<h1 className={styles.headerH1}>Ask a public question</h1>
					<p>
						You are ready to ask a programming related question and this form
						will help guild you through the process. Looking to ask a
						non-programming question? See the topic here to find a relevant site
					</p>
				</div>

				<div className={styles.steps}>
					<h2>Steps</h2>
					<ul>
						{Questions.map((question) => {
							const { id, text } = question;
							return <li key={id}>{text}</li>;
						})}
					</ul>
				</div>
			</section>

			<section className={styles.container}>
				{/* title */}
				<form>
					<section className={styles.titleWrapper}>
						<div>
							<h3>Title</h3>
							<p>
								Be specific and imagine you are asking a question to another
								person
							</p>
							<input
								type="text"
								placeholder="Type your title here"
								value={questionData.title}
								name="title"
								onChange={handleChange}
								required
								onBlur={handleNextDetail}
							/>
						</div>

						<button type="button" onClick={handleNextDetail}>
							Next
						</button>
					</section>

					{/* problem */}
					<section className={styles.problemWrapper} id="problem">
						<div className={styles.problemdetailhead}>
							<h3>What are the detail of your problem?</h3>
							<p>
								Introduce the problem and expand on what you put in the title.
								Minimum 20 characters
							</p>
							<div className={styles.textIcons}>
								<span>
									<img src="/post-question/caseIcon.svg" alt="case Icon" />
								</span>
								<span>
									<img src="/post-question/BoldIcon.svg" alt="Bold Icon" />
								</span>
								<span>
									<img src="/post-question/italic.svg" alt="italic Icon" />
								</span>
								<span>
									<img src="/post-question/linkIcon.svg" alt="link Icon" />
								</span>
								<span>
									<img
										src="/post-question/unknown-text.svg"
										alt="unknown-text Icon"
									/>
								</span>
								<span>
									<img src="/post-question/quoteIcon.svg" alt="quote Icon" />
								</span>
							</div>
							<textarea
								value={questionData.detail}
								name="detail"
								onChange={handleChange}
								minLength={20}
								disabled={isDetailDisabled}
								required
								onBlur={handleNextDescription}
							/>
						</div>
						<button type="button" onClick={handleNextDescription}>
							Next
						</button>
					</section>

					{/* detail */}
					<section className={styles.detailWrapper} id="detail">
						<div className={styles.content}>
							<h3>What did you try and what were you expecting?</h3>
							<p>
								Describe what you tried, what you expect to happen, and what
								actually resulted. Minimum 20 characters
							</p>

							<div className={styles.textIcons}>
								<span>
									<img src="/post-question/caseIcon.svg" alt="case Icon" />
								</span>
								<span>
									<img src="/post-question/BoldIcon.svg" alt="Bold Icon" />
								</span>
								<span>
									<img src="/post-question/italic.svg" alt="italic Icon" />
								</span>
								<span>
									<img src="/post-question/linkIcon.svg" alt="link Icon" />
								</span>
								<span>
									<img
										src="/post-question/unknown-text.svg"
										alt="unknown-text Icon"
									/>
								</span>
								<span>
									<img src="/post-question/quoteIcon.svg" alt="quote Icon" />
								</span>
							</div>

							<textarea
								value={questionData.description}
								name="description"
								onChange={handleChange}
								minLength={20}
								disabled={isDescriptionDisabled}
								required
							>
								*Placeholder*
							</textarea>
						</div>

						{/* Add tag */}
						<section className={styles.tagWrapper}>
							<div className={styles.tagContent}>
								<span className={styles.text}>Add Tags </span>

								<button
									type="button"
									onClick={() => setIsTagsOpen(!isTagsOpen)}
									className={styles.tagsButton}
								>
									<img src="/post-question/down-arrow.svg" alt="Down Arrow" />
								</button>

								{isTagsOpen && (
									<div className={styles.tagsWrapper}>
										{isTagsOpen &&
											tags.map((tag) => (
												<button
													key={tag}
													type="button"
													onClick={() => handleTagClick(tag)}
												>
													{tag}
												</button>
											))}
									</div>
								)}
							</div>
						</section>
						{questionData.tag && (
							<p className={styles.allTagsText}>
								{questionData.tag}
								<button
									type="button"
									onClick={() => handleTagRemoval(questionData.tag)}
									className={styles.allTagsButton}
								>
									<img src="/post-question/cancel.svg" alt="Cancel Icon" />
								</button>
							</p>
						)}
					</section>

					<section className={styles.detailWrapper} id="detail">
						<div className={styles.content}>
							<h3>Allocate tokens to this question</h3>
							<p>
								Assign a minimum of 20 token to the user that profers a fitting
								solution to your problem.
							</p>
						</div>

						{/* Add tag */}
						<section className={styles.tagWrapper}>
							<div className={styles.tagContent}>
								<span className={styles.text}>Add Tokens </span>

								<button
									type="button"
									onClick={() => setIsTokensOpen(!isTokensOpen)}
									className={styles.tagsButton}
								>
									<img src="/post-question/down-arrow.svg" alt="Down Arrow" />
								</button>

								{isTokensOpen && (
									<div className={styles.tagsWrapper}>
										{isTokensOpen &&
											tokens.map((token) => (
												<button
													key={token}
													type="button"
													onClick={() => handleTokenClick(token)}
												>
													{token}
												</button>
											))}
									</div>
								)}
							</div>
						</section>
						{questionData.token !== 0 && (
							<p className={styles.allTagsText}>
								{questionData.token}
								<button
									type="button"
									onClick={() => handleTokenRemoval(questionData.token)}
									className={styles.allTagsButton}
								>
									<img src="/post-question/cancel.svg" alt="Cancel Icon" />
								</button>
							</p>
						)}
					</section>

					{/* buttons */}
					<section className={styles.buttonWrapper}>
						<div>
							<button
								className={styles.review}
								type="submit"
								onClick={handleReview}
							>
								Review your question
							</button>

							<button className={styles.discard} type="button">
								Discard draft
							</button>
						</div>
					</section>
				</form>
			</section>
		</main>
	);
}

PostQuestion.modules = {
	syntax: true,
	toolbar: [
		[
			{ size: [] },
			'bold',
			'italic',
			'underline',
			'strike',
			'blockquote',
			'link',
		],
		[{ 'code-block': true }],
	],
};
PostQuestion.formats = [
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'link',
	'code-block',
];

export default PostQuestion;
