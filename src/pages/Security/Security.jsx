import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import qrcode from "qrcode";
import styles from "./Security.module.css";

function Security() {
    const [getEmail, setGetEmail] = useState("email");
    const [postEmail, setPostEmail] = useState("email");
    const [OTP, setOTP] = useState("Token");
    const [isVisible, setIsVisible] = useState(false);
    const [response, setResponse] = useState("");
    const [mydata, setMyData] = useState("");
    const [code, setCode] = useState(false);
    const [button, setButton] = useState(false);
    const [buttons, setButtons] = useState(false);
    const [verifyToken, setVerifyToken] = useState(false);
    const [oldPassword, setOldPassword] = useState("**************");
    const [newPassword, setNewPassword] = useState("**************");
    const [confirmPassword, setConfirmPassword] = useState("**************");
    const [hideReset, setHideReset] = useState(false);


    function toggleForm(){
        setIsVisible(!isVisible);
        setVerifyToken(false)
        setButton(!button)
        
    }
    function toggleButtons (){
        setButtons(!buttons)
    }
    function showVerifyForm(){
        setVerifyToken(!verifyToken)
        setButton(false)
        setCode(false)
        setIsVisible(false)
    }
    function revealCode(){
        if (mydata){
            setCode(true);
        }

    }
    function hideResetForm(){
        setHideReset(!hideReset);
    }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const { data } = await axios.put('https://api.devask.hng.tech/auth/setup-mfa', {
                    "email": getEmail
                });
                     qrcode.toDataURL(data.code, {with: 250}, (error, newdata) => {
                        if (error) throw error
                        if (newdata) {
                            setMyData(newdata);
                        }  
                    })
                if(data){
                    setResponse(data.message);
                };
                
            } catch (error) {
                setResponse("Could not send request. Please try again!");
            }
        }
             const handleSubmitOTP = async (e) => {
                e.preventDefault();
                try {
                    const { data } = await axios.post('https://api.devask.hng.tech/auth/validate-mfa', {
                            "email": postEmail,
                            "mfa_hash": OTP
                    });
                    if(data){
                        setResponse(data);
                        
                    }; 
                } catch (error) {
                    setResponse("Validation Unsuccessful. Please try again!");   
                } 
            }

            const handleReset = async (e) => {
                e.preventDefault();
                try {
                    const { data } = await axios.put('https://api.devask.hng.tech/auth/change-password', {
                        "oldPassword": oldPassword,
                        "newPassword": newPassword,
                        "confirmPassword": confirmPassword
                    });
                    if(data){
                        setResponse(data.message);
                    };
                    
                } catch (error) {
                    setResponse("Password Reset Unsuccessful. Please try again!");
                    console.log(error)
                }
            }

    return(
        <div className={styles.Security}>
            <main className={styles.MainSection}>
            <section className={styles.LeftSection}>
                <h1 className={styles.Header1}>Settings</h1>
                <div className={styles.Selectors}>
                    <section className={styles.AccountSelector}>
                            <Link to="/settings">
                            <h1> Your Account</h1><p>&gt;</p>
                            </Link>                        
                    </section>
                    <section className={styles.SecuritySelector}>
                        <Link to="/security-settings">
                            <h1> Security</h1><p>&gt;</p>
                        </Link>
                    </section>
                    <section className={styles.NotificationSelector}>

                        <Link to="/notification-page">
                            <h1> Notification</h1><p>&gt;</p>
                        </Link>
                    </section>
                    <section className={styles.AppearanceSelector}>
                        <Link to="/#">
                            <h1> Privacy and Safety </h1> <p>&gt;</p>
                        </Link>
                    </section>
                    <section className={styles.AccessibilitySelector}>
                        <Link to="/#">
                            <h1> Accessibility, display and language</h1><p>&gt;</p>
                        </Link>
                    </section>
                </div>
            </section>
            <section className={styles.RightSection}>
                <div className={styles.Header2}>
                    <h1> <Link to="/settings"><span> &#8592; </span>  </Link>Security</h1>
                    <p>Manage your account’s security.</p>
                </div>
                <section className={styles.TwoFactorAuth}>
                        <h2>Two-Factor Authentication</h2>
                        <p>Enabling a second authentication method in addition to your 
                                DevAsk password helps protect your account from unauthorized
                                access. </p>
                 </section>
                    <section className={styles.TwoFANav}>
                    <button type="submit" className={styles.handleEnable} onClick={toggleButtons}>Two-factor authentication<p>&gt;</p></button>
                        
                <div className={styles.TwoFactorAuthForms} id="two-factor-forms">
                    { buttons &&
                    <div>
                <button type="submit" onClick={toggleForm}>Setup MFA</button>
                <button type="submit" onClick={showVerifyForm}>Verify Code</button>
                 </div>
                 }   
                {isVisible && 
                 <div>
                    <p>Please fill the required fields</p>
                <form className={styles.GetTwoAuthForm} onSubmit={handleSubmit} method="POST">
                        <input type="email" name="email" required value={getEmail} onChange={(e) => setGetEmail(e.target.value)} />
                        <button type="submit">Generate</button>
                    </form>
                    <p>{response}</p>
                       </div>
    } 
                    {button &&
                        <button type="submit" onClick={revealCode}>Display Code</button>
                        
                    }
                    {code && <div>
                                    <p>Please Scan the Code</p>
                                    <img src={mydata} alt="data" />
                                    </div>
                    
                    }
                    { verifyToken &&
                    <div>
                    <form className={styles.GetTwoAuthForm} onSubmit={handleSubmitOTP} method="POST">
                        <input type="email" name="email" required value={postEmail} onChange={(e) => setPostEmail(e.target.value)} />
                        <input type="text" name="OTP" required value={OTP} onChange={(e) => setOTP(e.target.value)} />
                        <button type="submit">Verify Token</button>
                    
                    </form>
                            <p>{response}</p>
                </div>
                }
                </div>
                    </section>
                    <section className={styles.AdditionalProtection}>
                    <h2>Additional password protection</h2>
                    <p>Enabling this setting adds extra security to your account by requiring additional information to reset your password. If enabled you must provide the email address used in creating your account to reset your password. </p>
                    </section>
                    <button type="submit" className={styles.handleEnable} onClick={hideResetForm}>Reset Password<p>&gt;</p></button>
                   { hideReset &&

                  
                    <div>
                    <form className={styles.PasswordReset} onSubmit={handleReset} method="POST">
                        <p>Old Password</p>
                        <input type="password" name="old_password" required value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        <p>New Password</p>
                        <input type="password" name="new_password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <p>Coonfirm Password</p>
                        <input type="password" name="confirm_password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="submit">Change Password</button>
                    
                    </form>
                            <p>{response}</p>
                </div>
                 }
            </section>
            </main>
        </div>
    )
}

export default Security;