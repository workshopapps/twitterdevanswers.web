import React, { useState } from 'react';
import styles from './API.module.css';
import Faqs from './constants/Faqs';
import Features from './constants/Features';
import Logos from './constants/Logos';

function API() {
	const [isShow, setIsShow] = useState(false);
	const [isActive, setIsActive] = useState(1);

	const handleShow = (idValue) => {
		setIsActive(idValue);

		if (isActive === idValue) {
			setIsShow(!isShow);
		} else if (isActive !== idValue) {
			setIsShow(false);
			setIsShow(true);
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
						Learn how we have leveraged internal APIs to deliver top notch
						products
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
						src="/api-pages/mobile-hero.svg"
						alt="Hero"
						className={styles.mobile}
					/>
					<img
						src="/api-pages/desktop-hero.svg"
						alt="Hero"
						className={styles.desktop}
					/>

					<div className={styles.buttonWrapperTwo}>
						<a href="/" className={styles.links}>
							Book a Demo
						</a>
						<a href="/" className={styles.links}>
							Get Started
						</a>
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
						{Features.map((feature) => {
							const { id, heading, body, img } = feature;
							return (
								<article key={id}>
									<button className={styles.featureTitle} type="button">
										<img src={`/api-pages/${img}`} alt={heading} />
										<h3>{heading}</h3>
									</button>

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
						<a href="/" className={styles.links}>
							View Full Docs
						</a>
					</article>

					<article className={styles.right}>
						<h3>External API</h3>
						<a href="/" className={styles.links}>
							View Full Docs
						</a>
					</article>
				</div>

				<div>
					<article className={styles.center}>
						<h3>Plug In API</h3>
						<a href="/" className={styles.links}>
							View Full Docs
						</a>
					</article>
				</div>

				<div>
					<article className={styles.right}>
						<h3>APPS</h3>
						<a href="/" className={styles.links}>
							See Full API Docs
						</a>
					</article>

					<article className={styles.left}>
						<h3>Premium Apps</h3>
						<a href="/" className={styles.links}>
							Click to Learn More
						</a>
					</article>
				</div>
			</section>

			{/* Explore CTA */}

			<section className={styles.ctaSection}>
				<div className={styles.topWrapper}>
					<a href="/" className={styles.links}>
						View API Documentation
					</a>

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
					<a href="/" className={styles.links}>
						Sign Up
					</a>

					<a href="/" className={styles.links}>
						Log in
					</a>
				</div>

				<img
					src="/api-pages/explore-mobile-img.svg"
					alt="Explore Mobile"
					className={styles.mobile}
				/>
				<img
					src="/api-pages/explore-desktop-img.svg"
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
					{Logos.map((logo) => {
						const { id, srcName, altTag } = logo;
						return <img src={`/api-pages/${srcName}`} alt={altTag} key={id} />;
					})}
				</div>
			</section>

			{/* FAQs Section  */}

			<section className={styles.faqSection}>
				<h2> Frequently Asked Questions</h2>

				<div className={styles.accordionWrapper}>
					{Faqs.map((faq) => {
						const { id, title, body } = faq;
						return (
							<article className={styles.accordion} key={id}>
								<button
									type="button"
									className={styles.accordionTitle}
									onClick={() => handleShow(id)}
								>
									<h4> {title}</h4>

									<img src="/api-pages/plus-arrow.svg" alt="Plus Icon" />
								</button>
								{isActive === id && isShow && (
									<div>
										<p className={styles.accordionBody}> {body}</p>
									</div>
								)}
							</article>
						);
					})}
				</div>

				<a href="/" className={styles.links}>
					Explore More
				</a>
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

export default API;
