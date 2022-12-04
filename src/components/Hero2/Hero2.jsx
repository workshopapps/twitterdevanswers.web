import React from 'react';
import LpButton from '../LpButton/LpButton';
import hero2 from '../../assets/landing-images/Hero2.png';
import styles from './hero2.module.css';

function Hero2() {
	return (
		<div className={`${styles.hero} lpContainer`}>
			<div className={styles.text}>
				<h1>
					Get <span>rewarded</span> for providing <span>solutions</span> to
					<span> questions</span>
				</h1>
				<p>
					Devask helps you get answers to your technical questions immediately.
					You also get rewarded when you provide correct answers to questions.
				</p>
				<LpButton text="Get Started" path="sign-up" />
				<div className={styles.numbers}>
					<div className={styles.number}>
						<div>500+</div>
						<span>
							Active <br /> members
						</span>
					</div>
					<div className={styles.number}>
						<div>200+</div>
						<span>
							Daily <br /> questions
						</span>
					</div>
					<div className={styles.number}>
						<div>400+</div>
						<span>
							Possible <br /> answers
						</span>
					</div>
				</div>
			</div>
			<div className={styles.img}>
				<img src={hero2} alt="hero" />
			</div>
		</div>
	);
}

export default Hero2;