import React from 'react'
import styles from './reaction.module.css'


function Reaction() {
	
  return (
	<div>
		<div className={styles.container}>
			<div className={styles.questioncontainer}>
				<h5>Questions</h5>
			</div>
			<div className={styles.repliescontainer}>
				<h5>Replies</h5>
			</div>
			<div className={styles.likescontainer}>
				<h5>Likes</h5>
			</div>
			<div className={styles.rewardscontainer}>
				<h5>Rewards</h5>
			</div>
		</div>
		<hr />
		</div>
	);
}

export default Reaction