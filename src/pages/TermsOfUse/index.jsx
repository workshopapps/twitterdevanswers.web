import React from 'react';
import styles from './styles.module.css';

function TermsOfUse() {
	return (
		<div className={styles.TermsOfUseBody}>
			
				<h1 className={styles.Heading}>Terms of Use</h1>
				<p className={styles.Gap}>
					The terms and conditions set forth the conditions, clauses, terms and requirements related to using the platform.
				</p>
				
				<section className={styles.RequirementsSection}>
				<h1 className={styles.subHeader} >Requirements:</h1>
					<p>
					You must be at least 14 years old to access or use the platform, including without limitation to complete a DevAsk account registration. By accessing or using the Services or the Network in any manner, you represent and warrant that you are at least 14 years of age. If you are under 14 years old, you may not, under any circumstances or for any reason, access or use the Services or Network in any manner, and may not provide any personal information to or on the Services or Network (including, for example, a name, address, telephone number or email address).

					</p>
				</section>
				<br/>
				<section className={styles.RequirementsSection}>
					<h1 className={styles.subHeader} >Rules:</h1>
					<p className={styles.list}>
						&#x2022; Avoid the use of discriminatory or abusive languages as such could lead to immediate deactivation of your account.
					</p>
					<p  className={styles.list}>
						&#x2022; Any form of fraud or illegal activities are frown upon in the community and will lead to immediate deactivation if found guilty.
					</p>

					
				</section>
				<section  className={styles.RequirementsSection}>
					<h1 className={styles.subHeader} >Account Deactivation:</h1>
					<p>
						Disregard for any of the stated terms will lead to deactivation. Account reactivation can be processed on contact with our customer care depending on the severity of offence.
					</p>
				</section>
				<section className={styles.RequirementsSection}>
					<h1 className={styles.subHeader} >Copyright Information:</h1>
					<p>
						If you believe that content residing or accessible on the Network infringes a copyright, please send a notice of copyright infringement to any of our customer care agents.

					</p>
				</section>
		</div>
	);
}

export default TermsOfUse;
