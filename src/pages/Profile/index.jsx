import React from 'react';
// import Section1 from '../../components/Section1/index';
import styles from './index.module.css';
// import AskCards from './AskCards';
// import Reaction from '../../components/Reaction/Reaction';
import ProfileHeader from '../../components/ProfileHeader';
import UserActivities from '../../components/UserActivities';

function Profile() {
	return (
		<div className={styles.container}>
			<main className={styles.profile}>
				<ProfileHeader />
				<UserActivities />
				{/* <Reaction /> */}
				{/* <div className={styles.askcard}> */}
				{/* <AskCards /> */}
				{/* </div> */}
			</main>
			<aside className={styles.aside}>
				<section className={styles['relevant-topics']}>
					{/* Topics suggestions */}
					<div className={`${styles.topics} ${styles['aside-container']}`}>
						<h3 className={styles['heading-secondary']}>You might like</h3>

						<div className={styles.topic}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.content}>
								<h4>
									How to get first item on screen of a list view while scrolling
								</h4>
								<p>12 Replies</p>
							</div>
						</div>
						<div className={styles.topic}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.content}>
								<h4>
									How to get first item on screen of a list view while scrolling
								</h4>
								<p>12 Replies</p>
							</div>
						</div>
						<div className={styles.topic}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.content}>
								<h4>
									How to get first item on screen of a list view while scrolling
								</h4>
								<p>12 Replies</p>
							</div>
						</div>
						<div className={styles.topic}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.content}>
								<h4>
									How to get first item on screen of a list view while scrolling
								</h4>
								<p>12 Replies</p>
							</div>
						</div>
						<div className={styles.topic}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.content}>
								<h4>
									How to get first item on screen of a list view while scrolling
								</h4>
								<p>12 Replies</p>
							</div>
						</div>
					</div>

					{/* Accounts suggestions */}
					<div className={`${styles.users} ${styles['aside-container']}`}>
						<h3 className={styles['heading-secondary']}>You might follow</h3>

						<div className={styles.user}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.details}>
								<div>
									<h4>adebami_dev</h4>
									<p>@adebami_dev</p>
								</div>
								<p>Follows you</p>
							</div>
							<button type="button">Follow</button>
						</div>
						<div className={styles.user}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.details}>
								<div>
									<h4>adebami_dev</h4>
									<p>@adebami_dev</p>
								</div>
								<p>Follows you</p>
							</div>
							<button type="button">Follow</button>
						</div>
						<div className={styles.user}>
							<img
								src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
								alt="user avatar"
							/>
							<div className={styles.details}>
								<div>
									<h4>adebami_dev</h4>
									<p>@adebami_dev</p>
								</div>
								<p>Follows you</p>
							</div>
							<button type="button">Follow</button>
						</div>

						<p>See more</p>
					</div>
				</section>
			</aside>
		</div>
	);
}

export default Profile;
