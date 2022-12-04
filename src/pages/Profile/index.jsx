import React from 'react';
import { useParams } from 'react-router-dom';
import Section1 from '../../components/Section1/index';
import Section2 from '../../components/Section2/index';
import styles from './index.module.css';
import testUser from '../../utils/testUser.json';

function Profile() {
	const routeParams = useParams();
	console.log(routeParams);

	return (
		<div className={styles.profile}>
			<Section1
				user={testUser.find((user) => user.id_str === routeParams.id)}
			/>
			<Section2
				user={testUser.find((user) => user.id_str === routeParams.id)}
			/>
		</div>
	);
}

export default Profile;
