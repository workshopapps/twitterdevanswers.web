import React from 'react';
import { Link } from 'react-router-dom';
import styles from './hero3.module.css';

function Hero3() {
	return (
		<div className={styles.hero}>
                <h1>Save Time Troubleshooting a Line of Code</h1>
                <p>
                We connect you with other front end developers to help debug that line of code in the shortest time possible.
                </p>
                <Link  to="/sign-up">
                    <button type='button'>
                        Get Started
                    </button>
                </Link>
                <div className={styles.numbers}>
                    <div className={styles.number}>
                        <div>500+</div>
                        <span>
                            Active <br /> members
                        </span>
					</div>
                    <div className={styles.number}>
						<div>200+</div>
						<span>
							Daily <br /> questions
						</span>
					</div>
                    <div className={styles.number}>
						<div>400+</div>
						<span>
							Possible <br /> answers
						</span>
					</div>
                </div>
            </div>
	);
}

export default Hero3;