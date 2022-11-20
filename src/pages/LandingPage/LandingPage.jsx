import React from 'react';
import Clients from '../../components/Clients/Clients';
// import Cta from '../../components/Cta/Cta';
import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
// import NewsletterSub from '../../components/NewsletterSub/NewsletterSub';
// import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function LandingPage() {
	return (
		<>
			<Header />
			<Hero />
			<Clients />
			<HowItWorks />
			{/* <Cta /> */}
			{/* <NewsletterSub /> */}
			{/* <Footer /> */}
		</>
	);
}

export default LandingPage;
