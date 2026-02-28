import React, { useEffect, useState, useRef } from 'react'
import { ConfirmPwForm, LoginImg, SignInAllWrap, SignInContainer, SignUpContainer } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import resend from '../assets/login_assets/resend.svg'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import axios from 'axios'
import { API_URL } from '../config'
import { ClipLoader } from 'react-spinners'
import Alert from '@mui/material/Alert'


const ConfirmPasswordComponent = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const [searchParams] = useSearchParams();
  const [time, setTime] = useState(120);
  const [isRunning, setIsRunning] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const email = searchParams.get("email");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [time, isRunning]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleResend = () => {
    setTime(120);
    setIsRunning(true);
    setSnackbar({ open: true, message: "Verification code resent successfully!", severity: "success" });
  };

  // Back tugmasi
  const handleBack = (e) => {
    e.preventDefault();

    if (isRunning) {
      setSnackbar({
        open: true,
        message: "Timer is still running. You can't go back when time is running!",
        severity: "warning",
      });
    } else {
      navigate(-1);
    }
  };

  // Tasdiqlashni Snackbar action orqali bajarish
  const confirmBack = () => {
    setSnackbar({ ...snackbar, open: false });
    navigate(-1);
  };

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
  
    const newOtp = [...otp];
    newOtp[index] = value;   // bu safar bo‘sh string ham yoziladi
    setOtp(newOtp);
  
    // agar value bo‘lsa keyingisiga o‘tadi
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const code = otp.join("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code && email) {
      try {
        const res = await axios.post(`${API_URL}/users/verify-otp`, {
          email,
          code
        });
      
        const data = res.data;
      
        if (data.success) {
          setLoading(true)
          setSnackbar({
            open: true,
            message: "OTP verified successfully!",
            severity: "success"
          });
    
          setTimeout(() => {
            navigate("/login/sign-in")
          }, 1000);
        } else {
          setSnackbar({
            open: true,
            message: data.message || "OTP verification failed",
            severity: "error"
          });
        }
      
      } catch (error) {
        setSnackbar({
          open: true,
          message: error.response?.data?.message || "Server error",
          severity: "error"
        });
      }  finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } else {
      setSnackbar({ open: true, message: "Please enter the validation code", severity: "error" });
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vh", minHeight: "100vh", backgroundColor: "#F5F5F5" }}>
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
              <p>Enter the verification code</p>
              <small>OTP code was sent to</small><span>{email ? email : "Your email"}</span>
            </div>

            <div className='midinputswithtime'>
              <div className='inputswrap'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
              </div>

              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {isRunning ? (
                  <strong>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                  </strong>
                ) : (
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

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        action={
          snackbar.severity === "info" ? (
            <Button color="inherit" size="small" onClick={confirmBack}>
              YES
            </Button>
          ) : null
        }
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      
      {loading && (
          <div style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}>
            <ClipLoader color="#F54F1F" size={60} />
          </div>
        )}

    </div>
  );
};

export default ConfirmPasswordComponent;
