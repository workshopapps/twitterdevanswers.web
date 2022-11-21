import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import UserIcon from '../../assets/user-icon.svg';
import EyeslashIcon from '../../assets/eye-slash.svg';

function Input({ label, id, type, placeholder, canBeHidden = false }) {
	return (
		<div className={styles['form-group']}>
			<label className={styles['form-label']} htmlFor={id}>
				{label}
			</label>

			<div className={styles['form-input-container']}>
				<span>
					<img src={UserIcon} alt="User icon" />
				</span>
				<input
					type={type}
					className={styles['form-input']}
					placeholder={placeholder}
					id={id}
					required
				/>
				{canBeHidden && (
					<span>
						<img src={EyeslashIcon} alt="Eye slash icon" />
					</span>
				)}
			</div>
		</div>
	);
}

export default Input;

Input.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	canBeHidden: PropTypes.bool,
};

Input.defaultProps = {
	canBeHidden: false,
};
