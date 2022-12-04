import React from 'react';
import styles from './styles.module.css';

export const descriptionText = [
	{
		key: 1,
		header: 'Brilliant Coding Experience',
		text: 'Debug as you code with instant reviews to code questions for optimum performance',
	},
	{
		key: 2,
		header: 'Real Time Incident Resolution',
		text: 'Fix incidents faster on  a secure collaborative platform and enhance overall dev performance',
	},
	{
		key: 3,
		header: 'Safe and Secure Platform',
		text: 'Our platform accesses, prioritizes and managies enterprise-wide cyber risk in real time.',
	},
];
const contactLogo = [
	{
		key: 1,
		src: '/assets/contact-hng-logo.svg',
	},
	{
		key: 2,
		src: '/assets/contact-ingressive-logo.svg',
	},
	{
		key: 3,
		src: '/assets/contact-devask-logo.svg',
	},
	{
		key: 4,
		src: '/assets/contact-google-logo.svg',
	},
	{
		key: 5,
		src: '/assets/contact-genesys-logo.svg',
	},
	{
		key: 6,
		src: '/assets/contact-snowflake-logo.svg',
	},
	{
		key: 7,
		src: '/assets/contact-purestorage-logo.svg',
	},
	{
		key: 8,
		src: '/assets/contact-box-logo.svg',
	},
];
function Contact() {
	return (
		<div className={styles.contact_wrap}>
			<div className={styles.contact_first_wrap}>
				<h1>Contact Us</h1>
				<span>
					Speak with a wide array of service professionals to answer your
					plethora of questions on any subject matter
				</span>
			</div>
			<div className={styles.contact_form_container}>
				<div className={styles.contactus_form_wrap}>
					<div className={styles.contact_text_wrap}>
						{descriptionText.map((item) => (
							<div className={styles.contactus_form_wrap1} key={item.key}>
								<h3>{item.header}</h3>
								<p>{item.text}</p>
							</div>
						))}
					</div>
					<hr />
					<div className={styles.contact_team_wrap}>
						<h3>Teams that excel with DevAsk</h3>
						<div className={styles.contact_logo_images}>
							{contactLogo.map((item) => (
								<img key={item.key} src={item.src} alt="img" />
							))}
						</div>
					</div>
				</div>
				<ContactUsForm />
			</div>

		</div>
	);
}
export default Contact;

export function ContactUsForm() {
	
	return (
		<form className={styles.form_wrap}>
			<h2>Talk to an Expert</h2>
			<input
				name="firstName"
				type="text"
				className={styles.contact_name_input}
				placeholder="First Name *"
			/>
			<input
				name="lastName"
				type="text"
				className={styles.contact_name_input}
				placeholder="Last Name *"
			/>
			<input
				name="companyName"
				type="text"
				className={styles.contact_name_input}
				placeholder="Company Name *"
			/>
			<input
				name="businessName"
				type="text"
				className={styles.contact_name_input}
				placeholder="Business Name (optional)"
			/>
			<input
				name="phoneNumber"
				type="text"
				className={styles.contact_name_input}
				placeholder="Phone Number (optional)"
			/>
			<textarea
				name="message"
				type="textarea"
				className={styles.contact_input_message}
				placeholder="Message *"
				rows="7"
				cols="50"
			/>
			<p>3000 characters remaining</p>
			<button
				id="btn__submit"
				type="submit"
				className={styles.send_message_button}
			>
				Submit
			</button>
		</form>
	);
}

export function ContactMarketing() {
	return (
		<div className={styles.contact_marketing_wrap}>
			<div>
				<img
					src="/assets/contact-marketing-img.svg"
					className={styles.contact_marketing_img}
					alt="img"
				/>
			</div>
			<div>
				<p className={styles.contact_head_text}>
					Get in touch with us at Devask
				</p>
				<span className={styles.contact_sub_text}>
					Here at Devask, we take great delight in responding to enquiries and
					reaching out to our clients. We are here to help you answer any
					questions you might have and we look forward to hear from you.
				</span>
				<br />
				<section className={styles.contact_marketing_text_wrap}>
					<span className={styles.contact_marketing_text_head}>
						What you get when asking your question
					</span>
					<ul className={styles.contact_marketing_ul}>
						<li>
							<img src="/assets/contact-user-octagon.svg" alt="img" />{' '}
							<span>Response by a qualified professional.</span>
						</li>
						<li>
							<img src="/assets/contact-sms-star.svg" alt="img" />{' '}
							<span>An Email Follow up</span>
						</li>
						<li>
							<img src="/assets/contact-clock-logo.svg" alt="img" />{' '}
							<span>Less than 24 hours response to your question.</span>
						</li>
					</ul>
					<p>
						Send us an email at{' '}
						<a
							href="mailto:devask.dev@gmail.com"
							className={styles.marketing_mail_link}
						>
							devask.dev@gmail.com
						</a>
					</p>
				</section>
			</div>
		</div>
	);
}
