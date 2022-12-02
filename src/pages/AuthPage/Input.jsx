/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Input({
	name,
	label,
	id,
	type,
	placeholder,
	value,
	handleInputChange,
	error,
}) {
	const errorStyles = error ? 'error' : '';

	return (
		<div className={`${styles.input} ${errorStyles}`}>
			<label htmlFor={name}>
				<div className="">{label}</div>
			</label>
			<input
				className={styles.inputField}
				name={name}
				id={id}
				type={type}
				onChange={handleInputChange}
				value={value}
				placeholder={placeholder}
			/>
			<span className={styles.errorMsg}>{error}</span>
		</div>
	);
}

export default Input;

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	error: PropTypes.string,
};

Input.defaultProps = {
	error: '',
};
