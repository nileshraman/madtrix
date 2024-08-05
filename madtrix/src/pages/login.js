import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add authentication logic here

    // Navigate to the dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="background-section">
        <img className="background-image" src="https://i.postimg.cc/rm3h9qkV/image.png" alt="Background" />
      </div>
      <div className="form-section">
        <div className="login-form">
          <h1 className="title">
            <span className="title-line">Welcome to the</span>
            <span className="title-line">Madtrix</span>
            <span className="title-line">Dashboard</span>
          </h1>
          <div className="input-container">
            <label className="input-label" htmlFor="email">Email or Username</label>
            <input className="input" id="email" type="email" placeholder="Email or Username" />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">Password</label>
            <input className="input" id="password" type="password" placeholder="Password" />
          </div>
          <div className="button-and-link">
            <a className="link-black" href="#">Forgot password?</a>
            <button className="button" onClick={handleLogin}>LOG IN</button>
          </div>
        </div>
        <a className="link-signup" href="#">No Account yet? SIGN UP</a>
      </div>
    </div>
  );
};

export default Login;
