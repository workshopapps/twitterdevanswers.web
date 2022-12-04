import React from 'react';
import Clients from '../../components/Clients/Clients';
import Cta from '../../components/Cta/Cta';
import Hero2 from '../../components/Hero2/Hero2';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import NewsletterSub from '../../components/NewsletterSub/NewsletterSub';

function ThirdLandingPage() {
	return (
		<>
			<Hero2 />
			<Clients />
			<HowItWorks />
			<Cta />
			<NewsletterSub />
		</>
	);
}

export default ThirdLandingPage;