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
    const [open, setOpen] = useState(false);

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Inputlarni tekshirish
        if (!password || !confirmPassword) {
            alert("Please fill both fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Snackbar ochiladi
        setOpen(true);

        // 2 soniya kutib sign-in sahifasiga o'tish
        setTimeout(() => {
            navigate("/login/sign-in");
        }, 2000);
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

                        {/* Snackbar */}
                        <Snackbar
                            open={open}
                            onClose={() => setOpen(false)}
                            autoHideDuration={2000}
                            TransitionComponent={SlideTransition}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        >
                            <Alert onClose={() => setOpen(false)} severity="success">
                                New Password Saved
                            </Alert>
                        </Snackbar>
                    </RecreatePwForm>
                </SignUpContainer>
            </SignInAllWrap>
        </div>
    );
};

export default NewPasswordComponent;
