import React from 'react';
import Section1 from '../../components/Section1/index';
import styles from './index.module.css';
import AskCards from './AskCards';
import Reaction from '../../components/Reaction/Reaction';

function Profile() {

	


	return (
		<div className={styles.profile}>
			<Section1
			/>
			<Reaction />
			<div className={styles.askcard}>
				<AskCards />
			</div>
		</div>
	);
}

export default Profile;
