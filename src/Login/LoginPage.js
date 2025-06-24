import React, { useState } from 'react';
import News from './News.png'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Correct import
import '../Login/Login.css'

export default function LoginPage() {

  const navigate=useNavigate()
  const [value, setValue] = useState({
    username: "",
    password: ""
  });

  function Open()
  {
    navigate('/')


  }

  function handleLogin(e) {
    e.preventDefault();

    axios.post("http://localhost:3001/api/user/userlogin", value)
      .then(response => {
        console.log("login successful", response.data);
        Open()
      })
      
      .catch(err => {
        console.log("Login failed", err);
        alert("Login failed. Please check your username or password.");
      });
  }

  return (
    <div className="login-container">
      {/* Left Side, Image */}
      <div className="left-side">
        <h1>Welcome Back!</h1>
        <img src={News} alt="News" />
      </div>

      {/* Right Side, Form */}
      <div className="right-side">
        <h1>Login</h1>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text" 
              id="username"
              placeholder="Enter your username"
              onChange={e => setValue({ ...value, username: e.target.value })}
            />
          </div>

          <div style={{ marginTop: 20 }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={e => setValue({ ...value, password: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <div className="loginbtn" style={{ marginTop: 20 }}>
            <button type="submit">Login</button>
          </div>
        </form>

        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
      </div>

      
    </div>
  );
}
