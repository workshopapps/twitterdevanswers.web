import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserBlogReview.module.css';
import rightWay from '../../assets/blog-images/rightWay.svg';
import userOpenAI from '../../assets/blog-images/userOpenAI.svg';

function UserBlogReview() {
	return (
		<div className={styles.userblog}>
			<nav className={styles.usernav}>
				<h4>Admin Dashboard</h4>
				<img src={rightWay} alt="rightWay" />
				<Link to="/blog-page-review">
					<h4>Blog</h4>
				</Link>
				<img src={rightWay} alt="rightWay" />
				<h4 className={styles.userreview}>User blog review</h4>
			</nav>

			<h1>Just out of the Box, ChatGPT Causing Waves of Talk, Concern</h1>

			<p className={styles.userAuthor}>
				By Ayodele Emmanuel <span>Submitted: Dec 8th, 2022 10:56 AM</span>
			</p>

			<p className={styles.usertexttag}>Network and Security</p>

      <div  className={styles.UsetTextContent}>

			<div className={styles.userOpen}>
				<img src={userOpenAI} alt="openAI" />
				<p>
					ChatGPT, the newest shiny object in the conversational AI sector,
					already has attracted more than 1 million people to its sign-in page,
					but it also brings some concerns such as security
				</p>
				<p>
					Even though the technology is officially only eight days public,
					ChatGPT already has attracted around 1 million people to its sign-in
					page and has quickly become the newest shiny object in the
					conversational AI sector. This new smarty-pants chatbot, ostensibly a
					major step forward in the genre, uses a natural-language model created
					with the capability of having an actual intelligent conversation with
					the user. It also purports to offer big-picture thinking in providing
					answers to general questions by users and solution options for
					software developers.
				</p>

				<p>
					For years, AI chatbots have been limited in their responses, only
					being able to perform specific short-term tasks. ChatGPT, developed by
					OpenAI, is as horizontal as they come; it is said to be capable of
					telling jokes (the quality of which is apparently all over the board),
					composing code, and helping write college-level essays, marketing
					copy, and personal blogs. Usage is currently open to the public free
					of charge since the chatbot is in its research and feedback-collection
					phase, but this isn’t expected to be a lengthy time window.
				</p>
			</div>

			<div className={styles.TextCode}>
				<h3>Text Completion, Code Completion</h3>
				<p>
					ChatGPT does text completion, code completion, image generation,
					embeddings, and fine-tuning for training AI models. So what exactly
					does something like this mean for the enterprise world, and by
					extension, the world at large? How trustworthy is it? Of course, it’s
					too soon to know very much, but there are some folks who do have some
					insight.
				</p>
				<p>
					For example, after playing around with the tool, Fiddler AI CEO
					Krishna Gade summarized in a recent LinkedIn post that it is quite
					apparent there is nov explanation as to how ChatGPT arrives at its
					results.
				</p>
				<p>
					“I asked ChatGPT to write a poem on Explainable AI in John Keats’
					style and here is what I got,” Gade wrote. “The irony of it is that I
					can’t explain how ChatGPT arrived at this result. While there is much
					excitement about Generative AI, there is a growing sense that it would
					lead to black box models that we can’t see, control, or explain and
					therefore become a huge blind spot of trust, ethics, and
					accountability. Already the likes of Stackoverflow have banned ChatGPT
					posts. This is a warning call for our entire industry!”
				</p>
			</div>

			<div className={styles.Client}>
				<h3>Client-Facing Roles</h3>
				<p>
					Chatbots in client-facing roles have mostly been used for conversation
					intelligence or in contact centers for basic customer issues,
					replacing the need for self-help websites or FAQs, said Parth
					Mukherjee, global VP of product marketing Mindtickle.
				</p>
				<p>
					“The only thing that is going to get much better with ChatGPT is the
					ability to find answers to basic questions,” Mukherjee said. “What it
					won’t solve is interactions dealing with the customer experience,
					which requires finesse, sentiment, and knowledge of the human
					experience; and that’s where humans will still hold the upper hand.”
				</p>
				<p>
					“ChatGPT does potentially put some jobs that are based on writing
					content, such as user manuals and website content for user help, at
					risk. This type of work will likely fade away in the next few years
					due to AI automation, but the things that require more human
					intelligence, such as sales, will still be around since you can’t
					automate it completely.”
				</p>
			</div>

			<div className={styles.Supplemental}>
				<h3>Supplemental Tool</h3>
				<p>
					Matt Psencik, Director of Endpoint Security at cybersecurity
					management provider Tanium, told The New Stack that “ChatGPT should be
					used as a supplemental tool on your belt, but it’s only as good as the
					questions it’s asked, the models it was trained on — and most
					importantly — the comprehension abilities of the brain who asked the
					question in the first place.
				</p>
				<p>
					“ChatGPT is one of the first chatbots that has impressed me with its
					ability to be asked incredibly complex questions and then provide back
					an understandable reply. Is it free of bugs and perfect? No, but it
					never claimed to be, given it’s still in beta. Even once it moves to
					production, it will likely still not get everything right as all
					learning models have some flaws which poke through to individual
					answers.”
				</p>
				<p>
					David Habusha, Senior Vice President of Product Management at AI
					security platform maker Ironscales, told TNS that “it’s important to
					note that OpenAI designed the interface to refuse requests that might
					be inappropriate or harmful. One of the reasons for making this latest
					model available to the public in such an accessible way is to test and
					capture feedback (learned or direct) to improve its ability to reject
					such requests.
				</p>
        <p>Will ChatGPT require a new security approach?</p>
				<p>
					“For info- and cybersecurity, AI and machine learning are already
					required to detect AI-supported attacks that humans and traditional,
					rules- and policy-based security technologies miss. Not only will
					AI-supported attacks be too convincing, but they will also be
					extremely targeted or ephemeral for traditional approaches to work,”
					Habusha said.
				</p>
			</div>
      </div>

      <div  className={styles.BlogpostBtn}>
        <button type="button">Approve Blogpost</button>
        <button type="button">Delete Blogpost</button>
      </div>
		</div>
	);
}

export default UserBlogReview;
