
import React from "react";
import {Link} from "react-router-dom"
import styles from './style.module.css';
import img from './Assets/message-question.png'
import img2 from './Assets/setting-2.png'
import img3 from './Assets/grid-3.png'
import img4 from './Assets/shield-tick.png'
import img5 from './Assets/receipt-edit.png'
import img6 from './Assets/empty-wallet.png'
import img7 from './Assets/messages-3.png'

function Help() {
    return (
        <div>
            <div className={styles.helpheader}>
                <h2>Help Center</h2>
                <p>Learn how to use DevAsk and find answers to common questions.</p>
            </div>
            <div className={styles.helpbody}>
                <h3>Welcome to DevAsk Help Center!</h3>
                <h4>Select a topic</h4>
                <p>Select a topic that best describes your issue</p>
            </div>
            <div className={styles.grid}>

                <Link to="/frequently-asked-questions" className={styles.btn}> <img src={img} alt="" />Asking & Answering <br />a Question</Link>
                <Link to="/settings" className={styles.btn}><img src={img2} alt="" />Accout settings</Link>
                <Link to="/dashboard" className={styles.btn}><img src={img3} alt="" />Dashboard</Link>
                <Link to='terms-of-use' className={styles.btn}><img src={img4} alt="" />Safety and security</Link>
                <aLink to='terms-of-use' className={styles.btn}><img src={img5} alt="" />Rules and policy</aLink>
                <Link to="/wallet" className={styles.btn}><img src={img6} alt="" />Wallet</Link>

            </div>
            <div className={styles.lowerbody}>
                <h4>Frequently Asked Questions on DevAsk</h4>
                <ul className={styles.lowerul}>
                    <li><Link to="/frequently-asked-questions">How do I ask or answer homework questions?</Link></li>
                    <li><Link to="/frequently-asked-questions">How much research effort is expected of DevAsk users?</Link></li>
                    <li><Link to="/frequently-asked-questions">Why is “can someone help me” not an actual question?</Link></li>
                    <li><Link to="/frequently-asked-questions">What is the proper way to approach DevAsk as <br />somone completely new to programming?</Link></li>
                    <li><Link to="/frequently-asked-questions">Something in my website or projeoct doesn`t <br />work, canI just paste a link to it?</Link></li>
                    <li><Link to="/frequently-asked-questions">Is it okay to search for code optimizationm help?</Link></li>
                    <li><Link to="/frequently-asked-questions"><span>See also</span> FAQ index</Link></li>
                </ul>
            </div>
            <div className={styles.lowerdivhelp}>
                <div className={styles.lowerdivsupport}>
                    <img src={img7} alt="" className={styles.lowerimg}/>
                    <h5>Still need help?</h5>
                    </div>
                <p>We`re here for you! if you haven`t found a <br />solution after exploring our help articles,<br /> you can get in touch with our support team.</p>
                <button className={styles.helpsupport} type="button">Get support</button>
            </div>
        </div>
    )
}


export default Help;