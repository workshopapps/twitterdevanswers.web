import React from 'react';
import PropTypes from 'prop-types';
import styles from './hiwText.module.css';

function HiwText({ content }) {
	return (
		<div className={styles.text}>
			<h3>{content.heading}</h3>
			<p>{content.body}</p>
		</div>
	);
}

export default HiwText;

HiwText.propTypes = {
	content: PropTypes.shape({
		heading: PropTypes.string,
		body: PropTypes.string,
	}).isRequired,
};