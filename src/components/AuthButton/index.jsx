import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function AuthButton({ src, alt, text }) {
	return (
		<button type="button" className={styles['auth-button']}>
			<span>
				<img src={src} alt={alt} />
			</span>
			{text}
		</button>
	);
}

export default AuthButton;

AuthButton.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
