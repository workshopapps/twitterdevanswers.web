import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './UserBlogReview.module.css';
import rightWay from '../../assets/blog-images/rightWay.svg';
// import userOpenAI from '../../assets/blog-images/userOpenAI.svg';
const token = localStorage.getItem('token');

function UserBlogReview() {
	const { pathname } = useLocation();
	const [approveModalIsOpen, setApproveModalIsOpen] = useState(false);
	const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
	const navigate = useNavigate();
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

	const toggleApproveModal = () => {
		setApproveModalIsOpen((prevState) => !prevState);
	};

	const toggleDeleteModal = () => {
		setDeleteModalIsOpen((prevState) => !prevState);
	};

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

				console.log(deleteRespose);
				setApproveModalIsOpen(false);
				setDeleteModalIsOpen(false);
				navigate('/blog-submit-review');
			} catch (err) {
				// console.error(err);
			}
		};
		deleteBlog();
	};

	const approveHandler = () => {
		const approveBlog = async () => {
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
		approveBlog();
	};

	return (
		<div className={styles.userblog}>
			<nav className={styles.usernav}>
				<h4>Admin Dashboard</h4>
				<img src={rightWay} alt="rightWay" />
				<Link to="/blog-submit-review">
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
				<button onClick={toggleApproveModal} type="button">
					Approve Blogpost
				</button>
				<button onClick={toggleDeleteModal} type="button">
					Delete Blogpost
				</button>
			</div>

			{approveModalIsOpen && <div className={styles.modal_overlay} />}
			{approveModalIsOpen && (
				<div className={styles.modal}>
					<h3 className={styles.modal_title}>Approve blog</h3>
					<p className={styles.modal_content}>
						Are you sure you want to approve blog
					</p>
					<div className={`${styles.BlogpostBtn} ${styles.modal_btnbox}`}>
						<button onClick={approveHandler} type="button">
							Yes
						</button>
						<button onClick={toggleApproveModal} type="button">
							No
						</button>
					</div>
				</div>
			)}
			{deleteModalIsOpen && <div className={styles.modal_overlay} />}
			{deleteModalIsOpen && (
				<div className={styles.modal}>
					<h3 className={styles.modal_title}>Delete blog</h3>
					<p className={styles.modal_content}>
						Are you sure you want to delete blog
					</p>
					<div className={`${styles.BlogpostBtn} ${styles.modal_btnbox}`}>
						<button onClick={deleteHandler} type="button">
							Yes
						</button>
						<button onClick={toggleDeleteModal} type="button">
							No
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default UserBlogReview;
