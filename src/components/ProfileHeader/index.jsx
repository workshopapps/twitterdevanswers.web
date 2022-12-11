import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import styles from './styles.module.css';
import avatar from '../../assets/profile-images/avatar.png';
import calendarIcon from '../../assets/profile-images/calendar.png';

function ProfileHeader() {
	// const navigate = useNavigate();
	const { pathname } = useLocation();
	const user = pathname.slice(pathname.lastIndexOf('/') + 1);
	// const [info, setInfo] = useState({});
	const [setInfo] = useState({});
	const { state } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);
	// const [followers, setFollowers] = useState();
	const [setFollowers] = useState();

	// const handleEdit = () => {
	// navigate('/settings');
	// };

	useEffect(() => {
		const fetchUser = async () => {
			try {
				setIsLoading(true);
				const data = await axios.get(
					`https://api.devask.hng.tech/users/${user}`,
					{
						headers: {
							Authorization: `Bearer ${state.token}`,
							'Content-Type': 'application/json',
						},
					}
				);
				setInfo(data.data.data);
			} catch (err) {
				// console.error(err);
			}
		};
		fetchUser();
	}, [isLoading]);

	useEffect(() => {
		const fetchFollowers = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(
					`https://api.devask.hng.tech/following/followers/${state.user.user_id}`,
					{
						headers: {
							Authorization: `Bearer ${state.token}`,
							'Content-Type': 'application/json',
						},
					}
				);
				setFollowers(res.followers.length);
			} catch (err) {
				// console.error(err);
			}
		};
		fetchFollowers();
	}, [isLoading]);

	return (
		<header className={styles.header}>
			<img src={avatar} alt="user-avatar" className="user-img" />
			<div className={styles['header-textbox']}>
				<h2 className={styles.fullname}>Ayodele Emmanuel</h2>
				<p className={styles.username}>@ayemma_dev</p>
				<p className={styles.about}>End to end Web Developer</p>

				<div className={styles['header-misc']}>
					<p>
						<span>
							<img src={calendarIcon} alt="calendar icon" />
							Joined September 2019
						</span>

						<span>
							<img src={calendarIcon} alt="Location icon" />
							Los Angeles, Carlifornia
						</span>
					</p>
					<div>
						<p>
							<span>200</span>Following
						</p>
						<p>
							<span>80</span>Followers
						</p>
						<p>
							<span>1.5</span>Tokens
						</p>
					</div>
				</div>
			</div>

			<button type="button">Follow</button>
		</header>
	);
}

export default ProfileHeader;
