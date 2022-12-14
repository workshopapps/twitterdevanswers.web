import React from 'react';
import styles from './styles.module.css';

function Contact() {
	return (
		<div className={styles.contact_wrap}>
			<ContactWrap />
			<ContactUsForm />
		</div>
	);
}
export default Contact;
export function ContactWrap() {
	return (
		<div className={styles.contact_first_wrap}>
			<div className={styles.contact_first_sub_wrap}>
				<p>Contact Us</p>
				<span>
					Speak with a wide array of service professionals to answer your
					plethora of questions on any subject matter
				</span>

				<img src="/assets/contact-email-logo.svg" alt="email" />
			</div>
		</div>
	);
}
export function ContactUsForm() {

	return (
		<div className={styles.form_wrap}>
			<form className={styles.form}>
				<label htmlFor="helpCategories">
					<span>What can we help you with</span>
				<select name="helpCategories" id="" className={styles.contact_name_input}>
					<option value="">Please Select a topic</option>
					<option value="">NFT &apos; s</option>
					<option value="">Tech</option>
					<option value="">Bugs</option>
					<option value="">Programming</option>
					<option value="">Product Design</option>
					<option value="">Backend</option>
					<option value="">Frontend</option>


				</select>
				</label>
				
				<label htmlFor="emailAddress"> 
				<span>Email Address</span>
				<input
					name="emailAddress"
					type="text"
					className={styles.contact_name_input}
					placeholder="Email Address"
		
				/></label>
			
				<label htmlFor="message">
					<span>Describe your issues</span>
				<textarea
					name="message"
					type="textarea"
					className={styles.contact_input_message}
					placeholder="Message"
	
				/></label>
				
				<span>Enter at least 30 characters</span>
				<button
					id="btn__submit"
					type="submit"
					className={styles.send_message_button}
	
				>
					Submit
				</button>
			</form>
		</div>
	);
}
