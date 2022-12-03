import React from 'react';
import {Link} from 'react-router-dom'
import whatsApp from './SecondLandingImages/whatsApp.png'
import whatsApp2 from './SecondLandingImages/whatsApp2.png'
import styles from './secondlandingpage.module.css'


function SecondLandingPage() {
	return (
		<div className={styles.container}>
			<div className={styles.topWrapper}>
                <div className={styles.topText}>
                    <h1>
                        Are You A <span>Student</span> Stuck On Code With No Solutions?
                        We Can <span>Help!</span>
                    </h1>
                    <p>
                        DevAsk is a user friendly app that provides instant answers to all of your coding questions at your fingertips. Coding doesn’t need to be hard, sign up for DevAsk and find solutions today!
                    </p>
                    <Link to='/sign-up'>
                    <button type='button'>Sign Up</button>
                    </Link>
                </div>
                <div className={styles.img}>
                <img src={whatsApp} alt="whatsappImage"/>
                </div>
                
            </div>
            <div className={styles.bottomWrapper}>
                <div className={styles.bottomText}>
                    <h1>
                        DevAsk Provides Fast <span>Solutions</span> Anytime, Anywhere.
                    </h1>
                    <p>
                        Try DevAsk for free and recieve $5 worth of tokens that can be used to ask up to 10 questions. Want to make a few extra coins? Become a premium subscriber for as little $3/month and get rewarded for providing solutions!
                    </p>
                </div>
                <div className={styles.img2}>
                <img src={whatsApp2} alt="whatsappImage2" />
                </div>
            </div>
		</div>
	);
}

export default SecondLandingPage;