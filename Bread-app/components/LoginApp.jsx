import React from "react"
import bread from "../public/login-bread.jpg"
import logo from "../public/breadLogo.png"

function LoginApp(props){

  return(
    <div className='login-container'>
      <img className='login-img' src={bread} alt="Bread" />
      
      <div className='login-contentContainer'>
      <section className='login-text'>
        <h2 className="login-Title">Start with a base receipe - record the changes as you go.</h2>
        <img className='login-logo' src={logo} alt="Logo" />
      </section>
        
      <section className='login-formContainer'>
          <h1 className='login-formHeader'>Bake. Eat. Revise.</h1>
          <form id="login-form" >
          <span className='login-formText'>Create Account:</span>
              
              <div className='login-inputContainer'>
                <div className='login-relativeInput'>
                  <input 
                    type="email"
                    id='email'
                    name="email"
                    placeholder=" "
                    onChange={props.handleChange}
                  />
                  <label className='login-label' htmlFor="email">Email</label>
                </div>
              
                <div className='login-relativeInput'>
                  <input 
                    type="text" 
                    id='password'
                    name="password"
                    placeholder=" "
                    onChange={props.handleChange}
                  />
                  <label className='login-label' htmlFor="password">Password</label>
                </div>

              
                <div className='login-relativeInput'>
                  <input 
                    type="text" 
                    name="confirmPassword" 
                    id="confirmPassword"
                    placeholder=" "
                    onChange={props.handleChange}
                  />
                  <label className='login-label' htmlFor="confirmPassword">Confrim Password</label>
                </div>
              </div>
          </form>
        </section>

      <section className='login-bottomContent'>
        <button 
        className='login-button'
        type = "submit"
        form = "login-form"
        onClick={props.createUser}
        >Create Account</button>
        <p className='login-bottomText'>Don't want to create an account? <span className='login-autoLogin'>Login</span></p>
      </section>

    </div>
  </div>
  )
}

export default LoginApp