import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Security.module.css";
import account from "../../assets/security-images/account.png";
import security from "../../assets/security-images/security.png";
import notification from "../../assets/security-images/notification.png";
import appearance from "../../assets/security-images/appearance.png"

function Security() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

        const handleEnable = () => {
                setIsEnabled(!isEnabled);  
        }
        const handleIsVerified = () => {
            setIsVerified(!isVerified);
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
                    <button type="submit" onClick={handleEnable} > { isEnabled ? "Disable": "Enable" }</button>
                </div>
                <div className={styles.VerifyEmail}>
                    <section>
                        <h1>Verify E-mail</h1>
                        <p>Confirmation email has been sent to the e-mail address provided, check mail to confirm</p>
                    </section>
                    <button type="submit" onClick={handleIsVerified} > { isVerified ? "Verified": "Verify" }</button>
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