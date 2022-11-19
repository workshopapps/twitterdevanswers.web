import React from 'react';
import FeatureValues from './constants/Features';
import FaqValues from './constants/Faq';
import styles from './Api.module.css';

function ApiPage() {
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
						<a href="/">Get Started</a>
						<a href="/">Try for free</a>
					</div>
				</div>

				<div className={styles.right}>
					<img
						src="./assets/api-pages/mobile-hero.svg"
						alt="Hero"
						className={styles.mobile}
					/>
					<img
						src="./assets/api-pages/desktop-hero.svg"
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
						<p>
							Bring your app ideas to reality, offer users more ways to engage
							your contents
						</p>
					</div>

					<div className={styles.featureItems}>
						{FeatureValues.map((feature) => {
							const { id, heading, body, img } = feature;
							return (
								<article key={id}>
									<div className={styles.featureTitle}>
										<img src={`./assets/api-pages/${img}`} alt="Activities" />
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
						<h3>External API</h3>
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
					src="./assets/api-pages/explore-mobile-img.svg"
					alt="Explore Mobile"
					className={styles.mobile}
				/>
				<img
					src="./assets/api-pages/explore-desktop-img.svg"
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
					<img src="./assets/api-pages/payit-logo.svg" alt="Payit logo" />

					<img src="./assets/api-pages/twitter-logo.svg" alt="twitter logo" />

					<img src="./assets/api-pages/devops-logo.svg" alt="devops logo" />

					<img
						src="./assets/api-pages/stackoverflow-logo.svg"
						alt="Stackoverflow logo"
					/>

					<img src="./assets/api-pages/unsplash-logo.svg" alt="unsplash logo" />

					<img src="./assets/api-pages/figma-logo.svg" alt="figma logo" />
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
								<div className={styles.accordionTitle}>
									<h4> {title}</h4>
									<img
										src="./assets/api-pages/plus-arrow.svg"
										alt="Plus Icon"
									/>
								</div>

								<div className={styles.accordionBody}>{body}</div>
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
