import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import styles from './UserBlogReview.module.css';
import rightWay from '../../assets/blog-images/rightWay.svg';
// import userOpenAI from '../../assets/blog-images/userOpenAI.svg';
const token = localStorage.getItem('token');

function UserBlogReview() {
	const { pathname } = useLocation();
	const id = pathname.slice(pathname.lastIndexOf('/') + 1);
	const [blog, setBlog] = useState([]);

	const formatDate = (date) =>
		new Intl.DateTimeFormat(navigator.language, {
			month: 'long',
			year: 'numeric',
			day: '2-digit',
			minute: '2-digit',
			hour: '2-digit',
			hour12: 'true',
		}).format(new Date(date));

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(
					`https://api.devask.hng.tech/blog/${id}`
				);
				setBlog(response.data);
			} catch (err) {
				// console.error(err);
			}
		};
		fetchUser();
	}, [id]);

	const deleteHandler = () => {
		const deleteBlog = async () => {
			try {
				const deleteRespose = await fetch(
					`https://api.devask.hng.tech/blog/${id}/admin`,
					{
						method: 'DELETE',
						headers: {
							accept: 'application/json',
							Authorization: `Bearer ${token}`,
						},
					}
				);

				// console.log(deleteRespose);
			} catch (err) {
				// console.error(err);
			}
		};
		deleteBlog();
	};

	const approveHandler = () => {
		const appreveBlog = async () => {
			try {
				const approveResponse = await fetch(
					`https://api.devask.hng.tech/blog/submit`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							accept: 'application/json',
							Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify({
							title: blog?.title,
							body: blog?.body,
							blog_user_id: 0,
							author: blog?.author,
							image_url: blog?.image_url,
							post_category: blog?.post_category,
						}),
					}
				);

				console.log(approveResponse);
				deleteHandler();
			} catch (err) {
				// console.error(err);
			}
		};
		appreveBlog();
	};

	return (
		<div className={styles.userblog}>
			<nav className={styles.usernav}>
				<h4>Admin Dashboard</h4>
				<img src={rightWay} alt="rightWay" />
				<Link to="/blog-page-review">
					<h4>Blog</h4>
				</Link>
				<img src={rightWay} alt="rightWay" />
				<h4 className={styles.userreview}>User blog review</h4>
			</nav>

			<h1>{blog.title}</h1>

			<p className={styles.userAuthor}>
				By {blog.author}{' '}
				<span>
					Submitted: {blog.date_posted && formatDate(blog.date_posted)}
				</span>
			</p>

			<p className={styles.usertexttag}>{blog.post_category}</p>

			<div className={styles.UsetTextContent}>
				<div className={styles.userOpen}>
					<img src={blog.image_url} className={styles.blog_img} alt="openAI" />
					<p>{blog.body}</p>
				</div>
			</div>

			<div className={styles.BlogpostBtn}>
				<button onClick={approveHandler} type="button">
					Approve Blogpost
				</button>
				<button onClick={deleteHandler} type="button">
					Delete Blogpost
				</button>
			</div>
		</div>
	);
}

export default UserBlogReview;
