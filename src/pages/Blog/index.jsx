import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import NewsletterSub from '../../components/NewsletterSub/NewsletterSub';
import NewNFT from '../../assets/blog-images/NewNFT.svg';
import arrowright from '../../assets/blog-images/arrowright.svg';

const token = localStorage.getItem('token');

function Blog() {
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
			const response = await axios.get('https://api.devask.hng.tech/blog/', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setBlogs(response.data.data);
		})();
	}, []);

	return (
		<main className={styles.blogContainer}>
			<section className={styles.firstPost}>
				<div className={styles.imgWrapper}>
					<img src={NewNFT} alt="NFT desktop" className={styles.desktop} />
				</div>

				<div className={styles.contentWrapper}>
					<h2>
						NFT’s: Projected to Building The Next Digital Assets of The Future
					</h2>

					<p>
						NFT’s are being projected to be the next big didtal assets to take
						the world by storm. Learn how to take advantage.
					</p>
					<a href="/blog" className={styles.readMore}>
						Read article <img src={arrowright} alt="arrowright" />
					</a>
				</div>
			</section>

			<section className={styles.latestStories}>
				<h2 className={styles.sectionHeader}>Latest Stories</h2>

				<section className={styles.articles}>
					{blogs.map((blog) => (
						<div className={styles.postArticle} key={blog.blog_id}>
							<img src={blog.image_url} alt="postImage" />
							<div className={styles.postWidth}>
								<div className={styles.postDate}>
									<p>{blog.date_posted && formatDate(blog.date_posted)}</p>
									<p>{blog?.author?.toUpperCase()}</p>
								</div>
								<h3 className={styles.postTitle}>{blog.title}</h3>
								<p className={styles.postContent}>
									{blog.body.slice(0, 150)}...
								</p>
							</div>
						</div>
					))}
				</section>

				<div className={styles.btnsBlog}>
					{/* <button type="button" className={styles.loadMore}>
						Load More Pages
					</button> */}
					{token ? (
						<Link to={`/submit-blog`} style={{ textDecoration: 'none' }}>
							<button type="button" className={styles.SubmitArticle}>
								Submit Articles
							</button>
						</Link>
					) : (
						<Link to={`/sign-up`} style={{ textDecoration: 'none' }}>
							<button type="button" className={styles.SubmitArticle}>
								SignUp To Submit Articles
							</button>
						</Link>
					)}
				</div>
			</section>

			<NewsletterSub />
		</main>
	);
}

export default Blog;
