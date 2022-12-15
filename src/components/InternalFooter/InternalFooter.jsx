import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/footer-images/home.svg';
import { ReactComponent as TagIcon } from '../../assets/footer-images/tagIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/footer-images/user.svg';
import { ReactComponent as WalletIcon } from '../../assets/footer-images/wallet.svg';
import { ReactComponent as SettingsIcon } from '../../assets/footer-images/settings.svg';
import styles from './internalFooter.module.css';

import brandLogo from '../../assets/footer-images/internalbrandlogo.svg';
import facebook from '../../assets/footer-images/facebook.svg';
import twitter from '../../assets/footer-images/twitter.svg';
import instagram from '../../assets/footer-images/instagram.svg';

export default function InternalFooter() {
	// footer component for internal pages. only avaible on mobile screens

	const activeStyle = ({ isActive }) =>
		isActive ? styles.isActive : undefined;

	const linkStyle = {
		textDecoration: 'none',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '28px',
		color: '#4343de',
	};

	return (
		<div className={styles.footerContainer}>
			<ul className={`${styles.footer} `}>
				<li>
					<NavLink to="/" style={linkStyle} className={activeStyle}>
						<HomeIcon className={styles.icon} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/tags-page" style={linkStyle} className={activeStyle}>
						<TagIcon className={styles.icon} />
					</NavLink>
				</li>
				<li>
					<NavLink style={linkStyle} to="/users-page" className={activeStyle}>
						<UsersIcon className={styles.icon} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/wallet" style={linkStyle} className={activeStyle}>
						<WalletIcon className={styles.icon} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings" style={linkStyle} className={activeStyle}>
						<SettingsIcon className={styles.icon} />
					</NavLink>
				</li>
			</ul>


			<main className={styles.internalfooter}>
			<div className={styles.brandSocials}>
				<Link to="/" className={styles.brand}>
						<img src={brandLogo} alt="brand logo" />
						<span>DevAsk</span>
					</Link>
					<div className={styles.socials}>
						<img src={facebook} alt="facebook logo" />
						<img src={twitter} alt="twitter logo" />
						<img src={instagram} alt="instagram logo" />
					</div>
			</div>
			<div>
				<p>@2022 Devask copyrights reserved </p>
			</div>
			</main>



		</div>
	);
}
