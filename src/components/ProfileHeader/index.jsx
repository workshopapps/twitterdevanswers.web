import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import avatar from '../../assets/profile-images/avatar.png';
import calendarIcon from '../../assets/profile-images/calendar.png';
import locationIcon from '../../assets/profile-images/location.png';

const token = localStorage.getItem('token');
const userFromStorage = JSON.parse(localStorage.getItem('user'));

function ProfileHeader() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const user = pathname.slice(pathname.lastIndexOf('/') + 1);
	const [info, setInfo] = useState({});
	const [followers, setFollowers] = useState([]);

	const visitorIsAFollower = () =>
		followers.some(
			(follower) => follower.user_from === userFromStorage?.data?.user_id
		);

	// const [isLoading, setIsLoading] = useState(false);
	const formatDate = (date) =>
		new Intl.DateTimeFormat(navigator.language, {
			month: 'long',
			year: 'numeric',
		}).format(new Date(date));

	const capitalize = (string) =>
		string?.replace(string[0], string[0].toUpperCase());
	const isVisitor = userFromStorage?.data?.usename !== user;
	const handleEdit = () => {
		navigate('/settings');
	};

	const toggleFollow = async (event) => {
		// Logic to follow user
		if (event.target.textContent.trim() === 'Follow') {
			await fetch(`https://api.devask.hng.tech/following/follow/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					target_user: info.user_id,
				}),
			});
		} else {
			// Logic to unfollow user
			await fetch(
				`https://api.devask.hng.tech/following/unfollow/${info.user_id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						target_user: info.user_id,
					}),
				}
			);
		}
		window.location.reload(false);
	};

	useEffect(() => {
		const fetchUser = async () => {
			try {
				// setIsLoading(true);
				const userResponse = await axios.get(
					`https://api.devask.hng.tech/users/get/${user}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					}
				);
				setInfo(userResponse.data.data);
				const data = await axios.get(
					`https://api.devask.hng.tech/following/followers/${userResponse.data.data.user_id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					}
				);
				setFollowers(data.data.followers);
			} catch (err) {
				// console.error(err);
			}
		};
		fetchUser();
	}, [user]);

	return (
		<header className={styles.header}>
			<img
				src={info.image_url?.trim() ? info.image_url : avatar}
				className={styles.user_img}
				alt="user-avatar"
			/>
			<div className={styles['header-textbox']}>
				<h2 className={styles.fullname}>
					{capitalize(info.first_name)} {info.last_name}
				</h2>
				<p className={styles.username}>@{info.username}</p>
				<p className={styles.about}>
					{info?.description?.trim() ? info.description : 'Tech Enthusiast'}
				</p>

				<div className={styles['header-misc']}>
					<p>
						<span>
							<img src={calendarIcon} alt="calendar icon" />
							Joined {info.date_joined && formatDate(info.date_joined)}
						</span>

						{info?.location?.trim() && (
							<span>
								<img src={locationIcon} alt="Location icon" />
								{info?.location?.trim()}
							</span>
						)}
					</p>
					<div className={styles.follow}>
						<p>
							<span>{info.following}</span>Following
						</p>
						<p>
							<span>{info.followers}</span>Followers
						</p>

						{!isVisitor && !Number.isNaN(Number(info.account_balance)) && (
							<p>
								<span>
									{!Number.isNaN(Number(info.account_balance)) &&
										Number(info.account_balance)}
								</span>
								Tokens
							</p>
						)}
					</div>
				</div>
			</div>

			{isVisitor ? (
				<button onClick={toggleFollow} type="button">
					{visitorIsAFollower() ? 'Following' : 'Follow'}
				</button>
			) : (
				<button onClick={handleEdit} type="button">
					Edit Profile
				</button>
			)}
		</header>
	);
}

export default ProfileHeader;
