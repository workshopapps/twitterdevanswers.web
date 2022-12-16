import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/forgotpassword-images/logo.png";
import styles from "./RecoverPassword.module.css";

function RecoverPassword(){
    const [newPassword, setNewPassword] = useState("*******");
    const [confirmPassword, setConfirmPassword] = useState("*******");
    const [Response, setResponse] = useState("")

    const ChangePassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put("https://api.devask.hng.tech/auth/forget-password", {
                "newPassword": newPassword,
                "confirmPassword": confirmPassword
            });
            if(data){
                setResponse(data.message);
            };
            
        } catch (error) {
            setResponse("Could not send request. Please try again!");
        }
    }
    return(
        <div className={styles.RecoverPassword}>
            <section className={styles.MainContainer}>
            <div className={styles.HeadingSection}>
                <img src={logo} alt="logo" className={styles.Logo} />
                <h1 className={styles.MainHeading}>Reset Password</h1>
            </div>
            <form className={styles.RecoverPasswordForm} onSubmit={ChangePassword} method="POST">
                <p>New Password</p>
                <input type="password" name="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                <p>Confirm Password</p>
                <input type="password" name="CPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type="submit">RESET PASSWORD</button>
                
                <i>{Response}</i>
            </form>

            </section>
        </div>
    )
}

export default RecoverPassword;