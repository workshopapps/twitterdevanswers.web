import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import UserIcon from '../../assets/user-icon.svg';
import EyeslashIcon from '../../assets/eye-slash.svg';

function Input({
	label,
	id,
	type,
	name,
	placeholder,
	onChange,
	error,
	canBeHidden = false,
}) {
	const errorStyles = error ? styles.error : '';

	return (
		<div className={styles['form-group']}>
			<label className={styles['form-label']} htmlFor={id}>
				{label}
			</label>

			<div className={`${styles['form-input-container']} ${errorStyles}`}>
				<span>
					<img src={UserIcon} alt="User icon" />
				</span>
				<input
					type={type}
					name={name}
					className={`${styles['form-input']} ${errorStyles}`}
					placeholder={placeholder}
					id={id}
					onChange={(event) => onChange(event)}
				/>
				{canBeHidden && (
					<span>
						<img src={EyeslashIcon} alt="Eye slash icon" />
					</span>
				)}
			</div>
			<span className={styles['error-msg']}>{error}</span>
		</div>
	);
}

export default Input;

Input.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	canBeHidden: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
};

Input.defaultProps = {
	canBeHidden: false,
	error: '',
};
