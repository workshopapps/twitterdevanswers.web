import React from 'react';
import styles from "./BlogPageReview.module.css";
import rightWay from '../../assets/blog-images/rightWay.svg';
import searchbtn from '../../assets/blog-images/searchbtn.svg';
// import dropdown from '../../assets/blog-images/dropdown.svg';
import OpenAI from '../../assets/blog-images/OpenAI.svg';
import programming from '../../assets/blog-images/programming.svg';
import reactTools from '../../assets/blog-images/reactTools.svg';
import BestMath from '../../assets/blog-images/BestMath.svg';
import NFTproject from '../../assets/blog-images/NFTproject.svg';
import BeginPython from '../../assets/blog-images/BeginPython.svg';
import digitalNFT from '../../assets/blog-images/digitalNFT.svg';
import reactDev from '../../assets/blog-images/reactDev.svg';

import calendar from '../../assets/blog-images/calendar.svg';
import profile from '../../assets/blog-images/profile.svg';
import dots from '../../assets/blog-images/dots.svg';

const blogsCard = [
	{
		id: 1,
		image: OpenAI,
		Title: 'Just out of the Box, ChatGPT Causing Waves of Talk, Concern',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'ChatGPT, the newest shiny object in the conversational AI sector, already',
		more: '.. see more',
		btn: 'Network and Security',
	},
	{
		id: 2,
		image: programming,
		Title: 'Top Programming Language Used For Blockchain Development',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'C++ is so popular for blockchain because of its multiple capabilities such as move ',
		more: '... see more',
		btn: 'programming',
	},
	{
		id: 3,
		image: reactTools,
		Title: '10 React Development Tools That Will Make Your Life Easy',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'React Developer Tools is a Chrome DevTools extension for the open-source React',
		more: '... see more',
		btn: 'Artificial Intelligence',
	},
	{
		id: 4,
		image: BestMath,
		Title: '8 Best Programming Languages For Mathematics For Beginners',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'ChatGPT, the newest shiny object in the conversational AI sector, already',
		more: '.. see more',
		btn: 'Non-fungible token',
	},
	{
		id: 5,
		image: NFTproject,
		Title:
			'NFT’s: Projected to Building The Next Digital Assets of The Future ',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'NFT’s are being projected to be the next big didtal assets to take the world by storm',
		more: '... see more',
		btn: 'Non-fungible token',
	},
	{
		id: 6,
		image: BeginPython,
		Title:
			'7 Beginner-Level Python Projects to Take Your Skills to the Next Level',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'React Developer Tools is a Chrome DevTools extension for the open-source React',
		more: '... see more',
		btn: 'Artificial Intelligence',
	},
	{
		id: 7,
		image: reactTools,
		Title: 'Top Programming Language Used For Blockchain Development',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'C++ is so popular for blockchain because of its multiple capabilities such as move',
		more: '... see more',
		btn: 'programming',
	},
	{
		id: 8,
		image: digitalNFT,
		Title:
			'NFT’s: Projected to Building The Next Digital Assets of The Future ',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'ChatGPT, the newest shiny object in the conversational AI sector, already',
		more: '.. see more',
		btn: 'Network and Security',
	},
	{
		id: 9,
		image: BestMath,
		Title: '8 Best Programming Languages For Mathematics For Beginners',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'ChatGPT, the newest shiny object in the conversational AI sector, already',
		more: '.. see more',
		btn: 'Non-fungible token',
	},
	{
		id: 10,
		image: reactDev,
		Title: '10 React Development Tools That Will Make Your Life Easy',
		Date: 'Dec 8th, 2022 10:56 AM',
		Author: 'Ayodele Emmanuel',
		Content:
			'React Developer Tools is a Chrome DevTools extension for the open-source React',
		more: '... see more',
		btn: 'Artificial Intelligence',
	},
];

function BlogPage() {
	return (
		<div className={styles.main}>
			<nav className={styles.blognav}>
				<h4>Admin Dashboard</h4>
				<img src={rightWay} alt="rightWay" />
				<h4>Blog</h4>
			</nav>

			<div className={styles.search}>
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
						{/* <h6>Recent</h6>
					<img src={dropdown} alt="dropdown" /> */}
					</select>
				</div>
			</div>
			<div className={styles.GridCard}>
				{blogsCard.map((item) => (
					<section className={styles.sectioncard} key={item.id}>
						<img src={item.image} alt="OpenAI" />
						<div className={styles.sectioncontent}>
							<h4>{item.Title}</h4>
							<main className={styles.date}>
								<div className={styles.num}>
									<img src={calendar} alt="calendar" />
									<p>{item.Date}</p>
								</div>
								<div className={styles.num}>
									<img src={profile} alt="profile" />
									<p>{item.Author}</p>
								</div>
							</main>
							<p className={styles.text}>
								{item.Content} <span>{item.more}</span>
							</p>
							<p className={styles.boxbtn}>{item.btn}</p>
							<img className={styles.dots} src={dots} alt="dots" />
						</div>
					</section>
				))}
			</div>
		</div>
	);
}

export default BlogPage;
