import "./login.css";
import {useContext, useRef } from "react";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from "@mui/material";
export default function Login() {
  const email = useRef()
  const password = useRef()
  const {user, isFetching,error,dispatch} = useContext(AuthContext)
  const handleClick = (e) => {
    e.preventDefault()
    loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    console.log(user)
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">KerSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on KerSocial.
          </span>
        </div>
        <div className="loginRight" >
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" className="loginInput" ref={email}  required/>
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              minLength='6'
              ref={password}
              required />
            <button className="loginButton">{isFetching ? <CircularProgress className="progress" />:'Log In'}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">{isFetching ? (<CircularProgress className="progress" />):('Create a New Account')}
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
