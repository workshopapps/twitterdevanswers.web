import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import styles from './PostQuestion.module.css';
import Questions from './constants/Questions';

function PostQuestion() {
	const handleClickScroll = () => {
		const element = document.getElementById('modal-section');
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [questionData, setQuestionData] = useState({
		id: '',
		title: '',
		detail: '',
		description: '',
		tags: [],
		user: {
			id: 6,
			id_str: '6',
			name: 'Amaka',
			screen_name: 'amaka',
			location: 'Nigeria',
			url: 'https://developer.twitter.com',
			description: "I'm a developer",
			verified: true,
			created_at: 'Wed May 23 06:01:13 +0000 2007',
			profile_image_url_https:
				'https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1',
			profile_banner_url:
				'https://pbs.twimg.com/profile_banners/6253282/1497491515',
		},
	});

	const [questions, setQuestions] = useState([]);

	const [tags, setTags] = useState([
		'Python',
		'JavaScript',
		'React',
		'Git/Github',
		'C#',
		'C++',
		'Java',
		'Golang',
		'CSS',
		'Tailwind',
		'SQL',
	]);

	const handleTagClick = (tagName) => {
		setTags((prevState) => prevState.filter((tag) => tag !== tagName));
		setQuestionData((prevState) => ({
			...prevState,
			tags: [...prevState.tags, tagName],
		}));
		setIsOpen(!isOpen);
	};

	const handleTagRemoval = (tagName) => {
		setQuestionData((prevState) => ({
			...prevState,
			tags: prevState.tags.filter((tag) => tag !== tagName),
		}));
		setTags((prevState) => [tagName, ...prevState]);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setQuestionData((prevState) => ({
			...prevState,
			id: nanoid(),
			[name]: value,
		}));
	};

	const handleReview = () => {
		if (
			questionData.title !== '' ||
			questionData.detail !== '' ||
			questionData.description !== ''
		) {
			setIsModalOpen(true);
			handleClickScroll();
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (
			questionData.title !== '' ||
			questionData.detail !== '' ||
			questionData.description !== ''
		) {
			setQuestions((prevState) => [questionData, ...prevState]);
			setTags([
				'Python',
				'JavaScript',
				'React',
				'Git/Github',
				'C#',
				'C++',
				'Java',
				'Golang',
				'CSS',
				'Tailwind',
				'SQL',
			]);

			setQuestionData({
				title: '',
				detail: '',
				description: '',
				tags: [],
				user: {
					id: 6,
					id_str: '6',
					name: 'Amaka',
					screen_name: 'amaka',
					location: 'Nigeria',
					url: 'https://developer.twitter.com',
					description: "I'm a developer",
					verified: true,
					created_at: 'Wed May 23 06:01:13 +0000 2007',
					profile_image_url_https:
						'https://www.dropbox.com/s/bigbspbwyadigzj/Ellipse%201%20%281%29.svg?raw=1',
					profile_banner_url:
						'https://pbs.twimg.com/profile_banners/6253282/1497491515',
				},
			});
			setIsSuccessful(true);
		}
	};

	useEffect(() => {
		localStorage.setItem('questions', JSON.stringify(questions));
	}, [questions]);

	return (
		<main className={styles.containerWrapper}>
			{isModalOpen && (
				<section className={styles.overlay} id="modal-section">
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
							<section>
								<div>
									<h3 className={styles.modalHeader}>Title</h3>
									<p className={styles.modalBody}>{questionData.title}</p>
								</div>

								<div>
									<h3 className={styles.modalHeader}>Details</h3>
									<p className={styles.modalBody}>{questionData.detail}</p>
								</div>

								<div>
									<h3 className={styles.modalHeader}>Description</h3>
									<p className={styles.modalBody}>{questionData.description}</p>
								</div>

								<div>
									<h3 className={styles.modalHeader}>Tags</h3>
									<ul>
										{questionData.tags.map((tag) => (
											<li key={tag} className={styles.modalBody}>
												{tag}
											</li>
										))}
									</ul>
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
							</section>
						)}
					</div>
				</section>
			)}

			<section className={styles.header}>
				<div>
					<h1>Ask a public question</h1>
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
							/>
						</div>

						<button type="button">Next</button>
					</section>

					{/* problem */}
					<section className={styles.problemWrapper}>
						<div>
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
							>
								*Placeholder*
							</textarea>
						</div>
						<button type="button">Next</button>
					</section>

					{/* detail */}
					<section className={styles.detailWrapper}>
						<div className={styles.content}>
							<h3>What did you try and what were you expecting?</h3>
							<p>
								Describe what you tried, what you expect to happen, and what
								actually resulted. Minimum 20 character
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
							>
								*Placeholder*
							</textarea>
						</div>

						{/* Add tag */}
						<section className={styles.tagWrapper}>
							<div className={styles.tagContent}>
								<span className={styles.text}>Add tag </span>

								<button
									type="button"
									onClick={() => setIsOpen(!isOpen)}
									className={styles.tagsButton}
								>
									<img src="/post-question/down-arrow.svg" alt="Down Arrow" />
								</button>

								{isOpen && (
									<div className={styles.tagsWrapper}>
										{isOpen &&
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

							<div className={styles.allTags}>
								{questionData.tags.map((tag) => (
									<p key={tag}>
										{tag}
										<button type="button" onClick={() => handleTagRemoval(tag)}>
											<img src="/post-question/cancel.svg" alt="Cancel Icon" />
										</button>
									</p>
								))}
							</div>
						</section>
					</section>

					{/* buttons */}
					<section className={styles.buttonWrapper}>
						<div>
							<button
								className={styles.review}
								type="button"
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

export default PostQuestion;
