/* eslint-disable no-alert */
import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { nanoid } from 'nanoid';
import axios from 'axios';
import styles from './submitblog.module.css';
import { AppContext } from '../../store/AppContext';

function SubmitBlog() {
	const navigate = useNavigate();
	const { state } = useContext(AppContext);
	const [isTokenError, setIsTokenError] = useState('');
	const [error, setError] = useState(false);
	const postCategories = [
		{
			label: '*Select Post Category*',
			value: 'post-cat',
		},
		{
			label: 'NFTs',
			value: 'nfts',
		},
		{
			label: 'Fitness/Health',
			value: 'fitness-health',
		},
		{
			label: 'Lifestyle',
			value: 'lifestyle',
		},
		{
			label: 'Web development',
			value: 'web-development',
		},
		{
			label: 'Artificial Intelligence',
			value: 'artificial-intelligence',
		},
		{
			label: 'Mobile development',
			value: 'mobile-development',
		},
	];

	const [body, setBody] = useState({ text: '' });
	const [blogData, setBlogData] = useState({
		author: '',
		blog_user_id: '',
		title: '',
		image_url: '',
		post_category: 'Select',
	});

	const handleBody = (value) => {
		setBody((prev) => ({ ...prev, text: value }));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setBlogData((prevState) => ({
			...prevState,
			id: nanoid(),
			[name]: value,
		}));
	};

	const submitNewBlog = async () => {
		const details = {
			author: blogData.author,
			blog_user_id: 2,
			title: blogData.title,
			body: body.text,
			image_url: 'https://devask-mallet.netlify.app/blog/nft-mobile.svg',
			post_category: blogData.post_category,
		};
		const headers = {
			Authorization: `Bearer ${state.token}`,
			'Content-Type': 'application/json',
		};
		try {
			const data = await axios.post(
				`https://api.devask.hng.tech/blog`,
				details,
				{
					headers,
				}
			);
			if (data) {
				setTimeout(() => {
				    navigate('/blog-page');
				}, 3000);
			}
		} catch (err) {
			setIsTokenError('Cannot complete request now. Try again later...');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(true);
		submitNewBlog();
	};

	return (
		<main className={styles.containerWrapper}>
			{isTokenError ? alert(`${isTokenError}`) : ''}
			<section className={styles.container}>
				<form>
					<section className={styles.titleWrapper} id="content">
						<h2>Submit an Article</h2>
						<br />
						<p>
							Your article will be reviwed before publishing. Make sure the
							article is your own.
						</p>
						<br />
						<div>
							<h3>Author</h3>
							<input
								type="text"
								placeholder="Enter author title"
								value={blogData.author}
								name="author"
								onChange={handleChange}
								required
							/>
						</div>
					</section>
					<section className={styles.titleWrapper} id="detail">
						<div>
							<h3>Title</h3>
							<input
								type="text"
								placeholder="Enter blog title"
								value={blogData.title}
								name="title"
								onChange={handleChange}
								required
							/>
						</div>
						{error && blogData.title.length <= 2 ? (
							<div className="invalid" style={{ color: '#F89687' }}>
								Please enter a title.
							</div>
						) : (
							''
						)}
					</section>
					<section className={styles.titleWrapper}>
						<div>
							<h3>Post Category</h3>
							<select
								name="post_category"
								value={blogData.post_category}
								onChange={handleChange}
							>
								{postCategories.map((postCategory) => (
									<option value={postCategory.value} key={postCategory.value}>
										{postCategory.label}
									</option>
								))}
							</select>
						</div>
						{error && blogData.post_category === '' ? (
							<div className="invalid" style={{ color: '#F89687' }}>
								Please select your Post category.
							</div>
						) : (
							''
						)}
					</section>

					<section className={styles.detailWrapper} id="blog">
						<div className={styles.content}>
							<h3>Content</h3>
							<p>
								You are required to submit the link to your article in doc link
								format
							</p>
							{/* <textarea
								value={blogData.body}
								name="body"
								onChange={handleChange}
								minLength={20}
								required
							>
								*Placeholder*
							</textarea> */}
							<ReactQuill
								className={styles.textEditor}
								placeholder="Write Something"
								theme="snow"
								defaultValue=""
								modules={SubmitBlog.modules}
								formats={SubmitBlog.formats}
								onChange={handleBody}
								value={body.text}
							/>
							{error && blogData.title.length <= 2 ? (
								<div
									className="invalid"
									style={{ color: '#F89687', paddingTop: '3rem' }}
								>
									Please add your article content.
								</div>
							) : (
								''
							)}
						</div>
					</section>

					<section className={styles.buttonWrapper}>
						<div>
							<button
								className={styles.review}
								type="submit"
								onClick={handleSubmit}
							>
								Submit
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

SubmitBlog.modules = {
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
SubmitBlog.formats = [
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'link',
	'code-block',
];

export default SubmitBlog;
