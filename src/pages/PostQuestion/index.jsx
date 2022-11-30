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
		comments: [
			{
				postId: 1,
				id: 1,
				name: 'id labore ex et quam laborum',
				email: 'Eliseo@gardner.biz',
				body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
			},
			{
				postId: 1,
				id: 2,
				name: 'quo vero reiciendis velit similique earum',
				email: 'Jayne_Kuhic@sydney.com',
				body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
			},
			{
				postId: 1,
				id: 3,
				name: 'odio adipisci rerum aut animi',
				email: 'Nikita@garfield.biz',
				body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
			},
			{
				postId: 1,
				id: 4,
				name: 'alias odio sit',
				email: 'Lew@alysha.tv',
				body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
			},
			{
				postId: 1,
				id: 5,
				name: 'vero eaque aliquid doloribus et culpa',
				email: 'Hayden@althea.biz',
				body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
			},
			{
				postId: 2,
				id: 6,
				name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
				email: 'Presley.Mueller@myrl.com',
				body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
			},
			{
				postId: 2,
				id: 7,
				name: 'repellat consequatur praesentium vel minus molestias voluptatum',
				email: 'Dallas@ole.me',
				body: 'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor',
			},
			{
				postId: 2,
				id: 8,
				name: 'et omnis dolorem',
				email: 'Mallory_Kunze@marie.org',
				body: 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
			},
			{
				postId: 2,
				id: 9,
				name: 'provident id voluptas',
				email: 'Meghan_Littel@rene.us',
				body: 'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
			},
			{
				postId: 2,
				id: 10,
				name: 'eaque et deleniti atque tenetur ut quo ut',
				email: 'Carmen_Keeling@caroline.name',
				body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis',
			},
			{
				postId: 3,
				id: 11,
				name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
				email: 'Veronica_Goodwin@timmothy.net',
				body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
			},
			{
				postId: 3,
				id: 12,
				name: 'modi ut eos dolores illum nam dolor',
				email: 'Oswald.Vandervort@leanne.org',
				body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit',
			},
			{
				postId: 3,
				id: 13,
				name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
				email: 'Kariane@jadyn.tv',
				body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et',
			},
			{
				postId: 3,
				id: 14,
				name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
				email: 'Nathan@solon.io',
				body: 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum',
			},
			{
				postId: 3,
				id: 15,
				name: 'debitis magnam hic odit aut ullam nostrum tenetur',
				email: 'Maynard.Hodkiewicz@roberta.com',
				body: 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia',
			},
			{
				postId: 4,
				id: 16,
				name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
				email: 'Christine@ayana.info',
				body: 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
			},
			{
				postId: 4,
				id: 17,
				name: 'eos est animi quis',
				email: 'Preston_Hudson@blaise.tv',
				body: 'consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore',
			},
		],
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
				comments: [
					{
						postId: 1,
						id: 1,
						name: 'id labore ex et quam laborum',
						email: 'Eliseo@gardner.biz',
						body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
					},
					{
						postId: 1,
						id: 2,
						name: 'quo vero reiciendis velit similique earum',
						email: 'Jayne_Kuhic@sydney.com',
						body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
					},
					{
						postId: 1,
						id: 3,
						name: 'odio adipisci rerum aut animi',
						email: 'Nikita@garfield.biz',
						body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
					},
					{
						postId: 1,
						id: 4,
						name: 'alias odio sit',
						email: 'Lew@alysha.tv',
						body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
					},
					{
						postId: 1,
						id: 5,
						name: 'vero eaque aliquid doloribus et culpa',
						email: 'Hayden@althea.biz',
						body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
					},
					{
						postId: 2,
						id: 6,
						name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
						email: 'Presley.Mueller@myrl.com',
						body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
					},
					{
						postId: 2,
						id: 7,
						name: 'repellat consequatur praesentium vel minus molestias voluptatum',
						email: 'Dallas@ole.me',
						body: 'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor',
					},
					{
						postId: 2,
						id: 8,
						name: 'et omnis dolorem',
						email: 'Mallory_Kunze@marie.org',
						body: 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
					},
					{
						postId: 2,
						id: 9,
						name: 'provident id voluptas',
						email: 'Meghan_Littel@rene.us',
						body: 'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
					},
					{
						postId: 2,
						id: 10,
						name: 'eaque et deleniti atque tenetur ut quo ut',
						email: 'Carmen_Keeling@caroline.name',
						body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis',
					},
					{
						postId: 3,
						id: 11,
						name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
						email: 'Veronica_Goodwin@timmothy.net',
						body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
					},
					{
						postId: 3,
						id: 12,
						name: 'modi ut eos dolores illum nam dolor',
						email: 'Oswald.Vandervort@leanne.org',
						body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit',
					},
					{
						postId: 3,
						id: 13,
						name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
						email: 'Kariane@jadyn.tv',
						body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et',
					},
					{
						postId: 3,
						id: 14,
						name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
						email: 'Nathan@solon.io',
						body: 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum',
					},
					{
						postId: 3,
						id: 15,
						name: 'debitis magnam hic odit aut ullam nostrum tenetur',
						email: 'Maynard.Hodkiewicz@roberta.com',
						body: 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia',
					},
					{
						postId: 4,
						id: 16,
						name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
						email: 'Christine@ayana.info',
						body: 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
					},
					{
						postId: 4,
						id: 17,
						name: 'eos est animi quis',
						email: 'Preston_Hudson@blaise.tv',
						body: 'consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore',
					},
				],
			});
			setIsSuccessful(true);
		}
	};

	useEffect(() => {
		localStorage.setItem('questions', JSON.stringify(questions));
	}, [questions]);

	const [enabled, setEnabled] = useState(true);
	const [isEnabled, setIsEnabled] = useState(true);

	const handleClick = () => {
		const inputLength = document.getElementById('firstinput').value;
		if (inputLength.length > 0) setEnabled(!enabled);
	};
	const handleClicking = () => {
		const inputLength2 = document.getElementById('secondinput').value;
		if (inputLength2.length > 0) setIsEnabled(!isEnabled);
	};

	const discard = () => {
		const inputLength = document.getElementById('firstinput');
		const inputLength2 = document.getElementById('secondinput');
		const inputLength3 = document.getElementById('thirdinput');
		inputLength.value = '';
		inputLength2.value = '';
		inputLength3.value = '';
	};

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
										setIsSuccessful(true);
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
								id="firstinput"
								placeholder="Type your title here"
								value={questionData.title}
								name="title"
								onChange={handleChange}
							/>
						</div>

						<button type="button" onClick={handleClick}>
							Next
						</button>
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
								required
								value={questionData.detail}
								name="detail"
								id="secondinput"
								disabled={enabled}
								onChange={handleChange}
							>
								*Placeholder*
							</textarea>
						</div>
						<button type="button" onClick={handleClicking}>
							Next
						</button>
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
								id="thirdinput"
								disabled={isEnabled}
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

							<button
								onClick={discard}
								className={styles.discard}
								type="button"
							>
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
