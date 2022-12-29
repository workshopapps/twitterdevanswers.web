import React from 'react';
import { Link } from 'react-router-dom';
import styles from './hero3.module.css';
import LandingHero from '../../assets/landing-images/LandingHero.webp';

function Hero3() {
	return (
		<div className={styles.herosect}>
			<div className={styles.hero}>
				<div className={styles.heroText}>
					<h1>Get Instant Replies to Technical Questions</h1>
					<p>
						Devask helps you get answers to your technical questions
						immediately. You also get rewarded when you provide correct answers
						to questions.
					</p>
					<Link to="/login">
						<button type="button">Get Started</button>
					</Link>
				</div>
				<div className={styles.heroImg}>
					<img src={LandingHero} alt="LandingHero" />
				</div>
			</div>
		</div>
	);
}

export default Hero3;
