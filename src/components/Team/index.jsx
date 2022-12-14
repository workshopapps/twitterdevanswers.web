import React from 'react';
import styles from './styles.module.css';
import teamData from './teamData';

function Meet() {
	const team = teamData.map((teamMember) => (
		<div className={styles.teamMember} key={teamMember.id}>
			<section className={styles.nameTag}>
				<img src={teamMember.picture} alt="" />
				<p className={styles.tag}>{teamMember.tag}</p>
				<h4 className={styles.name}>{teamMember.name}</h4>
			</section>
			<p className={styles.about}>{teamMember.about}</p>
			<p className={styles.contact}>{teamMember.contact}</p>
			<section className={styles.socials}>
				{teamMember.socials.map((social) => (
					<img className={styles.social} src={social} alt="" />
				))}
			</section>
		</div>
	));

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Meet Our <span>Team</span>
			</h2>
			<p className={styles.description}>
				We have a team of developers from all stacks, devoted to helping you
				debug your next project
			</p>
			<div className={styles.team}>{team}</div>
		</div>
	);
}

export default Meet;
