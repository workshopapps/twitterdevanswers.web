import React from 'react';
import video from '../../assets/about-images/video.png';
import about1 from '../../assets/about-images/about1.png';
import about2 from '../../assets/about-images/about2.png';
import about3 from '../../assets/about-images/about3.png';
import about4 from '../../assets/about-images/about4.png';
import html from '../../assets/about-images/html.png';
import figma from '../../assets/about-images/figma.png';
import css from '../../assets/about-images/css.png';
import stack from '../../assets/about-images/stack.png';
import twitter from '../../assets/about-images/twitter.png';
import Mobile from '../../components/AboutMobile/Mobile';
import styles from './styles.module.css';

function index() {
	const { innerWidth } = window;
	return (
		<div>
			{innerWidth < 600 ? (
				<Mobile />
			) : (
				<div>
					<div>
						<h4 className={styles.header}>
							What we <span style={{ color: '#1D1DD8' }}>do?</span>
						</h4>
						<p className={styles.intro}>
							Join a community of over 100+ tech professionals available to
							<br /> work with you. Get Started.
							<br />
							<span style={{ color: '#1D1DD8' }}>
								No credit card required
							</span>{' '}
							- Free trial tokens -{' '}
							<span style={{ color: '#1D1DD8' }}>Cancel anytime.</span>
						</p>

						<img className={styles.about1} src={about1} alt="about1" />
						<img className={styles.about2} src={about2} alt="about2" />
						<img className={styles.about3} src={about3} alt="about3" />
						<img className={styles.about4} src={about4} alt="about4" />
					</div>

					<h4 className={styles.secondHeader}>
						<span style={{ color: '#1D1DD8' }}>Fostering Innovation</span> with
						the right solution
					</h4>
					<p className={styles.secondIntro}>
						Ever got stuck on a line of code which took you a few minutes to
						resolve. Devask is bridging that gap with over 100+ tech
						professionals available to
						<br /> answer your questions realtime. Let’s solve that problem
						together.
					</p>
					<button type="button" className={styles.startedButton}>
						Get Started
					</button>

					<h4 className={styles.storyHeader}>Our Story</h4>
					<div className={styles.storyWrapper}>
						<p className={styles.storyIntro}>
							Devask consists of a team of 73 amazing humans living across
							Africa with a single goal of creating a solution that allows tech
							enthusiasts get real time solution to their tech problems and
							seeing innovative solutions come alive from solutions gotten from
							our platform We are happy to tell our story as being a startup
							that came to stardom with mentorship support from HNG bootcamp
							which brought together the team that curated the Devask that we
							have today. An exciting moment for us, as we look forward to
							bringing more innovative solutions your way. At Devask, we are
							committed to team growth as well as building a work environment
							that is inclusive of people of all backgrounds.We are committed to
							delivering quality and amazing products and instilling a sense of
							community that connects our customers and team together.
						</p>
						<img className={styles.screen} src={video} alt="screen" />
					</div>

					<h4 className={styles.principleHead}>Our Principles</h4>
					<div className={styles.textWrapper}>
						<p className={styles.text}>
							We are building a company focused on team growth as well as
							looking after the happiness and satisfaction of our dear
							customers.
						</p>
						<p className={styles.text}>
							Customer Centric- We are customer focused and we keep evolving to
							meet the daily needs of our customers.
						</p>
						<p className={styles.text}>
							Diversity and Inclusion - We are building a work environment that
							is inclusive of people of all backgrounds.
						</p>
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

					<h4 className={styles.clients}>Our Clients</h4>
					<div className={styles.principlesWrapper}>
						<img
							className={styles.principle1}
							src={stack}
							alt="stack overflow logo"
						/>
						<img className={styles.principle2} src={html} alt="html logo" />
						<img className={styles.principle3} src={figma} alt="figma logo" />
						<img className={styles.principle4} src={css} alt="css logo" />
						<img
							className={styles.principle5}
							src={twitter}
							alt="twitter logo"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default index;
