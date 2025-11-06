import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeCompanent from './Pages/home'
import SignInPageComponent from './auth/sign-in'
import SignUpComponent from './auth/sign-up'
import ResetpasswordComponent from './auth/resetpassword'
import ConfirmPasswordComponent from './auth/confirm-pw'
import NewPasswordComponent from './auth/newpw'
import DashboardComponent from './Pages/dashboard'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomeCompanent />} />
      <Route path="/" element={<SignInPageComponent />} />
      <Route path="/login/sign-in" element={<SignInPageComponent />} />
      <Route path="/login/sign-up" element={<SignUpComponent />} />
      <Route path="/login/reset-pw" element={<ResetpasswordComponent />} />
      <Route path="/login/reset-pw/confirm-pw" element={<ConfirmPasswordComponent />} />
      <Route path="/login/reset-pw/confirm-pw/setnew-pw" element={<NewPasswordComponent />} />
      <Route path="/dashboard" element={<DashboardComponent />} />
    </Routes>
  </BrowserRouter>
)
