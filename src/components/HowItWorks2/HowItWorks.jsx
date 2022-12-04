import React from 'react';
import HiwText from '../HiwText2/HiwText';
import image from './HowItWorksImage/how-it-works.png';
import imageOne from './HowItWorksImage/how-it-works1.png';
import imageTwo from './HowItWorksImage/how-it-works2.png';
import imageThree from './HowItWorksImage/how-it-works3.png';
import imageFour from './HowItWorksImage/how-it-works4.png';
import imageFive from './HowItWorksImage/how-it-works5.png';
import imageSix from './HowItWorksImage/how-it-works6.png';
import styles from './howItWorks.module.css';

const howItWorksContent = [
	{
		id: 0,
		heading: 'Why DevAsk?',
		body: 'DevAsk is a community of coders built for all levels of techies. We thought of how most front end developers get stuck trying to identify a bug on a line of code thus wasting productive time. That’s why we came up with a community that allows other front end developers in the space to look through your code and debug in the shortest time possible.',
	},
	{
		id: 2,
		heading: 'Realtime Solution',
		body: 'You can be sure to meet up with your timeline by trusting DevAsk. Get real time solutions to your front end queries and smile in the presentation room with bug free code.',
	},
	{
		id: 3,
		heading: 'Solve & Earn',
		body: "Solving a task on DevAsk means earning some dollars. We want you to get paid for your time. You get rewarded for every solution offered.",
	},
	{
		id: 1,
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
                    <img src={imageFour} alt="vector"/>
                    <img src={imageFive} alt="vector"/>
                    <img src={imageSix} alt="vector"/>
                </div>
            </div>

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
        </div>
	);
}

export default HowItWorks;