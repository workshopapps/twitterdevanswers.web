import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './BlogPageReview.module.css';
import rightWay from '../../assets/blog-images/rightWay.svg';
// import searchbtn from '../../assets/blog-images/searchbtn.svg';
import programming from '../../assets/blog-images/programming.svg';
import calendar from '../../assets/blog-images/calendar.svg';
import profile from '../../assets/blog-images/profile.svg';
import dots from '../../assets/blog-images/dots.svg';

const token = localStorage.getItem('token');

function BlogPage() {
	const [blogs, setBlogs] = useState([]);
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
		(async function getData() {
			const response = await axios.get(
				'https://api.devask.tech/blog/unapproved/',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setBlogs(response.data.data);
		})();
	}, []);

	return (
		<div className={styles.main}>
			<nav className={styles.blognavWrap}>
				<div className={styles.blognav}>
					<h4>Admin Dashboard</h4>
					<img src={rightWay} alt="rightWay" />
					<h4>Blog</h4>
				</div>
				<Link to="/blog-submit-review" className={styles.urlPathMobile}><img src="/assets/privacySettingsLeft.svg" alt="img" /> <span>Blog</span></Link>
			</nav>

			{/* <div className={styles.search}>
				<div className={styles.searching}>
					<img src={searchbtn} alt="search_btn" />
					<input type="text" placeholder="Search blog post" />
				</div>
				<div className={styles.sort}>
					<p>Sort by</p>
					<select className={styles.recent}>
						<option>Recent</option>
						<option>Time</option>
						<option>Name</option>
					
					</select>
				</div>
			</div> */}
			<div className={styles.GridCard}>
				{blogs.map((blog) => (
					<section className={styles.sectioncard} key={blog.blog_id}>
						<img
							src={blog?.image_url?.trim() ? blog.image_url : programming}
							alt="OpenAI"
							className={styles.blog_image}
						/>
						<div className={styles.sectioncontent}>
							<Link
								to={`/blog-submit-review/${blog.blog_id}`}
								style={{ textDecoration: 'none' }}
							>
								<h4>{blog.title}</h4>
							</Link>
							<main className={styles.date}>
								<div className={styles.num}>
									<img src={calendar} alt="calendar" />
									<p>{formatDate(blog.date_posted)}</p>
								</div>
								<div className={styles.num}>
									<img src={profile} alt="profile" />
									<p>{blog.author}</p>
								</div>
							</main>
							<Link
								to={`/blog-submit-review/${blog.blog_id}`}
								style={{ textDecoration: 'none' }}
							>
								<p className={styles.text}>
									{blog?.body?.slice(0, 150)}
									<span>... See more</span>
								</p>
							</Link>
							<p className={styles.boxbtn}>{blog.post_category}</p>
							<img className={styles.dots} src={dots} alt="dots" />
						</div>
					</section>
				))}
			</div>
		</div>
	);
}

export default BlogPage;
