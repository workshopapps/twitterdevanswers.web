import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorpage from '../../assets/error-images/errorpage.JPG';
import styles from './styles.module.css';

export default function ErrorPage() {
	const navigate = useNavigate();
	return (
		<div>
			<img src={errorpage} className={styles.error} alt="404" />
			<button
				type="button"
				onClick={() => navigate(-1)}
				style={{ margin: '10px' }}
			>
				Go Back
			</button>
			<br />
		</div>
	);
}
