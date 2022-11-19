import React from 'react';

import classes from './Content.module.css';
import careersCultureimage from '../../careers_images/careers_cultureimage.svg';
import careersValueimage from '../../careers_images/careers_valueimage.svg';
import careersBenefitimage from '../../careers_images/careers_benefitimage.svg';

function Content() {
	return (
		<div className={classes.content}>
			{/* first section */}
			<section className={classes.culture} id="culture">
				<div className={classes.cultureimage}>
					<img src={careersCultureimage} alt="careers_cultureimage" />
				</div>
				<div className={classes.culturetext}>
					<h3>
						We maintain a culture of communication, connection and collaboration
					</h3>
					<p>
						We&apos;ve been fully remote since day one, and are building a fully
						distributed team across North America. We believe that creative
						collaboration can happen anywhere, and that working remotely
						shouldn&apos;t have to mean sacrificing a sense of cohesion,
						community, and connection. We&apos;ve seen that by combining
						thoughtful collaboration, frequent communication, and the freedom
						for people to be their authentic selves, you can do your best work
						and inspire others to do the same.
					</p>
				</div>
			</section>

			{/* second section */}

			<section className={classes.culture} id="value">
				<div className={classes.cultureimage}>
					<img src={careersValueimage} alt="careers_valueimage" />
				</div>
				<div className={classes.culturetext}>
					<h3>Our values guide all of our practices</h3>
					<p>
						Our values are part of who we are, what we believe in, what we
						aspire to be, and they are reflected in our actions. They are our
						commitment to one another, and the collective personality of our
						organization. We always strive to lean into the fact that when
						properly practiced, sometimes our values will push us outside of our
						comfort zone.
					</p>
				</div>
			</section>

			{/* third section */}

			<section className={classes.culture} id="benefits">
				<div className={classes.cultureimage}>
					<img src={careersBenefitimage} alt="careers_benefitimage" />
				</div>
				<div className={classes.culturetext}>
					<h3>Benefits of being a part of us.</h3>
					<p>
						Our benefits have been designed with our philosophy about remote
						work in mind: that it’s the best way to support our team in working
						where they feel most inspired, productive, comfortable and creative.
						We’re committed to providing our team with the freedom and
						flexibility that comes with working remotely, and support our team
						by providing everyone with the tools you need to do your best work,
						in the work environment of your choice. While we offer competitive
						and comprehensive benefits, lots of other organizations can offer
						you those. We also offer a rarer opportunity: The ability to have a
						significant impact on the livelihoods and careers of our customers,
						working on a platform that operates at (a quickly growing) scale.
					</p>
				</div>
			</section>
		</div>
	);
}

export default Content;
