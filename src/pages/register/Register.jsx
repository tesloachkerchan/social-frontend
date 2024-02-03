import { useRef } from "react";
import "./register.css";
import axios from "axios";
import {useNavigate} from 'react-router'
import { Link } from "react-router-dom";
export default function Register() {
  const userName = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()
  const handleClick = async (e) => {
    e.preventDefault()
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("password doesn't match!")
    } else {
      const user = {
        userName: userName.current.value,
        email: email.current.value,
        password : password.current.value,
      }
      try {
        await axios.post('/api/auth/register', user)
        navigate('/login')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">KerSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="UserName"
              ref={userName}
              required
              className="loginInput"
            />
            <input
              placeholder="Email"
              ref={email}
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              required
              className="loginInput"
              type="password"
              minLength='6'
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              required
              className="loginInput"
              type="password"
              minLength='6'
            />
            <button className="loginButton">Sign Up</button>
            <Link to='/login'>
              <button className="loginRegisterButton">
              Log into Account
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
