import React, { useEffect, useState } from 'react'
import { ConfirmPwForm, LoginImg, SignInAllWrap, SignInContainer, SignUpContainer } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import resend from '../assets/login_assets/resend.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const ConfirmPasswordComponent = () => {
  const [time, setTime] = useState(120);
  const [isRunning, setIsRunning] = useState(true);
  const location = useLocation();
  const email = location.state?.email || "Unknown email";
  const [value, setValue] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

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
        message: "Timer is still running. Are you sure you want to go back?",
        severity: "info",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate("/login/reset-pw/confirm-pw/setnew-pw");
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
              <p>Confirm password</p>
              <small>OTP code was sent to</small><span>{email}</span>
            </div>

            <div className='midinputswithtime'>
              <div className='inputswrap'>
                <input onChange={(e) => setValue(e.target.value)} type="text" />
                <input onChange={(e) => setValue(e.target.value)} type="text" />
                <input onChange={(e) => setValue(e.target.value)} type="text" />
                <input onChange={(e) => setValue(e.target.value)} type="text" />
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
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ConfirmPasswordComponent;
