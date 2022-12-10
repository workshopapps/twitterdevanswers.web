import React from 'react';
import styles from './yml.module.css';
import YmlPost from '../YmlPost/YmlPost';

const posts = [
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		title: 'How to get first item on screen of a list view while scrolling',
		replies: '12',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		title: 'React native date  time picker styling issue',
		replies: '89',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		title: 'Which is best for my 34T chainring, 11-42T or 11-51T casette',
		replies: '129',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		title:
			'Inferred type parameter in generic typescript function is too wide.',
		replies: '1k',
	},
	{
		imgUrl: './assets/userPageAssets/Ellipse0.png',
		title: 'Seams between objects in Unity 2d',
		replies: '17',
	},
];

function Yml() {
	return (
		<div className={styles.yml}>
			<h3 className={styles.header}>You might like</h3>
			<div className={styles.posts}>
				{posts.map((post) => (
					<YmlPost post={post} key={post.title} />
				))}
			</div>
		</div>
	);
}

export default Yml;
