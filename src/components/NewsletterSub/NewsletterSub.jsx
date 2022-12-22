import React from 'react';
import styles from './newsletterSub.module.css';

function NewsletterSub() {
	return (
		<div className={styles.newsletter}>
			<h3>Subscribe To Our News Letter. </h3>
			<p>Stay updated for more information, latest news and blogs from DevAsk.</p>
			<div className={styles.subscribe}>
				<input type="text" placeholder="Please enter your email address" />
				<div className={styles.btn}>
					<button type="button">Subscribe</button>
				</div>
			</div>
		</div>
	);
}

export default NewsletterSub;
