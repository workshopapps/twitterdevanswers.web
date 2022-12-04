import React from 'react';
import Clients from '../../components/Clients2/Clients';
import Hero3 from '../../components/Hero3/Hero3';
import HowItWorks from '../../components/HowItWorks2/HowItWorks';
import NewsletterSub from '../../components/NewsletterSub/NewsletterSub';

import styles from './firstlandingpage.module.css';

function FirstLandingPage() {
	return (
		<div className={styles.landing}>
            <Hero3 />
			<Clients />
			<HowItWorks />
			<NewsletterSub /> 
		</div>
	);
}

export default FirstLandingPage;
