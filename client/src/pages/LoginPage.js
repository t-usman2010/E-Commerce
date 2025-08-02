import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import "../styles/Auth.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMsg("Login successful!");
      navigate("/");
    } catch (err) {
      setErrorMsg("Login failed: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg("");
    setSuccessMsg("");
    try {
      await signInWithPopup(auth, googleProvider);
      setSuccessMsg("Google login successful!");
      navigate("/");
    } catch (err) {
      setErrorMsg("Google login failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {errorMsg && <p className="error">{errorMsg}</p>}
      {successMsg && <p className="success">{successMsg}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <button className="google-btn" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>

      <p className="forgot-link">
        <Link to="/forgot">Forgot Password?</Link>
      </p>

      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default LoginPage;
