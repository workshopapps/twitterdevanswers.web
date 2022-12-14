import React, { useState } from 'react';
import Arrow from "../../assets/helppage-images/arrow.png";
import Question from "../../assets/helppage-images/question.png";
import Safety from "../../assets/helppage-images/safety.png";
import Rules from "../../assets/helppage-images/rules.png";
import More from "../../assets/helppage-images/more.png";
import styles from './style.module.css';

function Help() {
	const [question1, setQuestion1] = useState(true);
	const [question2, setQuestion2] = useState(true);
	const [question3, setQuestion3] = useState(false);
	const [question4, setQuestion4] = useState(false);
	const [question5, setQuestion5] = useState(false);
	const [question6, setQuestion6] = useState(false);
	
	function hideQuestion1(){
		setQuestion1(!question1);
	}
	function hideQuestion2(){
		setQuestion2(!question2);
	}
	function hideQuestion3(){
		setQuestion3(!question3);
	}
	function hideQuestion4(){
		setQuestion4(!question4);
	}
	function hideQuestion5(){
		setQuestion5(!question5);
	}
	function hideQuestion6(){
		setQuestion6(!question6);
	}


	return (
		<div className={styles.Help}>
			<main className={styles.MainSection}>
				<section className={styles.HelpTitle}>
					<h1>Help Centre</h1>
					<p>Learn how to use DevAsk and find answers to common questions.</p>
				</section>
				<section className={styles.HelpBoxes}>
					<div>
						<img src={Question} alt="question" />
						<p>Asking & Answering a Question</p>
					</div>
					<div>
						<img src={Safety} alt="safety" />
						<p>Safety & Security</p>
					</div>
					<div>
						<img src={Rules} alt="rules" />
						<p>Rules and Policy</p>
					</div>
				</section>
				<section className={styles.QASection}>
					<div>
						<aside>
						<button type='submit' onClick={hideQuestion1}>How do I check my token balance? &#9660;</button>
						
						{
							question1 &&
							
							<p><hr />Go to profile and click on “My Account”. There you will find your token balance and how you can transfer it to your crypto wallet.</p>

						}
						</aside>
						<aside>
						
					<button type='submit' onClick={hideQuestion3}>What is DevAsk all about? &#9660;</button>
					{
							question3 &&
							<p><hr />Devask is a platform that provides answers to tech questions within the shortest possible time. We have tons of users who are poised to answer your questions</p>

					}
					
					</aside>
					<aside>
					<button type='submit'  onClick={hideQuestion5}>Why should I use DevAsk? &#9660;</button>
					{
						question5 && 
						<p><hr />Devask is the one friend you have when you get stuck on any tech issue. Just ask and answers will be given you.</p>

					}
					
					</aside>
					</div>
					<p className={styles.Arrow}><img src={Arrow} alt="arrow" /></p>
					<div>
						<aside>
						<button type='submit'  onClick={hideQuestion2}>How do I retrieve my password?   &#9660;</button>
					{
						question2 && 
						<p><hr />Go to settings, click on “Forget Password”. There, you will be directed to enter your registered email and a new password will be sent to you.</p>

					}
						
						</aside>
						<aside>
					<button type='submit'  onClick={hideQuestion4}>How do I become a member? &#9660;</button>
					{
						question4 &&
						<p><hr />Sign up and verify your email and token</p>

					}
					</aside>
					<aside>
					
					<button type='submit' onClick={hideQuestion6}>How much does it cost to use DevAsk? &#9660;</button>
					{
						question6 && 
						<p><hr />Check the Pricing page for details of payment</p>

					}
					</aside>
					</div>
				</section>
				
			</main>
			<section className={styles.HelpExtra}>
					 <div><img src={More} alt="more help" /> <h1>Still need help?</h1></div>
					<p>We’re here for you! if you haven’t found a solution after exploring our help articles, you can get in touch with our support team.</p>
					<button type='submit'>Contact Us</button>
				</section>
		</div>
	);
}

export default Help;
