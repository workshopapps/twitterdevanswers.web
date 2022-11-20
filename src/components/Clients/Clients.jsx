import React from 'react';

import { ReactComponent as StackOverflow } from '../../assets/stackoverflow-logo.svg';
import { ReactComponent as Twitter } from '../../assets/twitter-logo.svg';
import { ReactComponent as Figma } from '../../assets/figma-logo.svg';
import { ReactComponent as Css } from '../../assets/css-logo.svg';
import { ReactComponent as Html } from '../../assets/html-logo.svg';

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
