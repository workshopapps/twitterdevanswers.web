import React from 'react';
import HiwText from './../HiwText/HiwText';
import image from '../../assets/how-it-works.png';
import imageOne from '../../assets/how-it-works2.png';
import imageTwo from '../../assets/how-it-works3.png';
import imageThree from '../../assets/how-it-works4.png';
import styles from './howItWorks.module.css';

const howItWorksContent = [
	{
		id: 1,
		heading: 'easy onboarding',
		body: 'You can easily onboard on the platform, once you signup and accept the community guidelines, you will be redirected to where you can answer and ask your technical questions.',
	},
	{
		id: 2,
		heading: 'ask technicla questions',
		body: 'If you have any unanswered questions on tech, you can ask them in the community, you will always get an answer that will help you solve your problem.',
	},
	{
		id: 3,
		heading: 'get instant answers',
		body: "When you ask a question, you don't have to wait for days to get a reply. You get an instant reply to your technical question which will help fasten your work process.",
	},
	{
		id: 1,
		heading: 'earn extra cash',
		body: 'Devask allows you to earn extra cash for yourself. When you provide a correct answer to a question, you earn a reward that you can convert to cash monthly.',
	},
];

function HowItWorks() {
	return (
		<div className={`${styles.how} lpContainer`}>
			<img src={image} alt="vector" />
			<div className={styles.text}>
				<HiwText content={howItWorksContent[0]} />
			</div>

			<div className={styles.text}>
				<HiwText content={howItWorksContent[1]} />
			</div>
			<img src={imageOne} alt="vector" />

			<img src={imageTwo} alt="vector" />
			<div className={styles.text}>
				<HiwText content={howItWorksContent[2]} />
			</div>

			<div className={styles.text}>
				<HiwText content={howItWorksContent[3]} />
			</div>
			<img src={imageThree} alt="vector" />
		</div>
	);
}

export default HowItWorks;
