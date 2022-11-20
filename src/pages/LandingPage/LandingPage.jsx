import React from 'react';
import Clients from '../../components/Clients/Clients';
import Cta from '../../components/Cta/Cta';
import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import NewsletterSub from '../../components/NewsletterSub/NewsletterSub';

function LandingPage() {
	return (
		<>
			<Hero />
			<Clients />
			<HowItWorks />
			<Cta />
			<NewsletterSub />
		</>
	);
}

export default LandingPage;
