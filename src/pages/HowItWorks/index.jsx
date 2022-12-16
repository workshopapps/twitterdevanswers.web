import React from 'react';
import styles from './styles.module.css';
import one from "../../assets/howitworks-images/one.png";
import two from "../../assets/howitworks-images/two.png";
import three from "../../assets/howitworks-images/three.png";

function HowItWorks() {
	return (
		<div className={styles.HowItWorks}>
			<div className={styles.MainContainer}>
				<div className={styles.HeaderContainer}>
					<h1>How it Works</h1>
					<p>Getting answers to your technical questions is as easy as 1, 2, 3 with DevAsk</p>
				</div>
				<div className={styles.DisplayContainer}>
				<section className={styles.SectionOne}>
					<img src={one} alt="one" className={styles.Bound} />
					<h2>Setup your account</h2>
					<p>In few steps, you will tell us your name, email and more. We use these insights to find your specific circles of people on DevAsk.</p>
				</section>
				<section className={styles.SectionTwo}>
					<img src={two} alt="two" className={styles.Bound} />
					<h2>Post a question or find content</h2>
					<p>When you are logged in, you want to post your technical question or search contents that you can provide answers to.</p>
				</section>
				<section className={styles.SectionThree}>
					<img src={three} alt="three" className={styles.Bound} />
					<h2>Get answers or get rewarded</h2>
					<p>Once you post your questions, you get quick answers in real time. You also get rewarded with tokens by solving a question.</p>
				</section>
				</div>

			</div>
		</div>
	);
}

export default HowItWorks;
