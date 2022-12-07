import { useState } from 'react'
import bread from "../public/login-bread.jpg"
import logo from "../public/breadLogo.png"


function App() {
 return (
 <div className='login-container'>
  <img className='login-img' src={bread} alt="Bread" />
  
  <div className='login-contentContainer'>

    <section className='login-text'>
      <p>Start with a simple receipe and record the changes as you go.</p>
      <img className='login-logo' src={logo} alt="Logo" />
    </section>
    
    <section className='login-formContainer'>
      <p className='login-formHeader'>Bake. Eat. Revise.</p>
      <form id="login-form" action="">
      <span className='login-formText'>Create Account:</span>
          
          <div className='login-inputContainer'>
            <div className='login-relativeInput'>
              <input 
                type="email"
                id='username'
              />
              <label className='login-label' htmlFor="username">Username</label>
            </div>
          
            <div className='login-relativeInput'>
              <input 
                type="text" 
                id='password'
              />
              <label className='login-label' htmlFor="password">Password</label>
            </div>

          
            <div className='login-relativeInput'>
              <input 
                type="text" 
                name="" 
                id="confirmPassword" 
              />
              <label className='login-label' htmlFor="confirmPassword">Confrim Password</label>
            </div>
          </div>
      </form>
    </section>
    
    <section className='login-bottomContent'>
      <button className='login-button'>Create Account</button>
      <p className='login-bottomText'>Don't want to create an account? <span>Login</span></p>
    </section>
  </div>
 </div>
 )
}

export default App
