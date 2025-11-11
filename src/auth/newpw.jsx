import React, { useState } from 'react'
import { LoginImg, RecreatePwForm, SignInAllWrap, SignInContainer, SignUpContainer } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import { useNavigate } from 'react-router-dom'
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import MuiAlert from "@mui/material/Alert";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewPasswordComponent = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Inputlarni tekshirish
    if (!password || !confirmPassword) {
      setSnackbar({
        open: true,
        message: "Please fill in both fields",
        severity: "warning",
      });
      return;
    }

    if (password !== confirmPassword) {
      setSnackbar({
        open: true,
        message: "Passwords do not match",
        severity: "error",
      });
      return;
    }

    // Muvaffaqiyatli holatda Snackbar chiqadi
    setSnackbar({
      open: true,
      message: "New password saved successfully!",
      severity: "success",
    });

    // 2 soniyadan so‘ng login sahifasiga o‘tish
    setTimeout(() => {
      navigate("/login/sign-in");
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vh",
        minHeight: "100vh",
        backgroundColor: "#F5F5F5",
      }}
    >
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

            <div className="form">
              <input
                type="password"
                className="input"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className='buttonswrap'>
              <button onClick={handleBack} type='button' className='back'>Back</button>
              <button onClick={handleSubmit} className='submit' type='submit'>Save</button>
            </div>
          </RecreatePwForm>
        </SignUpContainer>
      </SignInAllWrap>

      {/* Snackbar komponenti */}
      <Snackbar
        open={snackbar.open}
        onClose={handleClose}
        autoHideDuration={2500}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NewPasswordComponent;
