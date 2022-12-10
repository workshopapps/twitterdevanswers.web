import React 
// ,{ useEffect, useState } 
from 'react';
import styles from './Blog.module.css';
import NewsletterSub from '../../components/NewsletterSub/NewsletterSub';
import blockchain from "../../assets/blog-images/blockchain.svg"
import reactblog from "../../assets/blog-images/reactblog.svg"
import math from "../../assets/blog-images/math.svg"
import python from "../../assets/blog-images/python.svg"
import NewNFT from "../../assets/blog-images/NewNFT.svg"
import arrowright from "../../assets/blog-images/arrowright.svg"
// import axios from 'axios';

const blogsContent = [
	{
		id: 1,
		image: blockchain,
		Date: "October 29, 2022",
		Author: "By John Doe",
		Title: "Top Programming Language Used For Blockchain Development",
		Content: "C++ is so popular for blockchain because of its multiple capabilities such as move semantics, primitive control over the development......"
	},
	{
		id: 2,
		image: reactblog,
		Date: "October 19, 2022",
		Author: "By Kayla Nicole",
		Title: "10 React Development Tools That Will Make Your Life Easy",
		Content: "React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React......"
	},
	{
		id: 3,
		image: math,
		Date: "October 10, 2022",
		Author: "By Kayla Nicole",
		Title: "8 Best Programming Languages For Mathematics For Beginners",
		Content: "React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React......"
	},
	{
		id: 4,
		image: python,
		Date: "October 12, 2022",
		Author: "By Johny Rae",
		Title: "7 Beginner-Level Python Projects to Take Your Skills to the Next Level",
		Content: "C++ is so popular for blockchain because of its multiple capabilities such as move semantics, primitive control over the development......"
	},
];




function Blog() {
	
	// const [blog, setBlog] = useState([]);


	// const fetchData = async () => {
	// 	const response = await fetch("https://api.devask.hng.tech/blog")
	// 	const data = await response.json()
	// 	setBlog(data)
		
	// }
	
	// useEffect(() => {
	// 	fetchData()
	//   }, [])

	return (
		<main className={styles.blogContainer}>
			<section className={styles.firstPost}>
				<div className={styles.imgWrapper}>
					<img
						src={NewNFT}
						alt="NFT desktop"
						className={styles.desktop}
					/>
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
					{blogsContent.map((item) => (
						<div className={styles.postArticle} key={item.id} >
						<img src={item.image} alt="postImage" />
						<div className={styles.postWidth}>
						<div className={styles.postDate}>
							<p>{item.Date}</p>
							<p>{item.Author}</p>
						</div>
						<h3 className={styles.postTitle}>
						{item.Title}
						</h3>
						<p className={styles.postContent}>
							{item.Content}
						</p>
						</div>
					</div>
					))}
				</section>
				
				
				<div className={styles.btnsBlog}>
				<button type="button" className={styles.loadMore}>
					Load More Pages
				</button>
				<button type="button" className={styles.SubmitArticle}>
				SignUp To Submit Articles
				</button>
				</div>
			</section>

			<NewsletterSub />
		
		</main>
	);
}

export default Blog;
