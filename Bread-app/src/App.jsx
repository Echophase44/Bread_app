import { useState } from 'react'
import bread from "../public/login-bread.jpg"
import logo from "../public/breadLogo.png"


function App() {
 return (
 <div className='login-container'>
  <img className='login-img' src={bread} alt="Bread" />
  <div className='login-contentContainer'>
    <div className='login-text'>
      <p>Start with a simple receipe and record the changes as you go.</p>
      <img className='login-logo' src={logo} alt="Logo" />
    </div>
    
    <div className='login-formContainer'>
      <p className='login-formHeader'>Bake. Eat. Revise.</p>
      <form id="login-form" action="">
        <span className='login-formText'>Create your Account:</span>
          
          <div className='login-inputContainer'>
          <input 
          type="text"
          placeholder='Username'
          id='username'
          />
          
          
          <input 
          type="text"
          placeholder='Password' 
          name="" 
          id="password" />
          
          <input 
          type="text"
          placeholder='Confirm Password' 
          name="" 
          id="confirmPassword" />
          </div>
          
        
        
      </form>
    </div>
    <div className='login-bottomContent'>
      <button className='login-button'>Create Account</button>
      <p className='login-bottomText'>Already have an account? <span>Login</span></p>
    </div>
  </div>
 </div>
 )
}

export default App
