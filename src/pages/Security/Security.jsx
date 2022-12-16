import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Security.module.css";

function Security() {
    const [getEmail, setGetEmail] = useState("email");
    const [fetchEmail, setFetchEmail] = useState("email");
    const [postEmail, setPostEmail] = useState("email");
    const [OTP, setOTP] = useState("Token");
    const [isVisible, setIsVisible] = useState(false);
    const [response, setResponse] = useState("");
    const [verifyResponse, setVerifyResponse] = useState("");
    const [resetResponse, setResetResponse] = useState("");
    const [mydata, setMyData] = useState("");
    const [code, setCode] = useState(false);
    const [buttons, setButtons] = useState(false);
    const [verifyToken, setVerifyToken] = useState(false);
    const [oldPassword, setOldPassword] = useState("**************");
    const [newPassword, setNewPassword] = useState("**************");
    const [confirmPassword, setConfirmPassword] = useState("**************");
    const [hideReset, setHideReset] = useState(false);
    const [isSetUpVisible, setIsSetUpVisible] = useState(false);

    function toggleForm(){
        setIsVisible(!isVisible);
        setVerifyToken(false);
        setIsSetUpVisible(false)
    }
    function toggleSetUpForm(){
        setIsSetUpVisible(!isSetUpVisible);
        setIsVisible(false);
        setVerifyToken(false);
    }
    function toggleButtons (){
        setButtons(!buttons);
    }
    function showVerifyForm(){
        setVerifyToken(!verifyToken);
        setCode(false);
        setIsVisible(false);
        setIsSetUpVisible(false)
    }
    function revealCode(){
            setCode(!code);
    }
    function hideResetForm(){
        setHideReset(!hideReset);
    }
    
    const token = localStorage.getItem("token");

        const handleSetUpMFA = async (e) => {
            e.preventDefault();
            try {
                const { data } = await axios.put('https://api.devask.hng.tech/auth/setup-mfa', {
                    "email": getEmail
                },
                { 
                    headers:{
                        'Authorization': `Bearer ${token}`
                }
            });
                if(data){
                    setResponse(data.detail);
                };
                
            } catch (error) {
                setResponse("Could not send request. Please try again!");
            }
        }

        const handleGenerateCode = async (e) => {
            e.preventDefault();
            try {
                const { data } = await axios.post('https://api.devask.hng.tech/auth/send-mfa', {
                    "email": fetchEmail
                },
                { 
                    headers:{
                        'Authorization': `Bearer ${token}`
                }
            });
                if(data){
                    setMyData(data.qr_code);
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
                    },
                    { 
                        headers:{
                            'Authorization': `Bearer ${token}`
                    }
                });
                    if(data){
                        setVerifyResponse("Validation Successful");
                        
                    }; 
                } catch (error) {
                    setVerifyResponse("Validation Unsuccessful. Please try again!");   
                } 
            }
            
            const handleReset = async (e) => {
                e.preventDefault();
                try {
                    
                    const { data } = await axios.put('https://api.devask.hng.tech/auth/change-password', 
                    {    
                            "oldPassword": oldPassword,
                            "newPassword": newPassword,
                            "confirmPassword": confirmPassword,       
                    },
                    { 
                        headers:{
                            'Authorization': `Bearer ${token}`
                    }
                    });
                    if(data){
                        setResetResponse(data.message);
                    };
                    
                } catch (error) {
                    setResetResponse("Password Reset Unsuccessful. Please try again!");
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
                <button type="submit" onClick={toggleSetUpForm}>Enable MFA</button>
                <button type="submit" onClick={toggleForm}>Generate QR Code</button>
                <button type="submit" onClick={showVerifyForm}>Verify Code</button>
                 </div>
                 }   
                 {isSetUpVisible && 
                 <div>
                    <p>Please fill the required fields</p>
                <form className={styles.GetTwoAuthForm} onSubmit={handleSetUpMFA} method="POST">
                        <input type="email" name="email" required value={getEmail} onChange={(e) => setGetEmail(e.target.value)} />
                        <button type="submit">SetUp MFAnp</button>
                    </form>
                    <p>{response}</p>
                       </div>
    } 
                {isVisible && 
                 <div>
                    <p>Please fill the required fields</p>
                <form className={styles.GetTwoAuthForm} onSubmit={handleGenerateCode} method="POST">
                        <input type="email" name="email" required value={fetchEmail} onChange={(e) => setFetchEmail(e.target.value)} />
                        <button type="submit" onClick={revealCode}>Generate</button>
                    </form>
                    {code && 
                    
                                <div>
                                    <p>Please Scan the Code</p>
                                    <img src={mydata} alt="data" />
                                    </div>
                    } 
                       </div>
                    } 
    
                    
                    { verifyToken &&
                    <div>
                    <form className={styles.GetTwoAuthForm} onSubmit={handleSubmitOTP} method="POST">
                        <input type="email" name="email" required value={postEmail} onChange={(e) => setPostEmail(e.target.value)} />
                        <input type="text" name="OTP" required value={OTP} onChange={(e) => setOTP(e.target.value)} />
                        <button type="submit">Verify Token</button>
                    
                    </form>
                            <p>{verifyResponse}</p>
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
                            <p>{resetResponse}</p>
                </div>
                 }
            </section>
            </main>
        </div>
    )
}

export default Security;