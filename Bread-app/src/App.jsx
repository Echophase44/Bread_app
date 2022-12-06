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

        <input 
        type="text"
        placeholder='Username' 
        />
        
        <input 
        type="text"
        placeholder='Password' 
        name="" 
        id="" />
        
        <input 
        type="text"
        placeholder='Confirm Password' 
        name="" 
        id="" />
      </form>
    </div>
    <div className='login-bottomContent'>
      <button className='login-button'>Create Account</button>
      <p>Already have an account? <span>Login</span></p>
    </div>
  </div>
 </div>
 )
}

export default App
