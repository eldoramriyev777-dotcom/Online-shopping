import React, { useState } from 'react'
import { LoginImg, ResetWrap, SignInAllWrap, SignInContainer, SignUpTop, SignUpTopForReset } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import { useNavigate } from 'react-router-dom'

const ResetpasswordComponent = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const handleBack = (e) => {
        e.preventDefault()
        navigate(-1); // oldingi sahifaga qaytadi
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes("@")) {
            navigate("/login/reset-pw/confirm-pw", { state: { email } });
        } 
        else if (email) {
            alert("Enter a valid email. Include '@'")
        }
        else alert("Please, enter an email")
        // bu yerda formani jo‘natish logikasi bo‘ladi
      };
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vh", minHeight: "100vh", backgroundColor: "#F5F5F5"}}>
    <SignInAllWrap>
        <SignInContainer>
            <div className='imgwrap'>
                <img className='blossom' src={blossom} alt="blossom" />
                <LoginImg src={signin} alt="sign-in" />
            </div>
        </SignInContainer>
        <ResetWrap>
        <SignUpTopForReset>
            <div className='topdivision'>
            <p>Reset Password</p>    
            </div>
            <form className="form-container">
                <div className="form-group">
                    <label>Email</label>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    />
                </div>
                <div style={{display: "flex", gap: "10px"}}>
                    <button onClick={handleBack} type='button' className='backbutton'>Back</button>
                    <button onClick={handleSubmit} type="submit">Send Code</button>
                </div>
            </form>
        </SignUpTopForReset>
        </ResetWrap>
    </SignInAllWrap>
    </div>
  )
}

export default ResetpasswordComponent