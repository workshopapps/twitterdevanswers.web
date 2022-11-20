import React from 'react';
import styles from './Blog.module.css';

function Blog() {
	return (
		<main className={styles.blogContainer}>
			<h1 className={styles.categoryTitle}>AI & MACHINE LANGUAGE</h1>

			<section className={styles.firstPost}>
				<div className={styles.imgWrapper}>
					<img
						src="/blog/nft-mobile.svg"
						alt="NFT Mobile"
						className={styles.mobile}
					/>
					<img
						src="/blog/nft-desktop.svg"
						alt="NFT desktop"
						className={styles.desktop}
					/>
				</div>

				<div className={styles.contentWrapper}>
					<a href="/" className={styles.category}>
						NFTs
					</a>
					<h2>
						NFT’s: Projected to Building The Next Digital Assets of The Future
					</h2>

					<p>
						NFT’s are being projected to be the next big didtal assets to take
						the world by storm. Learn how to take advantage.
					</p>
					<a href="/blog" className={styles.readMore}>
						Read article <img src="/blog/caretRight.svg" alt="Caret Right" />
					</a>
				</div>
			</section>

			<section className={styles.latestStories}>
				<h2 className={styles.sectionHeader}>Latest Stories</h2>

				<section className={styles.articles}>
					<div className={styles.postArticle}>
						<img src="/blog/blog-2.svg" alt="Blog Two" />
						<h3 className={styles.postTitle}>
							10 React Development Tools That Will Make Your Life Easy
						</h3>
						<span className={styles.date}>October 9, 2022</span>
					</div>

					<div className={styles.postArticle}>
						<img src="/blog/blog-4.svg" alt="Blog Four" />
						<h3 className={styles.postTitle}>What Makes DevApp Team Tick</h3>
						<span className={styles.date}>October 19, 2022</span>
					</div>

					<div className={styles.postArticle}>
						<img src="/blog/blog-3.svg" alt="Blog Three" />
						<h3 className={styles.postTitle}>
							7 Beginner-Level Python Projects to Take Your Skills To The Next
							Level
						</h3>
						<span className={styles.date}>October 19, 2022</span>
					</div>

					<div className={styles.postArticle}>
						<img src="/blog/blog-1.svg" alt="Blog One" />
						<h3 className={styles.postTitle}>
							Top Programming Language Used For Blockchain Development
						</h3>
						<span className={styles.date}>October 19, 2022</span>
					</div>
				</section>

				<button type="button" className={styles.loadMore}>
					Load More Pages
				</button>

				{/* <hr /> */}
			</section>

			<section className={styles.subscribeSection}>
				<div className={styles.textWrapper}>
					<h4>Want update in your Inbox</h4>
					<p>
						We share questions from our community, news and articles from our
						blogs every week, that gives you a chance of earning more
					</p>

					<div className={styles.linkWrapper}>
						<a href="/">Previous Publications</a>
						<a href="/">Subscribe to Devapps</a>
						<a href="/">RSS Feed</a>
					</div>
				</div>

				<div className={styles.imageWrapper}>
					<img src="/blog/email-img.svg" alt="Email Icon" />
				</div>
			</section>
		</main>
	);
}

export default Blog;
