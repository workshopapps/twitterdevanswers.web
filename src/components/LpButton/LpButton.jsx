import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './lpButton.module.css';

function Button({ text, path }) {
	return (
		<Link className={`${styles.btn}`} to={`/${path}`}>
			{text}
		</Link>
	);
}

export default Button;

Button.propTypes = {
	text: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};
