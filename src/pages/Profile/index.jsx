import React from 'react';
import { useParams } from 'react-router-dom';
import Section1 from '../../components/Section1/index';
import styles from './index.module.css';
import testUser from '../../utils/testUser.json';
import AskCards from './AskCards';
import Reaction from '../../components/Reaction/Reaction';

function Profile() {
	const routeParams = useParams();
	console.log(routeParams);

	return (
		<div className={styles.profile}>
			<Section1
				user={testUser.find((user) => user.id_str === routeParams.id)}
			/>
			<Reaction />
			<div className={styles.askcard}>
				<AskCards />
			</div>
		</div>
	);
}

export default Profile;
