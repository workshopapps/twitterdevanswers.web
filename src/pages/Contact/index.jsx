import React from 'react';
import { Link } from "react-router-dom"
import styles from './styles.module.css';
import Facebook from "../../assets/contact-images/facebook.png";
import Twitter from "../../assets/contact-images/twitter.png";
import Instagram from "../../assets/contact-images/instagram.png";


function Contact() {
	return (
		<div className={styles.Contact}>
				<div className={styles.ContactMain}>
				<section className={styles.ContactWrap}>
					<h1 className={styles.Caption}>Get In Touch With Us</h1>
					<p>If you have any complaints, questions about our product, plans and subscription, Contact Our Team. </p>
					<section className={styles.ContactButtons}>
						<aside className={styles.ContactButtonsViolet}>
							<span> Email Us </span>
							<span> shakurahack17@gmail.com </span>
						</aside>
						<aside className={styles.ContactButtonsWhite}>
						<span> Call Us </span>
							<span> +234810002034 </span>
						</aside>
					</section>
					<section>
						<Link to="/help-center"> <li>&gt; <span>Visit the Help Centre</span> </li></Link>
						<li>&gt; <span>Visit Us Personally </span>
							<span>Our Address:</span> </li>
					</section>
					<section className={styles.Socials}>
						<h4>Follow Us On Our Socials</h4>
						<p><img src={Facebook} alt="facebook" /><img src={Twitter} alt="twitter" /><img src={Instagram} alt="instagram" /></p>
					</section>
			</section>
			<section className={styles.ContactForm}>

				<form className={styles.Form}>
				<h1>Send Us a Message </h1>
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
						Send
					</button>
				</form>
			</section>
			</div>
		</div>
	);
}
export default Contact;
