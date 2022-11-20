/* eslint-disable global-require */
import React from 'react';
import styles from './PostQuestion.module.css';
import Questions from './constants/Questions';

function PostQuestion() {
	return (
		<>
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
				<section className={styles.titleWrapper}>
					<div>
						<h3>Title</h3>
						<p>
							Be specific and imagine you are asking a question to another
							person
						</p>
						<input type="text" placeholder="Type your title here" />
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
								<img
									src={
										require('../../assets/post-question/caseIcon.svg').default
									}
									alt="case Icon"
								/>
							</span>
							<span>
								<img
									src={
										require('../../assets/post-question/BoldIcon.svg').default
									}
									alt="Bold Icon"
								/>
							</span>

							<span>
								<img
									src={require('../../assets/post-question/italic.svg').default}
									alt="italic Icon"
								/>
							</span>

							<span>
								<img
									src={
										require('../../assets/post-question/linkIcon.svg').default
									}
									alt="link Icon"
								/>
							</span>

							<span>
								<img
									src={
										require('../../assets/post-question/unknown-text.svg')
											.default
									}
									alt="unknown-text Icon"
								/>
							</span>

							<span>
								<img
									src={
										require('../../assets/post-question/quoteIcon.svg').default
									}
									alt="quote Icon"
								/>
							</span>
						</div>
						<textarea>*Placeholder*</textarea>
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
								<img
									src={
										require('../../assets/post-question/caseIcon.svg').default
									}
									alt="case Icon"
								/>
							</span>
							<span>
								<img
									src={
										require('../../assets/post-question/BoldIcon.svg').default
									}
									alt="Bold Icon"
								/>
							</span>

							<span>
								<img
									src={require('../../assets/post-question/italic.svg').default}
									alt="italic Icon"
								/>
							</span>

							<span>
								<img
									src={
										require('../../assets/post-question/linkIcon.svg').default
									}
									alt="link Icon"
								/>
							</span>

							<span>
								<img
									src={
										require('../../assets/post-question/unknown-text.svg')
											.default
									}
									alt="unknown-text Icon"
								/>
							</span>

							<span>
								<img
									src={
										require('../../assets/post-question/quoteIcon.svg').default
									}
									alt="quote Icon"
								/>
							</span>
						</div>
						<textarea>*Placeholder*</textarea>
					</div>

					{/* Add tag */}
					<section className={styles.tagWrapper}>
						<div className={styles.tagContent}>
							<span className={styles.text}>Add tag </span>

							<span>
								<img
									src={
										require('../../assets/post-question/down-arrow.svg').default
									}
									alt="Down Arrow"
								/>
							</span>
						</div>

						<div className={styles.allTags}>
							<p>
								Javascript{' '}
								<span>
									<img
										src={
											require('../../assets/post-question/cancel.svg').default
										}
										alt="Cancel Icon"
									/>
								</span>
							</p>
						</div>
					</section>
				</section>

				{/* buttons */}
				<section className={styles.buttonWrapper}>
					<div>
						<button className={styles.review} type="button">
							Review your question
						</button>

						<button className={styles.discard} type="button">
							Discard draft
						</button>
					</div>
				</section>
			</section>
		</>
	);
}

export default PostQuestion;
