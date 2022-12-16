import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import styles from './UserBlogReview.module.css';
import rightWay from '../../assets/blog-images/rightWay.svg';
// import userOpenAI from '../../assets/blog-images/userOpenAI.svg';

function UserBlogReview() {
	const { pathname } = useLocation();
	const id = pathname.slice(pathname.lastIndexOf('/') + 1);
	const [blog, setBlog] = useState([]);

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
				By {blog.author} <span>Submitted: {blog.date_posted}</span>
			</p>

			<p className={styles.usertexttag}>{blog.post_category}</p>

			<div className={styles.UsetTextContent}>
				<div className={styles.userOpen}>
					<img src={blog.image_url} className={styles.blog_img} alt="openAI" />
					<p>{blog.body}</p>
				</div>
			</div>

			<div className={styles.BlogpostBtn}>
				<button type="button">Approve Blogpost</button>
				<button type="button">Delete Blogpost</button>
			</div>
		</div>
	);
}

export default UserBlogReview;
