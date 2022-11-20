/* eslint-disable react/no-danger */
/* eslint-disable global-require */
import React, { useState } from 'react';
import FeatureValues from './constants/Features';
import FaqValues from './constants/Faq';
import styles from './ApiPage.module.css';

function ApiPage() {
	const [isShow, setisShow] = useState(false);
	const [activeIndex, setActiveIndex] = useState(1);

	const handleAccordionShow = (indexValue) => {
		setActiveIndex(indexValue);

		if (activeIndex === indexValue) {
			setisShow(!isShow);
		} else if (activeIndex !== indexValue) {
			setisShow(false);
			setisShow(true);
		}
	};

	return (
		<>
			{/* Hero */}
			<section className={styles.hero}>
				<div className={styles.left}>
					<h1 className={styles.mobile}>
						Collaborate, Integrate DevAsk APIs and build{' '}
						<span>scalable apps</span> like never before
					</h1>

					<h1 className={styles.desktop}>
						Automate, Scale and Build a <span>Secured Platform</span> with
						Internal APIs
					</h1>

					<p className={styles.mobile}>
						From databases into GraphQL in just under a minute,Ship and maintain
						APIs on any environment
					</p>

					<p className={styles.desktop}>
						Learn how we have leveraged internal APIs to deliver top notch
						products
					</p>

					<div className={styles.buttonWrapperOne}>
						<a href="/">Book a Demo</a>
						<a href="/">Get Started</a>
					</div>
				</div>

				<div className={styles.right}>
					<img
						src={require('../../assets/api-page/mobile-hero.svg').default}
						alt="Hero"
						className={styles.mobile}
					/>
					<img
						src={require('../../assets/api-page/desktop-hero.svg').default}
						alt="Hero"
						className={styles.desktop}
					/>

					<div className={styles.buttonWrapperTwo}>
						<a href="/">Get Started</a>
						<a href="/">Try for free</a>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className={styles.features}>
				<div className={styles.wrapper}>
					<div className={styles.textContent}>
						<h2>
							Unlock a whole new <span> Collaboration Experience</span> with{' '}
							<span>DevAsk</span>
						</h2>
						<p>How we have scaled faster with Internal APIs</p>
					</div>

					<div className={styles.featureItems}>
						{FeatureValues.map((feature) => {
							const { id, heading, body, img } = feature;
							return (
								<article key={id}>
									<div className={styles.featureTitle}>
										<img src={img} alt={`${heading}`} />
										<h3>{heading}</h3>
									</div>

									<p className={styles.featureBody}>{body}</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			{/* Docs Dection  */}

			<section className={styles.docWrapper}>
				<div>
					<article className={styles.left}>
						<h3>Rest API</h3>
						<a href="/">View Full Docs</a>
					</article>

					<article className={styles.right}>
						<h3>Internal API</h3>
						<a href="/">View Full Docs</a>
					</article>
				</div>

				<div>
					<article className={styles.center}>
						<h3>Plug In API</h3>
						<a href="/">View Full Docs</a>
					</article>
				</div>

				<div>
					<article className={styles.right}>
						<h3>APPS</h3>
						<a href="/">See Full API Docs</a>
					</article>

					<article className={styles.left}>
						<h3>Premium Apps</h3>
						<a href="/">Click to Learn More</a>
					</article>
				</div>
			</section>

			{/* Explore CTA */}

			<section className={styles.ctaSection}>
				<div className={styles.topWrapper}>
					<a href="/">View API Documentation</a>

					<h2>
						Explore and Test <span>APIs</span>
					</h2>
					<p>
						Let our product serve as building blocks for your application ideas.
						Meet and collaborate with developers on different projects. Choose
						what to integrate and keep your finger on the pulse of things by
						testing whenever you need to
					</p>
				</div>

				<div className={styles.buttonWrapper}>
					<a href="/">Sign Up</a>

					<a href="/">Log in</a>
				</div>

				<img
					src={require('../../assets/api-page/explore-mobile-img.svg').default}
					alt="Explore Mobile"
					className={styles.mobile}
				/>
				<img
					src={require('../../assets/api-page/explore-desktop-img.svg').default}
					alt="Explore Desktop"
					className={styles.desktop}
				/>
			</section>

			{/* Trusted Partners */}

			<section className={styles.partners}>
				<h2>
					Our Trusted <span>Partners</span>
				</h2>

				<div className={styles.logoWrapper}>
					<img
						src={require('../../assets/api-page/payit-logo.svg').default}
						alt="Payit logo"
					/>

					<img
						src={require('../../assets/api-page/twitter-logo.svg').default}
						alt="twitter logo"
					/>

					<img
						src={require('../../assets/api-page/devops-logo.svg').default}
						alt="devops logo"
					/>

					<img
						src={
							require('../../assets/api-page/stackoverflow-logo.svg').default
						}
						alt="Stackoverflow logo"
					/>

					<img
						src={require('../../assets/api-page/unsplash-logo.svg').default}
						alt="unsplash logo"
					/>

					<img
						src={require('../../assets/api-page/figma-logo.svg').default}
						alt="figma logo"
					/>
				</div>
			</section>

			{/* FAQs Section  */}

			<section className={styles.faqSection}>
				<h2> Frequently Asked Questions</h2>

				<div className={styles.accordionWrapper}>
					{FaqValues.map((faq) => {
						const { id, title, body } = faq;
						return (
							<article className={styles.accordion} key={id}>
								<button
									className={styles.accordionTitle}
									type="button"
									onClick={() => handleAccordionShow(id)}
								>
									<h4> {title}</h4>
									<button
										onClick={() => handleAccordionShow(id)}
										type="button"
										className={styles.plusButton}
									>
										<img
											src={
												require('../../assets/api-page/plus-arrow.svg').default
											}
											alt="Plus Icon"
										/>
									</button>
								</button>

								{isShow && activeIndex === id && (
									<div className={styles.accordionBody}>
										<p dangerouslySetInnerHTML={{ __html: body }} />
									</div>
								)}
							</article>
						);
					})}
				</div>

				<a href="/">Explore More</a>
			</section>

			{/* Safety CTA Section */}

			<section className={styles.safetySection}>
				<h2>
					Safety and Security Guaranteed with{' '}
					<span className={styles.logoTextOne}>Dev</span>
					<span className={styles.logoTextTwo}>Ask</span>
				</h2>
			</section>

			{/* Footer */}
		</>
	);
}

export default ApiPage;
