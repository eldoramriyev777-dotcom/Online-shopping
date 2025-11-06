import React, { useState } from 'react'
import { SignInAllWrap, SignInContainer, SignUpButtonWrap, SignUpContainer, SignUpImg, SignUpTop } from './loginStyle'
import signup from '../assets/login_assets/sign-up.jpg'
import blossom from '../assets/login_assets/BLOSSOM.png'
import { Link, useNavigate } from 'react-router-dom'

const SignUpComponent = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
      const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login/sign-in")
        console.log(formData);
      };
    

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vh", minHeight: "100vh", backgroundColor: "#F5F5F5"}}>
        <SignInAllWrap>
            <SignUpImg>
                <img className='blossom' src={blossom} alt="blossom" />
                <img className='signupimg' src={signup} alt="sign-in" />
            </SignUpImg>
            <SignUpContainer>
                <SignUpTop>
                    <div className='topdivision'>
                    <p>Sign Up</p>    
                    <div><small>Already have an account?</small> <Link to={"/login/sign-in"}><span>Sign In</span></Link> </div>
                    </div>
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-checkbox">
                            <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            />
                            <span>
                            I agree to send an sms code. <a href="#">Privacy and Policy</a>
                            </span>
                        </div>
                        <button onClick={handleSubmit} type="submit">Submit</button>
                        </form>
                </SignUpTop>
            </SignUpContainer>
        </SignInAllWrap>
    </div>
  )
}

export default SignUpComponent