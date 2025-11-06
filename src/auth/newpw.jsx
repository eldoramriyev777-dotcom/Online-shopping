import React from 'react'
import { ConfirmPwForm, LoginImg, RecreatePwForm, SignInAllWrap, SignInContainer, SignUpContainer } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import { useNavigate } from 'react-router-dom'

const NewPasswordComponent = () => {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // oldingi sahifaga qaytadi
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login/sign-in")
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
            <SignUpContainer>
                <RecreatePwForm>
                    <div className='confirmTexts'>
                        <p>New password</p>
                    </div>
                    <div class="form">
                        <input type="password" class="input" placeholder="Enter new password" />
                        <input type="password" class="input" placeholder="Confirm password" />
                    </div>
                    <div className='buttonswrap'>
                        <button onClick={handleBack} type='button' className='back'>Back</button>
                        <button onClick={handleSubmit} className='submit' type='submit'>Save</button>
                    </div>
                </RecreatePwForm>
            </SignUpContainer>
        </SignInAllWrap>
    </div>
  )
}

export default NewPasswordComponent