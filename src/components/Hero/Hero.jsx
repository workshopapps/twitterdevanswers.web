import React from 'react';
import LpButton from '../LpButton/LpButton';
import heroImg from '../../assets/hero-img.png';
import styles from './hero.module.css';

function Hero() {
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
				<LpButton text="Get Started" path="/" />
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
				<img src={heroImg} alt="hero" />
			</div>
		</div>
	);
}

export default Hero;
