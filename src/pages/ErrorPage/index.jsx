import React from 'react';
import { Link } from 'react-router-dom';
import errorpage from '../../assets/error-images/errorpage.JPG';
import navigate from '../../assets/error-images/navigate.svg';
import styles from './styles.module.css';

export default function ErrorPage() {

	return (
		<div className={styles.errorWrap}>
			<img src={errorpage} className={styles.error} alt="404" />
			<p>Oops! We couldnt find that page</p>
			<span>This page does not exist. Maybe you can find what you need here instead</span>
			<img src={navigate} className={styles.navigate} alt="404" />
			<Link to="/" className={styles.button}>
				Home
			</Link>
			
			
			
		
		</div>
	);
}
