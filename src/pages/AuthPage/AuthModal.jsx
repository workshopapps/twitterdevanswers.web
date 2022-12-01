import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

function AuthModal({ text }) {
	return (
		<span className={styles.modal}>
			<p>{text}</p>
		</span>
	);
}

export default AuthModal;
AuthModal.propTypes = {
	text: PropTypes.string.isRequired,
};
