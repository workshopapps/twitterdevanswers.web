/* eslint-disable consistent-return */

import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineXCircle, HiBars3CenterLeft } from 'react-icons/hi2';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/header-images/home.svg';
import { ReactComponent as TagIcon } from '../../assets/header-images/tagIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/header-images/user.svg';
import { ReactComponent as WalletIcon } from '../../assets/header-images/wallet.svg';
import { ReactComponent as SortIcon } from '../../assets/header-images/sort.svg';
// import { ReactComponent as SettingsIcon } from '../../assets/header-images/settings.svg';
import { ReactComponent as NotificationIcon } from '../../assets/header-images/notification.svg';
import { ReactComponent as SearchIcon } from '../../assets/header-images/search.svg';
import { ReactComponent as Logout } from '../../assets/header-images/logout.svg';
import avatar from '../../assets/header-images/avatar.svg';
import brandLogo from '../../assets/header-images/brandlogo2.svg';
import styles from './internalHeader.module.css';
import { AppContext } from '../../store/AppContext';

//  header component for internal pages
export default function InternalHeader() {
	const [sidenav, setSidenav] = useState(false);
	// const [userState, setUserState] = useState('online');
	// const [lastSeen, setLastSeen] = useState();

	const { pathname } = useLocation();

	const {
		state: { user },
	} = useContext(AppContext);

	// prevent scroll if sidenav is open
	// const [active, setActive] = useState(true);

	// const checkForInactivity = () => {
	// 	const expiredTime = sessionStorage.getItem('expireTime');

	// 	if (expiredTime < Date.now()) {
	// 		setActive(false);
	// 		sessionStorage.setItem('userActivity', 'offline');
	// 	} else if (expiredTime > Date.now()) {
	// 		setActive(true);
	// 		const today = new Date();
	// 		sessionStorage.setItem('userActivity', 'online');
	// 		const inactiveTimeStamp = `${today.getFullYear()}-${
	// 			today.getMonth() + 1
	// 		}-${today.getDate()},${today.getHours()}:${today.getMinutes()} `;
	// 		sessionStorage.setItem('lastSeen', inactiveTimeStamp);
	// 	}
	// };

	// const updateExpiredTime = () => {
	// 	if (active === true) {
	// 		const timer = Date.now() + 10000;
	// 		sessionStorage.setItem('expireTime', timer);
	// 	}
	// };

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		checkForInactivity();
	// 	}, [1000]);

	// 	return () => clearInterval(interval);
	// }, []);

	// useEffect(() => {
	// 	updateExpiredTime();

	// 	window.addEventListener('click', updateExpiredTime);
	// 	window.addEventListener('keypress', updateExpiredTime);
	// 	window.addEventListener('scroll', updateExpiredTime);
	// 	window.addEventListener('mousemove', updateExpiredTime);

	// 	return () => {
	// 		window.removeEventListener('click', updateExpiredTime);
	// 		window.removeEventListener('keypress', updateExpiredTime);
	// 		window.removeEventListener('scroll', updateExpiredTime);
	// 		window.removeEventListener('mousemove', updateExpiredTime);
	// 	};
	// }, []);
	useEffect(() => {
		if (!sidenav) {
			document.body.style.overflowY = 'scroll';
		} else {
			document.body.style.overflowY = 'hidden';
		}
	}, [sidenav]);

	// const lastSeenVisibleTimer = 5 * 30000;
	// function handleLastSeen() {
	// 	if (active === false) {
	// 		const lastSeenTimer = setTimeout(() => {
	// 			setLastSeen(`Last seen: ${sessionStorage.getItem('lastSeen')}`);
	// 		}, [lastSeenVisibleTimer]);
	// 		return () => clearTimeout(lastSeenTimer);
	// 	}
	// }

	// useEffect(() => {
	// 	const activity = setInterval(() => {
	// 		if (active === true) {
	// 			const activityState = sessionStorage.getItem('userActivity');
	// 			setUserState(activityState);
	// 		} else if (active === false) {
	// 			setUserState(sessionStorage.getItem('userActivity'));
	// 		}
	// 	}, [100]);

	// 	return () => clearInterval(activity);
	// }, []);

	// useEffect(() => {
	// 	const seenState = setInterval(() => {
	// 		if (sessionStorage.getItem('userActivity') === 'online') {
	// 			setLastSeen('');
	// 		}
	// 	}, [100]);

	// 	return () => clearInterval(seenState);
	// }, []);

	// add isActive classname if Navlink is active to style active state
	const activeStyle = ({ isActive }) =>
		isActive ? styles.isActive : undefined;

	// open and close sidenav
	const hadnleClick = () => setSidenav((prev) => !prev);

	const linkStyle = {
		textDecoration: 'none',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '28px',
		color: '#492b7c',
		// color: '#4343de',
	};

	return (
		<div className={styles.headerContainer}>
			<div className={`${styles.header} lpContainer`}>
				<div className={styles.left}>
					<HiBars3CenterLeft
						className={styles.hamburger}
						onClick={hadnleClick}
					/>
					<Link to="/" className={styles.brand}>
						<img src={brandLogo} alt="brand logo" />
						<span>DevAsk</span>
					</Link>
				</div>

				<div className={styles.right}>
					<ul className={styles.links}>
						<li>
							<NavLink to="/dashboard" style={linkStyle} className={activeStyle}>
								<div className={styles.link}>
									<HomeIcon className={styles.icon} />
									<span>Home</span>
								</div>
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/tags-page"
								style={linkStyle}
								className={activeStyle}
							>
								<div className={styles.link}>
									<TagIcon className={styles.icon} /> <span>Tag</span>
								</div>
							</NavLink>
						</li>
						<li>
							<NavLink
								style={linkStyle}
								to="/users-page"
								className={activeStyle}
							>
								<div className={styles.link}>
									<UsersIcon className={styles.icon} /> <span>Users</span>
								</div>
							</NavLink>
						</li>
						<li>
							<NavLink to="/wallet" style={linkStyle} className={activeStyle}>
								<div className={styles.link}>
									<WalletIcon className={styles.icon} /> <span>Wallet</span>
								</div>
							</NavLink>
						</li>
						<li>
							{/* <NavLink to="/settings" style={linkStyle} className={activeStyle}>
								<div className={styles.link}>
									<SettingsIcon className={styles.icon} /> <span>Settings</span>
								</div>
							</NavLink> */}
						</li>
					</ul>
					<div className={styles.rest}>
						<div className={styles.search}>
							<SearchIcon />
							{/* <input type="text" placeholder="Search questions..." /> */}
						</div>
						<NavLink to="/notifications-page" className={activeStyle}>
							<NotificationIcon className={styles.icon} />
						</NavLink>
						<SortIcon className={styles.sortIcon} />
						<div className={styles.user}>
							<NavLink
								to="/profile/:username"
								className={styles.avatar}
								// aria-hidden={active}
							>
								<img src={avatar} alt="avatar" />
							</NavLink>
							<div className={styles.profile}>
								<div className={styles.nameStatus}>
									<p>{user?.userName}</p>
									{/* <span onChange={handleLastSeen()}>{userState}</span> */}
								</div>
								{/* <span className={styles.lastseen}>{lastSeen}</span> */}
							</div>
						</div>

						{/* {pathname === '/dashboard' && (
							<NavLink
								to="/post-questions"
								className={`${styles['header-button']} ${styles['header-button__large-screen']}`}
							>
								Ask a question
							</NavLink>
						)} */}
					</div>

					{/* SideNav for small laptops and tabs */}
					<div className={`${styles.sidenav} ${sidenav && styles.active}`}>
						<div className={styles.snBrand}>
							<Link to="/" className={styles.brand} onClick={hadnleClick}>
								<img src={brandLogo} alt="brand logo" />
								<span>DevAsk</span>
							</Link>

							<span className={styles.close}>
								<HiOutlineXCircle onClick={hadnleClick} />
							</span>
						</div>

						<ul className={styles.snLinks}>
							<li>
								<NavLink
									to="/"
									style={linkStyle}
									className={activeStyle}
									onClick={hadnleClick}
								>
									<div className={styles.snLink}>
										<HomeIcon className={styles.snIcon} />
										<span>Home</span>
									</div>
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/tags-page"
									style={linkStyle}
									className={activeStyle}
									onClick={hadnleClick}
								>
									<div className={styles.snLink}>
										<TagIcon className={styles.snIcon} /> <span>Tag</span>
									</div>
								</NavLink>
							</li>
							<li>
								<NavLink
									style={linkStyle}
									to="/users-page"
									className={activeStyle}
									onClick={hadnleClick}
								>
									<div className={styles.snLink}>
										<UsersIcon className={styles.snIcon} /> <span>Users</span>
									</div>
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/wallet"
									style={linkStyle}
									className={activeStyle}
									onClick={hadnleClick}
								>
									<div className={styles.snLink}>
										<WalletIcon className={styles.snIcon} /> <span>Wallet</span>
									</div>
								</NavLink>
							</li>
							<li>
								{/* <NavLink
									to="#"
									style={linkStyle}
									className={activeStyle}
									onClick={hadnleClick}
								>
									<div className={styles.snLink}>
										<SettingsIcon className={styles.snIcon} />{' '}
										<span>Settings</span>
									</div>
								</NavLink> */}
							</li>
							<li className={styles.log}>
								<NavLink
									to="/"
									style={linkStyle}
									className={activeStyle}
									onClick={hadnleClick}
								>
									<div className={styles.snLink}>
										<Logout /> <span className={styles.logspan}>Logout</span>
									</div>
								</NavLink>
							</li>
							<li>
								{pathname === '/dashboard' && (
									<NavLink
										to="/post-questions"
										className={`${styles['header-button']} ${styles['header-button__small-screen']}`}
									>
										Ask a question
									</NavLink>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
