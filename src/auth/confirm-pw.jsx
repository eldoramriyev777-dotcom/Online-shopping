import React, { useEffect, useState } from 'react'
import { ConfirmPwForm, LoginImg, SignInAllWrap, SignInContainer, SignUpContainer } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import resend from '../assets/login_assets/resend.svg'
import { useNavigate } from 'react-router-dom'

const ConfirmPasswordComponent = () => {

  const [time, setTime] = useState(120); // 2 daqiqa = 120 soniya
  const [isRunning, setIsRunning] = useState(true); // timer ishlayaptimi?

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false); // vaqt tugasa to‘xtaydi
    }
    return () => clearTimeout(timer);
  }, [time, isRunning]);

  // vaqtni daqiqa va sekundga ajratamiz
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // “Resend” bosilganda vaqtni qayta boshlash
  const handleResend = () => {
    setTime(120); // 2 daqiqa
    setIsRunning(true);
  };

  const navigate = useNavigate()
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login/reset-pw/confirm-pw/setnew-pw")
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
                <ConfirmPwForm>
                    <div className='confirmTexts'>
                        <p>Confirm password</p>
                        <small>OTP code
                        was sent to</small><span>blossom@gmail.com</span>
                    </div>
                    <div className='midinputswithtime'>
                        <div className='inputswrap'>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        </div>
                        <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        {isRunning ? (
                            // faqat vaqt chiqadi
                            <strong>
                            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                            </strong>
                        ) : (
                            // vaqt tugagach, "Resend Code" chiqadi
                            <span
                            onClick={handleResend}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                                color: "var(--Black, #000)",
                                fontWeight: "500",
                                fontSize: "14px",
                            }}
                            >
                            <img
                                src={resend}
                                alt="resend"
                                style={{ width: "18px", height: "18px", marginRight: "4px" }}
                            />
                            Resend Code
                            </span>
                        )}
                        </p>
                    </div>
                    <div className='buttonswrap'>
                        <button onClick={handleBack} type='button' className='back'>Back</button>
                        <button onClick={handleSubmit} className='submit' type='submit'>Confirm code</button>
                    </div>
                </ConfirmPwForm>
            </SignUpContainer>
        </SignInAllWrap>
    </div>
  )
}

export default ConfirmPasswordComponent