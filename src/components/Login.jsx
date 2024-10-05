import React, { useState } from "react";
// import "../styles/About.css";
import "../styles/Login.css";
import Logo from "../assets/images/Asset 6@4x.png";

function LoginSignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div className="container">
      <div className="form-container">
        <img src={Logo} alt="logo" />
        {isSignedUp ? (
          <Login setIsSignedUp={setIsSignedUp} />
        ) : (
          <SignUp setIsSignedUp={setIsSignedUp} />
        )}
      </div>
    </div>
  );
}

function Login({ setIsSignedUp }) {
  return (
    <div className="form-content">
      <form action="#">
        <div className="input-group">
          <label htmlFor="login-email">Email</label>
          <input type="email" id="login-email" required />
        </div>
        <div className="input-group">
          <label htmlFor="login-password">Password</label>
          <input type="password" id="login-password" required />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <p className="switch-form">
          Don't have an account?{" "}
          <a href="#" id="to-signup" onClick={() => setIsSignedUp(false)}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

function SignUp({ setIsSignedUp }) {
  return (
    <div className="form-content">
      <form action="#">
        <div className="input-group">
          <label htmlFor="signup-username">Username</label>
          <input
            type="text"
            id="signup-username"
            style={{ border: "1px solid white" }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="signup-email">Email</label>
          <input type="email" id="signup-email" required />
        </div>
        <div className="input-group">
          <label htmlFor="signup-password">Password</label>
          <input type="password" id="signup-password" required />
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <p className="switch-form">
          Already have an account?{" "}
          <a href="#" id="to-login" onClick={() => setIsSignedUp(true)}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginSignUp;
