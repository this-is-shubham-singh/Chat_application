import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="left-side">
          <h1 className="logo">Chat App</h1>
        </div>

        <div className="right-side">
          <form className="login-form">
            <h2 className="form-heading">Sign Up</h2>

            <input
              type="text"
              placeholder="Username"
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            />

            <input
              type="submit"
              value="Create Account"
              className="submit-button"
            />

            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>Agree to the terms of use & privacy policy.</span>
            </label>

            <p className="login-text">
              Already have an account?{" "}
              <a href="#" className="login-link">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
