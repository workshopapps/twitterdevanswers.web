import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/forgotpassword-images/logo.png";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {
   const [email, setEmail] = useState("email");
   const [response, setResponse] = useState("");

   const RequestLink = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post("https://api.devask.hng.tech/auth/forget-password", {
            "email": email
        });
        if(data){
            setResponse(data.message);
        };
        
    } catch (error) {
        setResponse("Could not send request. Please try again!");
    }
}

   return(
    <div className={styles.ForgotPassword}>
        <section className={styles.MainContainer}>
            <div className={styles.HeadingSection}>
                <img src={logo} alt="logo" className={styles.Logo} />
            <h1 className={styles.MainHeading}>Forgot Password</h1>
            <p className={styles.SubHeading}>Enter the email address associated with your account and we’ll send you a link to reset your password.</p>
            </div> 
            <form className={styles.ForgotPasswordForm} onSubmit={RequestLink} method="post">
                <p className={styles.Email}>Email Address</p>
                <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">SUBMIT</button>
                <p className={styles.SignUp}>Don’t have a DevAsk account? <Link to="sign-up">Sign Up </Link> </p>
                <i>{response}</i>
            </form>

        </section>
    </div>
   )
}
export default ForgotPassword;