import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login-types">
        <button className="login-button">Student Login</button>
        <button className="login-button">Teacher Login</button>
      </div>
    </div>
  );
};

export default Login;