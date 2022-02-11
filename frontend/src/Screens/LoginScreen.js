import React from 'react'
import './LoginScreen.css'

function LoginScreen() {


  return (
    <div className='loginscreen'>
      <div className="form-popup"  >

        <h1>Sign In</h1>
        <form className='form-container' action="/userlogin">
        
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required></input>

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></input>

          <button type="submit" className="btn" >Sign In</button>
          
        </form>

        <a href=""><h4>Create an Account</h4></a>
      </div>
      
    </div>
    
  )
}

export default LoginScreen

