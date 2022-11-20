import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Button({ label }) {
	return (
		<button type="submit" className={styles['form-button']}>
			{label}
		</button>
	);
}

export default Button;

Button.propTypes = {
	label: PropTypes.string.isRequired,
};
