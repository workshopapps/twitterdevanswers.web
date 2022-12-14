import React from 'react';
import HiwText from '../HiwText2/HiwText';
import LandingSectRepository from "../../assets/landing-images/LandingSectRepository.svg"
import LandingSectSolution from "../../assets/landing-images/LandingSectSolution.svg"
import LandingSectSolve from "../../assets/landing-images/LandingSectSolve.svg"
import styles from './howItWorks.module.css';

const howItWorksContent = [
	{
		id: 1,
		heading: 'Realtime Solution',
		body: 'You can be sure to meet up with your timeline by trusting DevAsk. Get real time solutions to your front end queries and smile in the presentation room with bug free code.',
	},
	{
		id: 2,
		heading: 'Solve & Earn',
		body: 'Solving a task on DevAsk means earning some dollars. We want you to get paid for your time. You get rewarded for every solution offered.',
	},
	{
		id: 3,
		heading: 'Solution Repository',
		body: 'We have a repository of trusted answers for most front end queries.',
	},
];

function HowItWorks() {
	return (
		<div className={styles.container}>
			<div className={styles.steps}>
				<h1>Our Process</h1>
				<div className={styles.stepImage}>
					<div className={styles.ProcessCard}>
						<div className={styles.cardcircle}>
							<p>1</p>
						</div>
						<p>SIGN UP /SIGN IN</p>
					</div>
					<div className={styles.ProcessCard}>
						<div className={styles.cardcircle}>
							<p>2</p>
						</div>
						<p>POST A QUESTION /SEARCH CONTENT</p>
					</div>
					<div className={styles.ProcessCard}>
						<div className={styles.cardcircle}>
							<p>3</p>
						</div>
						<p>GET SOLUTION</p>
					</div>
				</div>
			</div>

			<div className={`${styles.how} lpContainer`}>
				<div className={styles.text}>
					<div className={styles.leftside}>
						<HiwText content={howItWorksContent[0]} />
					</div>
					<div className={styles.rightside}>
						<img src={LandingSectSolution} alt="LandingSectSolution" />
					</div>
				</div>

				<div className={styles.textrev}>
					<div className={styles.leftside}>
						<HiwText content={howItWorksContent[1]} />
					</div>
					<div className={styles.rightside}>
						<img src={LandingSectSolve} alt="LandingSectSolve" />
					</div>
				</div>
				<div className={styles.text}>
					<div className={styles.leftside}>
						<HiwText content={howItWorksContent[2]} />
					</div>
					<div className={styles.rightside}>
						<img src={LandingSectRepository} alt="LandingSectRepository" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HowItWorks;
