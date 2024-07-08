import React from 'react'
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <center>
      <div className='wrapper'>
        <div className='form-box login'>
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='password' required />
              <FaLock className='icon'/>
            </div>
            <div className="remember-forget">
              <label> <input type="checkbox"/> Remember me</label>
              <a href="#"> Forget Password? </a>
            </div>
            <button type='submit'>Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#">Register Now</a> </p>
            </div>
          </form>
        </div>
      </div>
    </center>
  )
}

export default Login;
