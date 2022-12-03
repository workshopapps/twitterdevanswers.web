/* eslint-disable camelcase */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { AppContext } from '../../store/AppContext';
import Section1 from './section1.module.css';
import link from '../../assets/profile-images/link-2.png';
import locationIcon from '../../assets/profile-images/location.png';
import twitter from '../../assets/profile-images/twitter.png';
import github from '../../assets/profile-images/github.png';
import calendarIcon from '../../assets/profile-images/calendar.png';
import clockIcon from '../../assets/profile-images/clock.png';

function ProfileTopSection() {
	// const [userInfo, setUserInfo] = useState({});

	// useEffect(() => {
	// 	axios
	// 		.get('https://pacific-peak-54505.herokuapp.com/users/1')
	// 		.then((response) => {
	// 			setUserInfo(response.data);
	// 		});
	// }, []);

	// const userId = userInfo.first_name;
	// console.log(userId);

// 	{
//   "success": true,
//   "data": [
//     {
//       "user_id": 1,
//       "username": "testuser",
//       "first_name": " ",
//       "last_name": " ",
//       "email": "testuser@example.com",
//       "description": " ",
//       "phone_number": " ",
//       "work_experience": " ",
//       "position": " ",
//       "stack": " ",
//       "links": [
//         " "
//       ],
//       "role": null,
//       "image_url": " ",
//       "location": " ",
//       "is_admin": false,
//       "account_balance": 1000
//     },
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbWFyYXBlYWNlQGdtYWlsLmNvbSIsImV4cCI6MTY3MDA5NzQ5MX0.dX1MCIuTQeljNyUBshlFaOYaOjScwU5MVMw3ncBs0Z4'
// const res = axios.get('https://pacific-peak-54505.herokuapp.com/users/1', {
//   headers: {
//     'Authorization ': `Bearer ${token}`
//   }
// });
// let info = {}
// info = res


	const {
		state: { user: userInformation },
	} = useContext(AppContext);
	console.log(userInformation);

	return (
		<div className={Section1.profile__datawrapper}>
			<div className={Section1.profile__datatxt}>
				<div className={Section1.profile__imagewrapper}>
					<img
						// src={`${profile_image_url_https}`}
						src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
						alt=""
						className={Section1.profile__image}
					/>
				</div>
			</div>
			<div className={Section1.profile__address}>
				<div className={Section1.profile__info}>
					<div className={Section1.profile__name}>
						{userInformation?.userName} 
						{/* {info} */}
					</div>
					<div className={Section1.profile__username}>@amarapeace</div>
					<div className={Section1.profile__status}>
						Frontend Developer (REACT)
					</div>
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
							Joined {userInformation?.wallet.created_at.slice(0, 10)}
						</div>
						<div className={Section1.profile__location}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={locationIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							{userInformation?.location}Lagos, Nigeria
						</div>
					</div>

					<div className={Section1.profile__sociallinks}>
						<div className={Section1.profile__link}>
							<div className={Section1.profile__iconwrapper}>
								<img src={link} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{userInformation?.userName}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={github} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{userInformation?.userName}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img src={twitter} alt="" className={Section1.profile__icon} />
							</div>{' '}
							{userInformation?.userName}
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={clockIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							Last seen 12 hours ago
						</div>
					</div>
					<div className={Section1.profile__followingwallet}>
						<div className={Section1.profile__link}>
							<div className={Section1.profile__iconwrapper}>
								{userInformation?.user_id}
							</div>{' '}
							Following
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								{userInformation?.user_id}
							</div>{' '}
							Followers
						</div>
						<div className={Section1.profile__socials}>
							<div className={Section1.profile__iconwrapper}>
								<img
									src={clockIcon}
									alt=""
									className={Section1.profile__icon}
								/>
							</div>{' '}
							{userInformation?.wallet.balance} Token
						</div>
					</div>
					{/* <div className={Section1.profile__socials}>
						<div className={Section1.profile__iconwrapper}>
							<img src={clockIcon} alt="" className={Section1.profile__icon} />
						</div>{' '}
						Last seen 12 hours ago
					</div> */}
				</div>
			</div>
			<div className={Section1.profile__btns}>
				<div className={Section1.profile__btnwrapper}>
					{userInformation.user_id ? (
						<button className={Section1.btn2} type="button">
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

ProfileTopSection.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		screen_name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		profile_image_url_https: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
	}).isRequired,
};
