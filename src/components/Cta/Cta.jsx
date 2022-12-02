import React from 'react';
import LpButton from '../LpButton/LpButton';
import ctaImg from '../../assets/landing-images/cta-img.png';
import styles from './cta.module.css';

function Cta() {
	return (
		<div className={styles.ctaContainer}>
			<div className={`${styles.cta} lpContainer`}>
				<div className={styles.text}>
					<h2>Join a community of developers</h2>
					<p>
						Stay updated with the latest news in the tech industry, share your
						thoughts on tech-related issues, network with like minds, and
						increase your pace in your tech journey.
					</p>
					<LpButton path="/" text="Join now" />
				</div>

				<div className={styles.img}>
					<img src={ctaImg} alt="call to action" />
				</div>
			</div>
		</div>
	);
}

export default Cta;
