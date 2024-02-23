

import React, { useState } from "react";
import "../LoginCss.scss";
import { useNavigate } from "react-router";
import axiosInstance from "./axiosInstance";

function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Validate input
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        error = value ? "" : "Email is required";
        break;
      case "password":
        error = value ? "" : "Password is required";
        break;
      default:
        break;
    }
    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for empty fields
    for (const field in formData) {
      if (!formData[field]) {
        setErrors((prevState) => ({
          ...prevState,
          [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        }));
        return;
      }
    }
    try {
      const response = await fetch(
        isSignUp
          ? "http://localhost:3000/signup"
          : "http://localhost:3000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        console.log("Login successful");
        sessionStorage.setItem("token", data.token);
        const redirectTo = sessionStorage.getItem("redirectTo") || "/home";
        navigate(redirectTo);
      } else {
        alert("Please enter valid email and password");
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <body className="loginbody">
      <div className="container" id="container">
        <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
          <form onSubmit={handleSubmit}>
            <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
            <span>
              {isSignUp
                ? "or use your email for registration"
                : "or use your email password"}
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
            {isSignUp ? (
              <button type="submit">Sign Up</button>
            ) : (
              <>
                <a href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
              </>
            )}
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back !</h1>
              <p>Enter your details to use all of site features</p>
              <button className="hidden" id="login" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="hidden"
                id="register"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
