import React from 'react';
import Hero3 from '../../components/Hero3/Hero3';
import HowItWorks from '../../components/HowItWorks2/HowItWorks';
import NewsletterSub from '../../components/NewsletterSub/NewsletterSub';

import styles from './firstlandingpage.module.css';

function FirstLandingPage() {
	return (
		<div className={styles.landing}>
			<Hero3 />

			<div className={styles.LandingAim}>
				<h4>Who we are</h4>
				<h2>
					<span>Aiming to</span> empower the world <span>through</span>{' '}
					knowledge of the technical world
				</h2>
				<div className={styles.LandingWordFlex}>
					<p>
						DevAsk is a community of coders built for all levels of techies. We
						thought of how most front end developers get stuck trying to
						identify a bug on a line of code thus wasting productive time.
						That’s why we came up with a community that allows other front end
						developers in the space to look through your code and debug in the
						shortest time possible.
					</p>
					<p>
						Our product helps people find answers they need, whenever they need
						it. We help empower people by giving them a platform for them to
						feel accomplished and have a fun time. People ask questions, get
						replies and people also get paid, All in one platform.
					</p>
				</div>
			</div>
			<HowItWorks />
			<NewsletterSub />
		</div>
	);
}

export default FirstLandingPage;
