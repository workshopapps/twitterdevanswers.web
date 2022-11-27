import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineXCircle, HiBars3CenterLeft } from 'react-icons/hi2';

import brandLogo from '../../assets/brand-logo.svg';
import styles from './header.module.css';

export default function Header({ pathname }) {
	// header component for excternal pages

	// the pathname prop is the value of pathname property from the object returend by useLocation hook

	// for login and signup pages, i have set up this component to expect the pathname prop to be /login or /signup so that only the signup button is rendered if the user is on the login page and vice versa

	// for other external pages, both login and signup buttons would be present on the header

	const [sidenav, setSidenav] = useState(false);

	const ref = useRef();

	// prevent scroll if sidenav is open
	useEffect(() => {
		if (!sidenav) {
			document.body.style.overflowY = 'scroll';
		} else {
			document.body.style.overflowY = 'hidden';
		}
	}, [sidenav]);

	// open and close sidenav
	const handleClick = () => setSidenav((prev) => !prev);

	const activeStyle = ({ isActive }) =>
		isActive ? styles.isActive : undefined;

	const linkStyle = {
		textDecoration: 'none',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '28px',
		color: '#303030',
	};

	return (
		<div ref={ref} className={`${styles.headerContainer} ${styles.sticky}`}>
			<div className={`${styles.header} lpContainer`}>
				<Link to="/" className={styles.brand}>
					<img src={brandLogo} alt="brand logo" />
					<span>DevAsk</span>
				</Link>

				<ul className={styles.links}>
					<li>
						<NavLink className={activeStyle} style={linkStyle} to="/about">
							<span> About Us</span>
						</NavLink>
					</li>
					<li>
						<NavLink className={activeStyle} style={linkStyle} to="/blog-page">
							<span> Blog</span>
						</NavLink>
					</li>
					<li>
						<NavLink className={activeStyle} style={linkStyle} to="/contact">
							<span> Contact Us</span>
						</NavLink>
					</li>
				</ul>

				{pathname ? (
					<div className={styles.btns}>
						{pathname === '/login' && (
							<Link className={`${styles.btn} ${styles.signUp}`} to="/sign-up">
								Sign Up
							</Link>
						)}
						{pathname === '/sign-up' && (
							<Link className={`${styles.btn} ${styles.login}`} to="/login">
								Login
							</Link>
						)}
					</div>
				) : (
					<div className={styles.btns}>
						<Link className={`${styles.btn} ${styles.signUp}`} to="/sign-up">
							Sign Up
						</Link>

						<Link className={`${styles.btn} ${styles.login}`} to="/login">
							Login
						</Link>
					</div>
				)}

				<div className={styles.hamburger}>
					<HiBars3CenterLeft onClick={handleClick} className={styles.mnIcon} />
				</div>

				{/* mobile sidenav */}
				<div className={`${styles.mobileNav} ${sidenav && styles.active}  `}>
					<div className={styles.mnBrand}>
						<Link to="/" className={styles.brand}>
							<img src={brandLogo} alt="brand logo" />
							<span>DevAsk</span>
						</Link>

						<HiOutlineXCircle onClick={handleClick} className={styles.mnIcon} />
					</div>

					<ul className={styles.mnLinks}>
						<li>
							<NavLink className={activeStyle} style={linkStyle} to="/about">
								<div> About Us</div>
							</NavLink>
						</li>
						<li>
							<NavLink className={activeStyle} style={linkStyle} to="/blog">
								<div> Blog</div>
							</NavLink>
						</li>
						<li>
							<NavLink className={activeStyle} style={linkStyle} to="/contact">
								<div> Contact Us</div>
							</NavLink>
						</li>
					</ul>
					{pathname ? (
						<div className={styles.mnBtns}>
							{pathname === '/login' && (
								<Link
									className={`${styles.btn} ${styles.signUp}`}
									to="/sign-up"
								>
									Sign Up
								</Link>
							)}
							{pathname === '/sign-up' && (
								<Link className={`${styles.btn} ${styles.login}`} to="/login">
									Login
								</Link>
							)}
						</div>
					) : (
						<div className={styles.mnBtns}>
							<Link className={`${styles.btn} ${styles.signUp} `} to="/sign-up">
								Sign Up
							</Link>

							<Link className={`${styles.btn} ${styles.login}`} to="/login">
								Login
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

Header.propTypes = {
	pathname: PropTypes.string,
};

Header.defaultProps = {
	pathname: '',
};
