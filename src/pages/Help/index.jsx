import React ,{ useState } from 'react';
import styles from './style.module.css';

function Help() {

	const[nextPath]=useState("Asking & Answering Question > ")
	return (
		<div className={styles.help_center_page}>
			<div className={styles.help_center_contents}>
				<div className={styles.directory}>
					<span>Help Center  {' >  '} {nextPath}</span>
				</div>
				<div className={styles.content}>
					<div className={styles.list}>
						<ul className={styles.list_container}>
							<li><a className={styles.link}    data-Expanded='true' href='help-center'>Asking & Answering a Question</a></li>
							<li><a className={styles.link} href='settings'>Account Settings</a></li>
							<li><a className={styles.link} href='dashboard'>DashBoard</a></li>
							<li><a className={styles.link} href='settings'>Safety & Security</a></li>
							<li><a className={styles.link} href='rules'>Rules and Policy</a></li>
							<li><a className={styles.link} href='wallet'>Wallet</a></li>
						</ul>
					</div>
					<div className={styles.ask_answer_questions}>
						<div className={styles.helpheader}>
							<div className={styles.headercontainer}>
								<h2 className={styles.articlehead}>Asking & Answering a Question</h2>
							</div>
							<article className={styles.article}>
								<p>DevAsk is a Question & Answer platform for professional and enthusiast programmers. We are committed to helping you ask your question the right way and contribute answers rightly.</p>
							</article>
							<article className={styles.article}>
								<h3>Why is “can someone help me” not an actual question?</h3>
								<p>Because DevAsk is a question & answer site, you may think that you have asked a reasonable, answerable question, but you really haven&apos;t.</p>
								<p>First, a bit of background. This site is intended to create a knowledge repository of solutions to programming problems. This means that a primary characteristic of a good question is that it is likely to be searched by someone else. &apos;Will you help me do X? &quot; doesn&apos;t do that. More than likely, no one will ever be trying to do, and searching for, the exact same thing as you in exactly the same way. On the other hand, questions like: &quot;How do I convert a string to a number?&quot; are searched very often.</p>
								<p>Second, for the sake of argument, let&apos;s say we don&apos;t care if it&apos;s useful to someone else, that we are only here for you (we aren&apos;t). It&apos;s still impossible to answer. Imagine what an answer might look like. It would essentially need to be the entire code base. We can appreciate that you only want &quot;help&quot;, but with the question you&apos;ve asked, we can&apos;t provide it. Compare that to the above question, which has a clear definable answer (or even multiple answers).</p>
								<p>So, help us help you. When you write a question, make sure to actually ask a question. Answerable questions don&apos;t ask how to implement a feature, they ask how to accomplish a programming task (among other things).</p>
								<p>The good news is, you are trying to learn. So work on the question, edit it into something answerable, or at least make sure your next question is a good one. We&apos;ll be glad to help!</p>

							</article>
							<article className={styles.article}>
									<h3>What is the proper way to approach DevAsk as a newbie in programming?</h3>
									<p> A well written and refined question also shows that you care about the site and community, which goes a long way toward receiving a good response.</p>
									<p>
										We don&apos;t frown on beginner questions, we just value our time and want to spend it helping people that will actually get better at what they do as a result. If you can demonstrate that in your question, you&apos;ll likely have a good experience.
									</p>
									<p>The advice that you see here is good, but it&apos;s not a substitute for common sense. If you worry that your question would likely be inappropriate, keep talking to the duck until you figure it out, or come up with a question that you feel would be appropriate.</p>
							</article>
							<article className={styles.article}>
								<h3>Is it okay to ask for code optimisation help?</h3>
								<p>Before you post your question, consider what it is you&apos;re asking.</p>
								<p>If you&apos;ve actually profiled the code, have specific snippets so that everyone can run the same code to see its performance, and you have this library publicly published somewhere, like GitHub, Bitbucket, or another public facing code repository, then asking it on Code Review is acceptable.</p>
								<p>If you&apos;re just starting the code but have profiled an exact snippet that exhibits the aberrant performance, then asking it on Stack Overflow is acceptable.</p>
								<p>Per the above, including the results from your profiler of choice with identified bottlenecks would go a long way towards keeping it on topic on either site.</p>
								<p>However, if you&apos;re looking for someone to help you optimize the code without having done any of the due diligence mentioned prior, reconsider posting your question. It is important that you demonstrate why you believe that your piece of code is not performant, as well as provide as much evidence as you can to back it up.</p>
							</article>
					
						</div>
						<div className={styles.lowerdivhelp}>
							<div className={styles.lowerdivsupport}>
								<h3>Still have questions?</h3>
							</div>
							<button className={styles.helpsupport} type="button">
								Contact Support
							</button>
						</div>
					</div>		
				</div>
				
				
			</div>
		</div>
	);
}

export default Help;
