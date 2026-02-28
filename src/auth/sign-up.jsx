import React, { useState } from "react";
import { SignInAllWrap, SignUpContainer, SignUpImg, SignUpTop } from "./loginStyle";
import signup from "../assets/login_assets/sign-up.jpg";
import blossom from "../assets/login_assets/BLOSSOM.png";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { API_URL } from "../config";
import { ClipLoader } from "react-spinners";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: "", type: "success" });
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData(prev => ({ ...prev, [name]: newValue }));

    // real-time validation
    setErrors(prev => {
      const newErrors = { ...prev };

      switch (name) {
        case "firstName":
          newErrors.firstName = newValue.trim() ? "" : "Required";
          break;
        case "lastName":
          newErrors.lastName = newValue.trim() ? "" : "Required";
          break;
        case "email":
          if (!newValue.trim()) newErrors.email = "Required";
          else if (!newValue.includes("@")) newErrors.email = "Invalid email format";
          else newErrors.email = "";
          break;
        case "password":
          if (!newValue.trim()) newErrors.password = "Required";
          else if (formData.confirmPassword && newValue !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
          else {
            newErrors.password = "";
            if (formData.confirmPassword === newValue) newErrors.confirmPassword = "";
          }
          break;
        case "confirmPassword":
          if (!newValue.trim()) newErrors.confirmPassword = "Required";
          else if (formData.password && newValue !== formData.password)
            newErrors.confirmPassword = "Passwords do not match";
          else newErrors.confirmPassword = "";
          break;
        case "agree":
          newErrors.agree = newValue ? "" : "You must agree to continue";
          break;
        default:
          break;
      }
      return newErrors;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const allValid = Object.values(errors).every(err => !err) && Object.values(formData).every(val => val || val === false) && formData.agree;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allValid) {
      setSnackbar({ open: true, message: "Please fill all required fields correctly.", type: "error" });
      return;
    }
    try {
      setLoading(true)
      const res = await axios.post(API_URL + "/users/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      })
      const data = res.data
      if (data.success) {
        try {
          const res = await axios.post(
            `${API_URL}/users/send-otp`,
            { email: formData.email }
          );

          const data = res.data;

          if (data.success) {
            setSnackbar({
              open: true,
              message: "OTP code sent successfully!",
              type: "success"
            })
          }
        } catch (error) {
          setSnackbar({
            open: true,
            message:
              error.response?.data?.message || "Server error",
            type: "error"
          });
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
        setTimeout(() => navigate(`/login/reset-pw/confirm-pw?email=${formData.email}`), 1000)
      }
    } catch (error) {
      console.error(error)
      setTimeout(() => {
        setSnackbar({ open: true, message: error.response?.data?.message || error.message || "Enter valid information!", type: "error" })
      }, 500);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vw", minHeight: "100vh", backgroundColor: "#F5F5F5" }}>
      <SignInAllWrap>
        <SignUpImg>
          <img className="blossom" src={blossom} alt="blossom" />
          <img className="signupimg" src={signup} alt="sign-up" />
        </SignUpImg>
        <SignUpContainer>
          <SignUpTop>
            <div className="topdivision">
              <p>Sign Up</p>
              <div>
                <small>Already have an account?</small>{" "}
                <Link to={"/login/sign-in"}><span>Sign In</span></Link>
              </div>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
              {/** First Name */}
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} />
                {touched.firstName && errors.firstName && <small style={{ color: "red" }}>{errors.firstName}</small>}
              </div>

              {/** Last Name */}
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} />
                {touched.lastName && errors.lastName && <small style={{ color: "red" }}>{errors.lastName}</small>}
              </div>

              {/** Email */}
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                {touched.email && errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
              </div>

              {/** Password */}
              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" value={formData.password} onChange={handleChange} onBlur={handleBlur} />
                {touched.password && errors.password && <small style={{ color: "red" }}>{errors.password}</small>}
              </div>

              {/** Confirm Password */}
              <div className="form-group">
                <label>Confirm Password</label>
                <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                {touched.confirmPassword && errors.confirmPassword && <small style={{ color: "red" }}>{errors.confirmPassword}</small>}
              </div>

              {/** Checkbox */}
              <div className="form-checkbox">
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} onBlur={handleBlur} />
                <span>I agree to send an sms code. <a href="#">Privacy and Policy</a></span>
                {touched.agree && errors.agree && <small style={{ color: "red" }}>{errors.agree}</small>}
              </div>

              {/** Button */}
              <button type="submit" disabled={!allValid} style={{ backgroundColor: allValid ? "#007bff" : "#ccc", cursor: allValid ? "pointer" : "not-allowed", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", marginTop: "10px" }}>Continue</button>
            </form>
          </SignUpTop>
        </SignUpContainer>
      </SignInAllWrap>

      <Snackbar open={snackbar.open} autoHideDuration={2000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert severity={snackbar.type} onClose={() => setSnackbar({ ...snackbar, open: false })} sx={{ width: "100%" }}>
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

export default SignUpComponent;
