import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';
import Input from '../../components/AuthFormInput';
import Button from '../../components/AuthFormButton';
import AuthButton from '../../components/AuthButton';

function AuthPage({
	inputs,
	authOptions,
	pageTitle,
	authAltText,
	inputCheckbox,
	buttonLabel,
	children,
	onChange,
	onSubmit,
	errors,
}) {
	return (
		<main className={styles['auth-page']}>
			<section className={styles['auth-container']}>
				<div className={styles['auth-content']}>
					<h2 className={styles['auth-title']}>{pageTitle}</h2>

					<div className={styles['auth-options']}>
						{authOptions.map((option) => (
							<AuthButton
								src={option.src}
								alt={option.alt}
								text={option.text}
								key={option.alt}
							/>
						))}
					</div>

					<h3 className={styles['auth-alt-option']}>{authAltText}</h3>

					<form onSubmit={onSubmit} className={styles['auth-form']}>
						{inputs.map((input) => (
							<Input
								label={input.label}
								id={input.id}
								type={input.type}
								placeholder={input.placeholder}
								canBeHidden={input.canBeHidden}
								key={input.id}
								onChange={onChange}
								name={input.name}
								error={errors ? errors[input.name] : ''}
							/>
						))}

						{inputCheckbox}

						<Button label={buttonLabel} errors={errors} />
					</form>
					{children}
				</div>
			</section>
		</main>
	);
}

export default AuthPage;

AuthPage.propTypes = {
	inputs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	authOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	errors: PropTypes.objectOf(PropTypes.string),
	pageTitle: PropTypes.string.isRequired,
	authAltText: PropTypes.string.isRequired,
	inputCheckbox: PropTypes.node.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

AuthPage.defaultProps = {
	errors: null,
};
