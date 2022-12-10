import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsChatSquareDots, BsShare, BsArrowLeft } from 'react-icons/bs';
import { ReactComponent as Heart } from './heart.svg';
import styles from './NewDashboard2.module.css';
import ReplyCard from './ReplyCard/ReplyCard';
import TopUsers from './TopUsers/TopUsers';
import Yml from './Yml/Yml';
import avatar from '../../assets/dashboard-images/profilePicture.webp';

const replies = [
	{
		id: 1,
		fullName: 'mugiwara',
		username: 'goodiesbuchi',
		timeStamp: '1hr',
		replyingTo: 'kayla_nicole',
		text: 'use a for-loop instead of lapply. Print the iterator. When the code breaks, run the code line by line (do not use %>%) to see where it fails. Then you can probably figure out what goes wrong. Apparently, there is a file that does not have LON and LAT',
		imgUrl: './assets/userPageAssets/Ellipse0.png',
	},
	{
		id: 2,
		fullName: 'mugiwara',
		username: 'goodiesbuchi',
		timeStamp: '1hr',
		replyingTo: 'kayla_nicole',
		text: 'use a for-loop instead of lapply. Print the iterator. When the code breaks, run the code line by line (do not use %>%) to see where it fails. Then you can probably figure out what goes wrong. Apparently, there is a file that does not have LON and LAT',
		imgUrl: './assets/userPageAssets/Ellipse0.png',
	},
	{
		id: 3,
		fullName: 'mugiwara',
		username: 'goodiesbuchi',
		timeStamp: '1hr',
		replyingTo: 'kayla_nicole',
		text: 'use a for-loop instead of lapply. Print the iterator. When the code breaks, run the code line by line (do not use %>%) to see where it fails. Then you can probably figure out what goes wrong. Apparently, there is a file that does not have LON and LAT',
		imgUrl: './assets/userPageAssets/Ellipse0.png',
	},
];

function NewDashboard2() {
	const navigate = useNavigate();

	return (
		<div className="lpContainer">
			<div className={styles.dashboard}>
				<section className={styles.main}>
					<div className={styles.header}>
						<div className={styles.back}>
							<span>
								<BsArrowLeft className={styles.icon} />
							</span>
							<span
								className={styles.text}
								role="button"
								onKeyDown={() => {}}
								onClick={() => navigate(-1)}
								tabIndex="0"
							>
								Go back
							</span>
						</div>
						<p>Based on who you follow</p>
					</div>
					<div className={styles.body}>
						<div className={styles.question}>
							<div className={styles.top}>
								<div className={styles.user}>
									<div className={styles.avatar}>
										<img src={avatar} alt="user avatar" />
									</div>
									<div className={styles.userNstamp}>
										<Link to="/users-page">Prosperoo</Link>
										<span className={styles.timeStamp}>11:03. 10 Nov 22</span>
									</div>
								</div>
								<span className={styles.edit}>Edit</span>
							</div>
							<div className={styles.bottom}>
								<h3 className={styles.title}>
									Loop through csv files in folder and perform spatial
									intersect.
								</h3>
								<p>
									Though I&apos;ve seen similar questions here about looping
									through and performing operations on csv files within a
									directory, the code I&apos;ve written for my particular case
									isn&apos;t working. I have ~100 csv files in a directory,
									which are spatial datasets (all have identical columns
									including lat/lon coordinates and other data, but different
									#&apos;s of rows). I&apos;m trying to clip each of them using
									a bounding box. Here&apos;s what I have so far:
								</p>
								<div className={styles.details}>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Perspiciatis consequuntur dolor nostrum voluptate natus! Sint
									officiis minus doloremque quos incidunt officia hic odio rerum
									amet ut delectus quas praesentium vitae labore excepturi,
									possimus fugiat inventore pariatur velit tempora.
									Exercitationem atque eos temporibus fugiat quos officiis ad
									accusamus accusantium! Vero vel ullam iusto pariatur suscipit
									nam itaque maxime reprehenderit ratione numquam?
								</div>
								<p className={styles.footNote}>
									Thanks anyone out there who can see my mistake!
								</p>
								<div>
									<span className={styles.tags}>Python</span>
								</div>

								<div className={styles.interactions}>
									<div className={styles.repliesAndLikes}>
										<span>15 replies</span>
										<span>30 likes</span>
									</div>
									<div className={styles.icons}>
										<div className={styles.message}>
											<BsChatSquareDots className={styles.icon} />
										</div>
										<div className={styles.likes}>
											{/* <IoHeart/> */}
											<Heart
												className={styles.icon}
												style={{ fill: 'transparent' }}
											/>
										</div>
										<div>
											<BsShare className={styles.icon} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.reply}>
							<div className={styles.input}>
								<span className={styles.avatar}>
									<img src={avatar} alt="user avatar" />
								</span>
								<textarea
									name="reply"
									id="rely"
									placeholder="Type your reply"
									cols={10}
									rows={5}
								/>
							</div>
							<div className={styles.btn}>
								<button type="submit">Post reply</button>
							</div>
						</div>
					</div>

					<div className={`${styles.replies} ${styles.scrollbar}`}>
						{replies.map((reply) => (
							<ReplyCard reply={reply} key={reply.id} />
						))}
					</div>
				</section>
				<aside className={styles.aside}>
					<TopUsers />
					<Yml />
				</aside>
			</div>
		</div>
	);
}

export default NewDashboard2;
