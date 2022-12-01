import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.css';

function AuthModal({ text }) {
	return (
		<div className={styles.modal}>
			<p>{text}</p>
		</div>
	);
}

export default AuthModal;
AuthModal.propTypes = {
	text: PropTypes.string.isRequired,
};
