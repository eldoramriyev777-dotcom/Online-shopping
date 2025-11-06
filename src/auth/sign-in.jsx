import React, { useState } from 'react'
import { LoginImg, SignInAllWrap, SignInContainer, SignInFooter, SignInTop } from './loginStyle'
import signin from '../assets/login_assets/sign-in.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import google from '../assets/login_assets/google.svg'
import facebook from '../assets/login_assets/facebook.svg'
import apple from '../assets/login_assets/apple.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Snackbar, Alert } from "@mui/material";

const STORAGE_KEY = "fake_auth_credientials"

const getStorageCredientials = () => {
 const stored =  localStorage.getItem(STORAGE_KEY)
 if (stored) {
  try {
   return  JSON.parse(stored)
  }
  catch{
    console.error("KEY_ERROR")
  }
 }
 const default_login = {username: "admin@manage.com", password: "12345"}
 localStorage.setItem(STORAGE_KEY, JSON.stringify(default_login))
}

const SignInPageComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snack, setSnack] = useState({
    message: "",
    open: false,
    type: ""
  })

  const handleClose = () => {
    setSnack((prev) => ({...prev, open: false}))
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  const stored = getStorageCredientials()
  if (username.trim() === stored.username && password.trim() === stored.password) {
    // success
    localStorage.setItem(STORAGE_KEY, JSON.stringify({username, password}))
    localStorage.setItem("fake_auth_logged_in", "true")
    setSnack({
      open: true,
      message: "Login Successfull!!!",
      type: "success"
    })
   setTimeout(() => navigate("/dashboard"), 1000);
  } else {
    console.log("pasw or login is wrong")
    setSnack({
      open: true,
      message: "Invalid Password or login!!!",
      type: "error"
    })
  }
  } 
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vh", minHeight: "100vh", backgroundColor: "#F5F5F5"}}>
      <SignInAllWrap>
        <div className='imgwrap'>
          <img className='blossom' src={blossom} alt="blossom" />
          <LoginImg src={signin} alt="sign-in" />
        </div>
         <SignInContainer>
         <SignInTop>
            <div className='topdivision'>
              <p>Sign In</p>
              <div>
                <small>Already have an account?</small>
                <Link to={"/login/sign-up"}><span>Sign Up</span></Link> 
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{display: "flex", gap: "200px", alignItems: "center", flexDirection: "column"}}>
              <div className='midinputwrap'>
                <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="email" type="text" placeholder="Email" 
                />
                <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                />
               <Link to={"/login/reset-pw"}> <p>Forgot password?</p> </Link>
              </div>
              <div className='buttonWrap'>
                <button onClick={handleSubmit} type="submit">Login</button>
              </div>
            </form>
          </SignInTop>
            <SignInFooter>
                <p>Or continue with</p>
                <div className='mediawrap'>
                <Link to={"google.com"}><div><img src={google} alt="google" /></div></Link>  
                <Link to={"facebook.com"}><div><img src={facebook} alt="facebook" /></div></Link>  
                <Link to={"apple.com"}><div><img src={apple} alt="apple" /></div></Link> 
                </div>
            </SignInFooter>
         </SignInContainer>
         <Snackbar 
        open={snack.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
          <Alert 
          severity={snack.type}
          variant="filled" 
          onClose={handleClose} 
          sx={{width: "100%"}}>
          {snack.message}
          </Alert>
        </Snackbar>
     </SignInAllWrap>
    </div>
  )
}

export default SignInPageComponent