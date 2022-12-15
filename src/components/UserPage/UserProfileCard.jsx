import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../../pages/UserPage/userPage.module.css';
import { AppContext } from '../../store/AppContext';

function UserProfileCard({ user }) {
	const [followers, setFollowers] = useState();
	const { state } = useContext(AppContext);

	const key = user.user_id;
	const token = localStorage.getItem('token');

	useEffect(() => {
		const getFollowers = async (userId) => {

			try {
				const res = await axios.get(
					`https://api.devask.hng.tech/following/followers/${userId}`,
					{
						headers: {
							Authorization: `Bearer ${state.token}`,
						},
					}
				);
				setFollowers(res.data.followers.length);
			} catch (err) {
				// display err message
			}
		};
		getFollowers(key);
	}, []);

	const followHandler = async () => {
		const details = {
			target_user: key,
		};
		const headers = {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		};

		try {
			const res = await axios.post(
				'https://api.devask.hng.tech/following/follow/',
				details,
				{
					headers,
				}
			);

			if (res.data.success === true) {
				setFollowers(followers + 1);
			}
		} catch (err) {
			// display err message
		}
	};

	const unfollowHandler = async (userId) => {
		const headers = {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		};

		try {
			const res = await axios.delete(
				`https://api.devask.hng.tech/following/unfollow/${userId}`,
				{
					headers,
				}







				
			);

			if (res.data.success === true) {
				setFollowers(followers - 1);
			}
		} catch (err) {
			// display err message
		}
	};

	return (
		<div className={styles.user_profile_card}>
			<img
				src={
					user.image_url === ' '
						? 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
						: user.image_url
				}
				alt=""
				className={styles.user_profile_image}
			/>

			<section className={styles.user_info_container}>
				<section>
					<p className={styles.user_name}> {user.username}</p>
					<p className={styles.user_stack}>
						{user.work_experience === ' '
							? 'user has not filled experience'
							: user.work_experience}
					</p>
				</section>

				<span className={styles.user_extra_info}>
					<p className={styles.user_followers}>{followers} followers</p>

					<p className={styles.user_favorite_language}>
						{user.stack === ' ' ? 'user has not filled stack' : user.stack}
					</p>
				</span>
				<div className={styles.user_follow_info}>
					{followers === 0 ? (
						<div>
							<button
								className={styles.follow_button}
								onClick={followHandler}
								type="button"
							>
								follow
							</button>
						</div>
					) : (
						<div>
							{' '}
							<button
								className={styles.follow_button}
								onClick={() => unfollowHandler(key)}
								type="button"
							>
								unfollow
							</button>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
UserProfileCard.propTypes = {
	user: PropTypes.shape({
		image_url: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		work_experience: PropTypes.string.isRequired,
		stack: PropTypes.string.isRequired,
		user_id: PropTypes.number.isRequired,
	}).isRequired,
};

export default UserProfileCard;
