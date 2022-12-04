import React from 'react';

import { ReactComponent as StackOverflow } from '../../assets/landing-images/stackoverflow-logo.svg';
import { ReactComponent as Twitter } from '../../assets/landing-images/twitter-logo.svg';
import { ReactComponent as Figma } from '../../assets/landing-images/figma-logo.svg';
import { ReactComponent as Css } from '../../assets/landing-images/css-logo.svg';
import { ReactComponent as Html } from '../../assets/landing-images/html-logo.svg';

import styles from './clients.module.css';

function Clients() {
	return (
		<div className={`${styles.clients} lpContainer`}>
			<h3>Meet our favourite clients</h3>
			<div className={styles.brands}>
				<StackOverflow />
				<Twitter />
				<Figma />
				<Css />
				<Html />
			</div>
		</div>
	);
}

export default Clients;