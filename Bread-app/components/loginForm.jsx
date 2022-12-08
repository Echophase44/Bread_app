import React from "react";

function LoginForm(props){
  console.log(props.data.email)
  return (
        <section className='login-formContainer'>
          <p className='login-formHeader'>Bake. Eat. Revise.</p>
          <form id="login-form" action="">
          <span className='login-formText'>Create Account:</span>
              
              <div className='login-inputContainer'>
                <div className='login-relativeInput'>
                  <input 
                    type="email"
                    id='email'
                    placeholder=" "
                  />
                  <label className='login-label' htmlFor="email">Email</label>
                </div>
              
                <div className='login-relativeInput'>
                  <input 
                    type="text" 
                    id='password'
                    placeholder=" "
                  />
                  <label className='login-label' htmlFor="password">Password</label>
                </div>

              
                <div className='login-relativeInput'>
                  <input 
                    type="text" 
                    name="" 
                    id="confirmPassword"
                    placeholder=" "
                  />
                  <label className='login-label' htmlFor="confirmPassword">Confrim Password</label>
                </div>
              </div>
          </form>
        </section>
  )
}

export default LoginForm