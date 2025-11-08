import React, { useState } from 'react'
import { LoginImg, SignInAllWrap, SignInContainer, SignInFooter, SignInTop } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import google from '../assets/login_assets/google.svg'
import facebook from '../assets/login_assets/facebook.svg'
import apple from '../assets/login_assets/apple.svg'
import { useNavigate } from 'react-router-dom'
import { Snackbar, Alert } from "@mui/material";
import { ClipLoader } from 'react-spinners'

const STORAGE_KEY = "fake_auth_credientials"

const getStorageCredientials = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      console.error("KEY_ERROR")
    }
  }
  const default_login = {username: "admin@manage.com", password: "12345"}
  localStorage.setItem(STORAGE_KEY, JSON.stringify(default_login))
  return default_login
}

const SignInPageComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [snack, setSnack] = useState({ message: "", open: false, type: "" })
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleClose = () => {
    setSnack((prev) => ({ ...prev, open: false }))
  }

  // Universal handler for all interactive elements
  const handleButtonClick = (callback) => {
    setLoading(true)
    setTimeout(() => {
      if (callback) callback()
      setLoading(false)
    }, 1000) // 1.5 sekund overlay + spinner
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleButtonClick(() => {
      const stored = getStorageCredientials()
      if (username.trim() === stored.username && password.trim() === stored.password) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ username, password }))
        localStorage.setItem("fake_auth_logged_in", "true")
        setSnack({ open: true, message: "Login Successfull!!!", type: "success" })
        setTimeout(() => navigate("/dashboard"), 1000)
      } else {
        setSnack({ open: true, message: "Invalid Password or login!!!", type: "error" })
      }
    })
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
                <small>Already have an account?</small>
                <span style={{ cursor: "pointer"}}
                  onClick={() => handleButtonClick(() => navigate("/login/sign-up"))}
                >Sign Up</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "100px", alignItems: "center", flexDirection: "column", marginTop: "100px" }}>
              <div className='midinputwrap'>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
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
            position: "absolute",
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
