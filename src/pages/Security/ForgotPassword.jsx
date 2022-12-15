import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
    const [email, setEmail] = useState("email");
    const [sendToken, setSendToken] = useState("Token");
    const [newPassword, setNewPassword] = useState("*******");
    const [confirmPassword, setConfirmPassword] = useState("*******");
    const [tokenResponse, setTokenResponse] = useState("");
    const [verifyTokenResponse, setVerifyTokenResponse] = useState("")


    const RequestToken  = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('https://api.devask.hng.tech/auth/forget-password', {
                "email": email
            });
            if(data){
                setTokenResponse(data.message);
            };
            
        } catch (error) {
            setResponse("Could not send request. Please try again!");
        }
    }

    const ChangePassword = async (e) => {
        e.preventDefault();
        try {
            const token = sendToken
            const { data } = await axios.put(`https://api.devask.hng.tech/auth/forget-password/${token}`, {
                "newPassword": newPassword,
                "confirmPassword": confirmPassword
            });
            if(data){
                setVerifyTokenResponse(data.message);
            };
            
        } catch (error) {
            setResponse("Could not send request. Please try again!");
        }
    }
    return(
        <div className={ForgotPassword}>
            <form className={RequestTokenForm} onSubmit={RequestToken}>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">Generate Token</button>
                <p>{tokenResponse}</p>
            </form>
            <form className={RequestTokenForm} onSubmit={ChangePassword}>
                <input type="text" name="OTP" value={sendToken} onChange={(e) => setSendToken(e.target.value)}/>
                <input type="password" name="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                <input type="password" name="CPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type="submit">Change Password</button>
                <p>{verifyTokenResponse}</p>
            </form>
        </div>
    )
}