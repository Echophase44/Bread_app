import React from "react"
import bread from "../public/login-bread.jpg"
import logo from "../public/breadLogo.png"
import LoginForm from "./loginForm"
import { userData } from "../data/userdata"

function LoginApp(){
  return(
    <div className='login-container'>
      <img className='login-img' src={bread} alt="Bread" />
      
      <div className='login-contentContainer'>
      <section className='login-text'>
        <p>Start with a base receipe and record the changes as you go.</p>
        <img className='login-logo' src={logo} alt="Logo" />
      </section>
        
      <LoginForm 
        data = {userData[0]}
      />

      <section className='login-bottomContent'>
        <button className='login-button'>Create Account</button>
        <p className='login-bottomText'>Don't want to create an account? <span className='login-autoLogin'>Login</span></p>
      </section>

    </div>
  </div>
  )
}

export default LoginApp