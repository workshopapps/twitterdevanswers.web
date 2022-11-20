import React from 'react';
import styles from './styles.module.css';
import answerImage from './assets/answer_image.png';
import getRewarded from './assets/get_rewarded.png';

import microsoft from './assets/microsoft.svg';
import google from './assets/google.svg';
import meta from './assets/meta.svg';
import twitter from './assets/twitter.svg';
import github from './assets/github.svg';

import microsoftRespo from './assets/microsoft_respo.svg';
import googleRespo from './assets/google_respo.svg';
import metaRespo from './assets/meta_respo.svg';
import twitterRespo from './assets/twitter_respo.svg';
import githubRespo from './assets/github_respo.svg';
import { Link } from 'react-router-dom';

function HowItWorks() {
	return (
		<div className={styles.container}>
			<div className={styles.bgimage}>
				<div className={styles.header}>
					<h1 className={styles.headertext}>
						Get real-time answers to coding questions. Get rewarded for
						answering questions.
					</h1>
					<button className={styles.btn} type="submit">
						Sign Up and Get Started
					</button>
				</div>
			</div>

			{/* <!-- How It Works Section --> */}
			<div className={styles.secondheader}>
				<div>
					<p className={styles.secondp}>How It Works</p>
				</div>

				<div className={styles.centerdiv}>
					<div className={styles.gridcontainer}>
						<div>
							<img
								src={answerImage}
								className={styles.image}
								alt="Aesthetics of a man with a laptop"
							/>
						</div>

						<div className={styles.griditem}>
							<h3 className={styles.answerh3}>Get Answers to Your Questions</h3>

							<div className={styles.griditem}>
								<div className={styles.flex}>
									<div className={styles.vl} />
									<div className={styles.writeup}>
										<p className={styles.answersub}>1. Register</p>
										<p className={styles.writeuptext}>
											The first step is to sign up with your details. After
											signing up, you are automatically logged in. As a new
											user, you get FREE crypto tokens to ask questions.
										</p>
									</div>
								</div>
								<div className={styles.flex}>
									<div className={styles.vl} />
									<div className={styles.writeup}>
										<p className={styles.answersub}>2. Ask</p>
										<p className={styles.writeuptext}>
											With your free tokens, you can begin asking questions
											right away. When your token runs out, you have to pay for
											a subscription plan to reload it.
										</p>
									</div>
								</div>
								<div className={styles.flex}>
									<div className={styles.vl} />
									<div className={styles.writeup}>
										<p className={styles.answersub}>3. Get Answers</p>
										<p className={styles.writeuptext}>
											Your question will be answered in its thread by other
											developers. Check the resolve button if you find a
											particular answer helpful.
										</p>
									</div>
								</div>
								<button className={styles.btn} type="submit">
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Get Rewarded for Answering Questions --> */}
			<div className={styles.thirdheader}>
				<div className={styles.flexreverse}>
					<div className={styles.imagegroup}>
						<img
							src={getRewarded}
							className={styles.image}
							alt="Aesthetics of laptop and coffee"
						/>
					</div>

					<div className={styles.group}>
						<h3 className={styles.answerh3}>
							Get Rewarded for Answering Questions
						</h3>

						<div className={styles.groupone}>
							<div className={styles.flex}>
								<div className={styles.vlone} />
								<div>
									<p className={styles.writeuptextone}>
										Answering other developers&apos; questions, and having been
										marked as the one that helped them solve their problem,
										rewards you with crypto tokens you can withdraw at the end
										of the month.
									</p>
								</div>
							</div>
							<button className={styles.btn} type="submit">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Icon Section --> */}
			<div className={styles.fourthheader}>
				<div className={styles.iconsection}>
					<h3>Users on DevAsk work at</h3>
					<div className={styles.flexrowdesktop}>
						<img src={microsoft} className={styles.icon} alt="Microsoft Icon" />
						<img src={google} className={styles.icon} alt="Google Icon" />
						<img src={meta} className={styles.icon} alt="Meta Icon" />
						<img src={twitter} className={styles.icon} alt="Twitter Icon" />
						<img src={github} className={styles.icon} alt="Github Icon" />
					</div>
					<div className={styles.flexrowmobile}>
						<img
							src={microsoftRespo}
							className={styles.iconmobile}
							alt="Microsoft Responsive Icon"
						/>
						<img
							src={googleRespo}
							className={styles.iconmobile}
							alt="Google Responsive Icon"
						/>
						<img
							src={metaRespo}
							className={styles.iconmobile}
							alt="Meta Responsive Icon"
						/>
						<br />
						<img
							src={twitterRespo}
							className={styles.iconmobile}
							alt="Twitter Responsive Icon"
						/>
						<img
							src={githubRespo}
							className={styles.iconmobile}
							alt="Github Responsive Icon"
						/>
					</div>
				</div>
			</div>

			{/* <!-- Last Section --> */}
			<div className={styles.fifthheader}>
				<h1 className={styles.foottext}>Get started with DevAsk</h1>
				<button className={styles.btn} type="submit">
					Sign Up and Get Started
				</button>
			</div>
		</div>
	);
}

export default HowItWorks;
