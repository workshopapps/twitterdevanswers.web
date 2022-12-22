import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import Section1 from './section1.module.css';
import link from '../../assets/profile-images/link-2.png';
import locationIcon from '../../assets/profile-images/location.png';
import twitter from '../../assets/profile-images/twitter.png';
import github from '../../assets/profile-images/github.png';
import calendarIcon from '../../assets/profile-images/calendar.png';
import clockIcon from '../../assets/profile-images/clock.png';

function ProfileTopSection() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const user = pathname.slice(9);
	const [info, setInfo] = useState({});
	const { state } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);
	const [followers, setFollowers] = useState();
	const handleEdit = () => {
		navigate('/settings');
	};
	useEffect(() => {
		const fetchUser = async () => {
			try {
				setIsLoading(true);
				const data = await axios.get(
					`https://api.devask.tech/users/${user}`,
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
					`https://api.devask.tech/following/followers/${state.user.user_id}`,
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
		<div className={Section1.profile__datawrapper}>
			<div className={Section1.profile__datatxt}>
				<div className={Section1.profile__imagewrapper}>
					<img
						src={
							info.image_url === ' '
								? 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'
								: info.image_url
						}
						alt=""
						className={Section1.profile__image}
					/>
				</div>
			</div>
			<div className={Section1.profile__address}>
				<div className={Section1.profile__info}>
					<div className={Section1.profile__name}>{info.username}</div>
					<div className={Section1.profile__username}>@{info.username}</div>
					<div className={Section1.profile__status}>{info.stack}</div>
				</div>
				<div className={Section1.profile__addressinner}>
					<div className={Section1.profile__datelocation}>
						<div className={Section1.profile__datejoined}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={calendarIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							Joined {state.user?.wallet.created_at.slice(0, 10)}
						</div>
						<div className={Section1.profile__location}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={info.location !== ' ' ? { locationIcon } : ''}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							{info.location}
						</div>
					</div>
					<div className={Section1.profile__sociallinks}>
						<div className={Section1.profile__link}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={info.links !== ' ' ? { link } : ''}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							{info.links}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={info.links !== ' ' ? {github} : ''} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{info.links}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={info.links !== ' ' ? {twitter} : ''} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{info.links}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={clockIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							Last seen {state.user?.wallet.updated_at}
						</div>
					</div>
					<div className={Section1.profile__followingwallet}>
						<div className={Section1.profile__link}>
							<div className={Section1.profile__iconwrapper}>
								{info.following}
							</div>{' '}
							Following
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								{info.followers}
							</div>{' '}
							Followers {followers}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={clockIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							{state.user?.wallet.balance} Token
						</div>
					</div>
				</div>
			</div>
			<div className={Section1.profile__btns}>
				<div className={Section1.profile__btnwrapper}>
					{state.user?.userName === user ? (
						<button
							className={Section1.btn2}
							type="button"
							onClick={handleEdit}
						>
							Edit Profile
						</button>
					) : (
						<button className={Section1.btn2} type="button">
							Follow
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
export default ProfileTopSection;
