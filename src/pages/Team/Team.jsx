import React from 'react';
import styles from './styles.module.css';
import heroImage from '../../assets/team-images/hero-image.webp';
import Meet from '../../components/Team/index';

function Teams() {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<div>
					<h1 className={styles.heroText}>
						Your <span>Go To Tool</span> For Your Technical{' '}
						<span>Problems</span>.
					</h1>
					<p className={styles.heroDescription}>
						One tool that houses that houses all your developer needs to know
					</p>
				</div>
				<img src={heroImage} alt="" className={styles.heroImage} />
			</section>
			<Meet />
		</div>
	);
}

export default Teams;
