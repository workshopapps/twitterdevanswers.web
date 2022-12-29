/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import avatar from '../../../assets/dashboard/user.png';
import useMessenger from '../../NewDashboard/utils';
import { AppContext } from '../../../store/AppContext';
import styles from './usercard.module.css';

function Usercard({
	user,
	incrementFollowersLocally,
	decrementFollowersLocally,
}) {
	const [isFollowing, setIsFollowing] = useState(null);

	const {
		state: {
			user: { user_id: loggedInUserId },
		},
	} = useContext(AppContext);

	const { handleNavigate, getFollowers, follow, unfollow } = useMessenger();

	useEffect(() => {
		// get list of user's followers
		const fetchFollowers = async () => {
			const response = await getFollowers(user.user_id);

			// check if loggedIn user is in the array of followers
			const following = response.data.followers.find(
				(item) => item.user_from === loggedInUserId
			);

			setIsFollowing(following);
		};

		// if in the array set isFollowing will be set to an object (true), render an unfollow button else isFollowing will be to undefined (false) then render a follow button

		fetchFollowers();
	}, []);

	const handleFollow = () => {
		// if isFollowing, unfollow user
		if (isFollowing) {
			unfollow(user.user_id);
			setIsFollowing(null);
			decrementFollowersLocally(user.user_id);
		}

		// else follow user
		if (!isFollowing) {
			follow(user.user_id);
			setIsFollowing({ user_from: loggedInUserId, target_user: user.user_id });
			incrementFollowersLocally(user.user_id);
		}
	};

	return (
		<div className={styles.card}>
			<Link to={`/profile/${user.username}`} className={styles.img}>
				<img
					src={user.image_url?.trim() === '' ? avatar : user.image_url}
					alt="user avatar"
				/>
			</Link>
			<div className={styles.info}>
				<Link to={`/profile/${user.username}`} className={styles.name}>
					{`${user.first_name} ${user.last_name}`}
				</Link>
				<Link to={`/profile/${user.username}`} className={styles.username}>
					{user.username}
				</Link>
				<p className={styles.role}>Fullstack developer</p>
				<span className={styles.followers}>
					{user.followers} follower
					{user.followers > 1 || user.followers === 0 ? 's' : ''}
				</span>
			</div>
			<div className={styles.btn}>
				<div>
					<button
						onClick={(event) =>
							handleNavigate(event, `/profile/${user.username}`)
						}
						type="button"
						className={`${styles.white} ${styles.button}`}
					>
						View Profile
					</button>
				</div>
				{loggedInUserId === user.user_id ? null : (
					<div className={styles.followBtn}>
						<button
							onClick={handleFollow}
							type="button"
							className={`${styles.purple} ${styles.button} `}
						>
							{isFollowing ? 'Unfollow' : 'Follow'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Usercard;

Usercard.propTypes = {
	user: PropTypes.shape({
		user_id: PropTypes.number,
		username: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		email: PropTypes.string,
		date_of_birth: PropTypes.string,
		gender: PropTypes.string,
		description: PropTypes.string,
		phone_number: PropTypes.string,
		work_experience: PropTypes.string,
		position: PropTypes.string,
		stack: PropTypes.string,
		links: PropTypes.arrayOf(PropTypes.string),
		role: PropTypes.string,
		image_url: PropTypes.string,
		location: PropTypes.string,
		is_admin: PropTypes.bool,
		account_balance: PropTypes.number,
		followers: PropTypes.number,
		following: PropTypes.number,
		date_joined: PropTypes.string,
	}).isRequired,
	incrementFollowersLocally: PropTypes.func.isRequired,
	decrementFollowersLocally: PropTypes.func.isRequired,
};
