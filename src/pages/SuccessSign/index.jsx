import React from 'react';
import Partyimages from '../../assets/auth-images/Partyimage.svg';
import styles from './SuccessSign.module.css'

function SuccessSign() {
	return (
		<div className={styles.SuccessLayout}>
            <main className={styles.SuccessMain}>
			<img src={Partyimages} alt="Partyimages" />
			<p>
				Yay... You have successfully signed up to DevAsk! And have been rewarded
				with 10Tokens.
			</p>
            <button type='button'>Proceed to dashboard</button>
            </main>
		</div>
	);
}

export default SuccessSign;
