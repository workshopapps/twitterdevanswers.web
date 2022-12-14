import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../assets/about-images/video.png';
import About1 from '../../assets/about-images/About1.svg';
import styles from './styles.module.css';

function index() {
	return (
		<div>
			<div>
				<div className={styles.aboutsubwrap}>
					<div className={styles.aboutsubwrap1}>
						<p>
							Fostering Innovation with the <span>Right solution</span>
						</p>
						<span className={styles.aboutsubwrap1span}>
							Join a community of over 100+ tech professionals available to work
							with you. Ever got stuck on a line of code which took you a few
							minutes to resolve? Devask is bridging that gap with over 100+
							tech professionals available to answer your questions realtime.{' '}
							<br /> No credit card required - Free trial tokens - Cancel
							anytime.
						</span>

						<Link to="/">
							<button className={styles.startedButton} type="button">
								Get Started
							</button>
						</Link>
					</div>
					<div className={styles.aboutsubwrap2}>
						<img src={About1} alt="about" />
					</div>
				</div>
				<div className={styles.storyHeaderWrap}>
					<h4 className={styles.storyHeader}>Our Story</h4>
					<div className={styles.storyWrapper}>
					<p className={styles.storyIntro}>
						Devask consists of a team of 73 amazing humans living across Africa
						with a single goal of creating a solution that allows tech
						enthusiasts get real time solution to their tech problems and seeing
						innovative solutions come alive from solutions gotten from our
						platform We are happy to tell our story as being a startup that came
						to stardom with mentorship support from HNG bootcamp which brought
						together the team that curated the Devask that we have today. An
						exciting moment for us, as we look forward to bringing more
						innovative solutions your way. At Devask, we are committed to team
						growth as well as building a work environment that is inclusive of
						people of all backgrounds.We are committed to delivering quality and
						amazing products and instilling a sense of community that connects
						our customers and team together.
					</p>
					<img className={styles.screen} src={video} alt="screen" />
				</div>
				</div>

				
				<div className={styles.storyPrincipleWrap}>
				<h4 className={styles.principleHead}>Our Principles</h4>
				<div className={styles.textWrapper}>
					<p className={styles.text}>
						<div className={styles.textWrapperDiv}>1</div>
						We are building a company focused on team growth as well as looking
						after the happiness and satisfaction of our dear customers.
					</p>
					<p className={styles.text}>
						<div className={styles.textWrapperDiv}>2</div>
						Customer Centric- We are customer focused and we keep evolving to
						meet the daily needs of our customers.
					</p>
					<p className={styles.text}>
						<div className={styles.textWrapperDiv}>3</div>
						Diversity and Inclusion - We are building a work environment that is
						inclusive of people of all backgrounds.
					</p>
				</div>
				</div>
				

				<h4 className={styles.journey}>How Far We’ve Come</h4>
				<div className={styles.journeyWrapper}>
					<div className={styles.box1}>
						<span className={styles.journeyFigure1}>500+</span>
						<p className={styles.journeyWord1}>Acive members</p>
					</div>
					<div className={styles.box2}>
						<span className={styles.journeyFigure2}>200+</span>
						<p className={styles.journeyWord2}>Daily questions</p>
					</div>
					<div className={styles.box3}>
						<span className={styles.journeyFigure3}>400+</span>
						<p className={styles.journeyWord3}>Possible Answers</p>
					</div>
				</div>
				<div className={styles.subscribeWrap}>
					<div className={styles.subscribe_sub_wrap}>
						<p>Subscribe To Our News Letter. </p>
						<span>
							Stay updated for more information, latest news and blogs from
							DevAsk.
						</span>
						<div className={styles.subscribeinput}>
							<input
								type="text"
								placeholder="Please enter your email Address"
							/>
							<button type="submit">Learn more</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
