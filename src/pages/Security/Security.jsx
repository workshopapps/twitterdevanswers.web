import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Security.module.css";
import account from "../../assets/security-images/account.png";
import security from "../../assets/security-images/security.png";
import notification from "../../assets/security-images/notification.png";
import appearance from "../../assets/security-images/appearance.png"

function Security() {
    const [getEmail, setGetEmail] = useState("email");
    const [postEmail, setPostEmail] = useState("email");
    const [OTP, setOTP] = useState("OTP");
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [response, setResponse] = useState("")



    function toggleForm(){
        setIsVisible(!isVisible);
    }
    function revealMail(){
        if (getEmail === "email" || getEmail === ""){
            setIsClicked(false)
        } else{
            setIsClicked(!isClicked);
        }

    }
        const handleSubmit = async (e) => {
            e.preventDefault();
            const emailAddress = JSON.stringify(getEmail);
            try {
                const { data } = await axios.put('https://api.devask.hng.tech/auth/setup-mfa', {
                    "email": emailAddress
                });
                if(data){
                    setResponse("Email Sent");
                };
            } catch (error) {
                setResponse("Could not send request. Please try again!");
            }
        }
        
            const handleSubmitOTP = async (e) => {
                e.preventDefault();
                const emailAddress = JSON.stringify(postEmail);
                const myOTP = JSON.stringify(OTP);
                try {
                    const { data } = await axios.post('https://api.devask.hng.tech/auth/validate-mfa', {
                            email: emailAddress,
                            mfa_hash: myOTP
                    });
                    if(data){
                        setResponse("Validation Successful");
                    }; 
                } catch (error) {
                    setResponse("Validation Unsuccessful. Please try again!");
    
                } 
            }


    return(
        <div className={styles.Security}>
            <main className={styles.MainSection}>
            <section className={styles.LeftSection}>
                <h1 className={styles.Header1}>Settings</h1>
                <div className={styles.Selectors}>
                <div className={styles.AccountSelector}>
                    <section>
                        <img src={account} alt="account" />
                    </section>
                    <section className={styles.TextSection}>
                        <Link to="/settings">
                        <h1> Account</h1>
                        </Link>
                        <p>You can manage your account settigs at any time. Update your account details , change your username etc</p>
                        
                    </section>
                </div>
                <div className={styles.SecuritySelector}>
                <section>
                        <img src={security} alt="security" />
                    </section>
                    <section className={styles.TextSection}>
                    <Link to="/security-settings">
                        <h1> Security</h1>
                    </Link>
                        <p>Make the most of your activities, the security features protect you from malware and dangerous sites</p>
                    </section>
                </div>
                <div className={styles.NotificationSelector}>
                    <section>
                        <img src={notification} alt="notification" />
                    </section>
                    <section className={styles.TextSection}>
                    <Link to="/notification-page">
                        <h1> Notification</h1>
                    </Link>
                        <p>Notification are updates about your activity . You can go to your notification settings to change what you will be notified about and how you are notified.</p>
                    </section>
                </div>
                <div className={styles.AppearanceSelector}>
                    <section>
                        <img src={appearance} alt="notificaton" />
                    </section>
                    <section className={styles.TextSection}>
                    <Link to="/#">
                        <h1> Appearance</h1>
                        <p>Choose your viewing options, select light to display light mode, select dark to display dark mode</p>
                    </Link>
                    </section>
                </div>
                </div>
            </section>
            <section className={styles.RightSection}>
                <div className={styles.Header2}>
                    <h1>Security</h1>
                    <p>Update security settings and enjoy your experience better</p>
                </div>
                <div className={styles.TwoFactorAuth}>
                    <section>
                        <h1>Two-Factor Authentication</h1>
                        <p>Enabling Two-factor Authentication help protect your account better by sending you OTP on each login</p>
                    </section>
                    <button type="submit" className={styles.handleEnable} onClick={toggleForm}>Enable</button>
                </div>
                {isVisible && (
                <div className={styles.TwoFactorAuthForms} id="two-factor-forms">
                    <p>Please fill the required fields</p>
                <form className={styles.GetTwoAuthForm} onSubmit={handleSubmit} method="POST">
                        <input type="email" name="email" required value={getEmail} onChange={(e) => setGetEmail(e.target.value)} />
                        <button type="submit" onClick={revealMail}>Get Code</button>
                    </form>
                    {isClicked && <p>Please Check your email and enter the OTP</p>}
                    <form className={styles.GetTwoAuthForm} onSubmit={handleSubmitOTP} method="POST">
                        <input type="email" name="email" required value={postEmail} onChange={(e) => setPostEmail(e.target.value)} />
                        <input type="text" name="OTP" required value={OTP} onChange={(e) => setOTP(e.target.value)} />
                        <button type="submit">Send Code</button>
                    </form>
                            <p>{response}</p>
                </div>
                )}
                <div className={styles.VerifyEmail}>
                    <section>
                        <h1>Verify E-mail</h1>
                        <p>Confirmation email has been sent to the e-mail address provided, check mail to confirm</p>
                    </section>
                    <button type="submit"> Verify</button>
                </div>
                <form className={styles.SecurityForm}>
                    <section className={styles.WalletSection}>
                        <h1>Wallet Address</h1>
                        <input type="text" name="wallet-address" id="wallet-address" required placeholder="mp4FCapeT35t9phtnfTMcVnTeMVfovPpwd" />
                    </section>
                    <section className={styles.CurrentPassword}>
                        <h1>Change Password</h1>
                        <p>Current Password</p>                
                        <input type="password" name="current-password" id="current-password" required placeholder="********"/>
                        </section> 
                    <section className={styles.NewPassword}>
                        <p>New Password</p>
                        <input type="password" name="new-password" id="new-password" required placeholder="********"/>
                    </section>
                    <section className={styles.ConfirmPassword}>
                        <p>Confirm Password</p>
                        <input type="password" name="confirm-password" id="confirm-password" required placeholder="********"/>
                    </section>
                    <section className={styles.ButtonSection}>
                    <button className={styles.SaveButton} type="submit">Save changes</button>
                    <button className={styles.DiscardButton} type="submit">Discard changes</button>
                    </section>
                </form>

            </section>
            </main>
        </div>
    )
}

export default Security;
