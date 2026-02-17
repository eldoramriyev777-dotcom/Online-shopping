import React, { useState } from 'react'
import { LoginImg, SignInAllWrap, SignInContainer, SignInFooter, SignInTop } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import google from '../assets/login_assets/google.svg'
import facebook from '../assets/login_assets/facebook.svg'
import apple from '../assets/login_assets/apple.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import { Snackbar, Alert } from "@mui/material";
import { ClipLoader } from 'react-spinners'
import axios from 'axios'
import { API_URL } from '../config'

const SignInPageComponent =  () => {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [snack, setSnack] = useState({ message: "", open: false, type: "" })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const user = localStorage.getItem("token"); // yoki redux/context

  if (user) {
    return <Navigate to="/home" replace />;
  }

  const handleClose = () => {
    setSnack((prev) => ({ ...prev, open: false }))
  }

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(API_URL + "/users/login", {
        email,
        password
      })
      if (data.success) {
        localStorage.setItem("token", data.token)
        setSnack({ open: true, message: data.message || "Login Successfull!!!", type: "success" })
        setTimeout(() => navigate("/home", { replace: true }), 1000)
      }
    } catch (error) {
      console.error(error)
      setTimeout(() => {
        setSnack({ open: true, message: error.response?.data?.message || error.message || "Invalid Password or login!!!", type: "error" })
      }, 500);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  // Universal handler for all interactive elements
  const handleButtonClick = (callback) => {
    setLoading(true)
    setTimeout(() => {
      if (callback) callback()
      setLoading(false)
    }, 1000) // 1.5 sekund overlay + spinner
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vh", minHeight: "100vh", backgroundColor: "#F5F5F5" }}>
      <SignInAllWrap>
        {/* Rasm qismi */}
        <div className='imgwrap'>
          <img className='blossom' src={blossom} alt="blossom" />
          <LoginImg src={signin} alt="sign-in" />
        </div>

        {/* Form qismi */}
        <SignInContainer>
          <SignInTop>
            <div className='topdivision'>
              <p>Sign In</p>
              <div>
                <small>Already have an account? </small>
                <span style={{ cursor: "pointer"}}
                  onClick={() => handleButtonClick(() => navigate("/login/sign-up"))}
                >Sign Up</span>
              </div>
            </div>

            <form onSubmit={login} style={{ display: "flex", gap: "100px", alignItems: "center", flexDirection: "column", marginTop: "100px" }}>
              <div className='midinputwrap'>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name='email'
                  placeholder="Email"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <p style={{ cursor: "pointer", color: "#007bff" }}
                  onClick={() => handleButtonClick(() => navigate("/login/reset-pw"))}
                >Forgot password?</p>
              </div>

              <div className='buttonWrap'>
                <button type="submit">Login</button>
              </div>
            </form>
          </SignInTop>

          <SignInFooter>
            <p>Or continue with</p>
            <div className='mediawrap' style={{ display: "flex", gap: "15px" }}>
              <div style={{ cursor: "pointer" }} onClick={() => handleButtonClick(() => window.location.href = "https://google.com")}>
                <img src={google} alt="google" />
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => handleButtonClick(() => window.location.href = "https://facebook.com")}>
                <img src={facebook} alt="facebook" />
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => handleButtonClick(() => window.location.href = "https://apple.com")}>
                <img src={apple} alt="apple" />
              </div>
            </div>
          </SignInFooter>
        </SignInContainer>

        {/* Snackbar */}
        <Snackbar
          open={snack.open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity={snack.type} variant="filled" onClose={handleClose} sx={{ width: "100%" }}>
            {snack.message}
          </Alert>
        </Snackbar>

        {/* Loading overlay */}
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
      </SignInAllWrap>
    </div>
  )
}

export default SignInPageComponent
