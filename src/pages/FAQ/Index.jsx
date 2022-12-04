import React, { useState } from 'react';
import search from '../../assets/faq-images/search-normal.png';
// import arrowleft from '../../assets/arrowleft.png';
// import arrowdown from '../../assets/Vector@2x.png';
import './Style.css';
import Accordion from '../../components/accordion/Accordion';

function FAQ() {
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [setHeight, setHeightActive] = useState('0px');

	

	return (
		<div className="faq__section">
			<div className="container section__container">
				<div className="section__text_upper">
					<h3 className="faq__text">FAQ and Support</h3>
					<h2 className="faq__text_2">Have Any Questions?</h2>
					
					<div className="section__search">
						<input
							type="text"
							placeholder="search in DevAsk"
							className="input__search"
						/>
						<img className="section__search_img" src={search} alt="search" />{' '}
					</div>
				</div>
				<div className="accordion__sections_main">
				    
				    
						<div> 
						<Accordion
						label="How do I check my token balance?"
						height={setHeight}
						setheight={setHeightActive}
					>
						<p>
							Go to profile and click on “My Account”.there, you will find your
							token balance and how you can transfer it to yourcrypto wallet.
						</p>
					</Accordion>
						<Accordion
								label="What is DevAsk all about?"
								open={isOpen2}
								setopen={setIsOpen2}
								height={setHeight}
								setheight={setHeightActive}
							>
								<p>
									Go to settings and click on “Forgot Password”.there, you will
									be directed to enter your registered email address and a new
									password wil be sent to you.
								</p>
							</Accordion>
							
									<Accordion
								label="Why should i use DevAsk"
								open={isOpen3}
								setopen={setIsOpen3}
								height={setHeight}
								setheight={setHeightActive}
							>
								<p>
									Go to settings and click on “Forgot Password”.there, you will
									be directed to enter your registered email address and a new
									password wil be sent to you.
								</p>
							</Accordion>
						</div>
						
						<div> 
						<div className = 'ellipse' />
					<div
					 className="arrrowdown__image"
					/> </div>

						<div>
						<Accordion
						label="How do I retrieve my password?"
						height={setHeight}
						setheight={setHeightActive}
					>
						<p>
							Go to settings and click on “Forgot Password”.there, you will be
							directed to enter your registered email address and a new password
							wil be sent to you.
						</p>
					</Accordion> 

						
						
							<Accordion
								label="How do i become a member"
								open={isOpen3}
								setopen={setIsOpen3}
								height={setHeight}
								setheight={setHeightActive}
							>
								<p>
									Go to settings and click on “Forgot Password”.there, you will
									be directed to enter your registered email address and a new
									password wil be sent to you.
								</p>
							</Accordion>
									<Accordion
								label="How much does it cost?"
								open={isOpen3}
								setopen={setIsOpen3}
								height={setHeight}
								setheight={setHeightActive}
							>
								<p>
									Go to settings and click on “Forgot Password”.there, you will
									be directed to enter your registered email address and a new
									password wil be sent to you.
								</p>
							</Accordion>
					</div>
					
					
					

					
						
					
				</div>
			</div>
		</div>
	);
}

export default FAQ;
