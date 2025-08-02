// src/pages/SignupPage.js
import React, { useState, useContext } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../styles/Auth.css";

const SignupPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Optional: set display name
      await updateProfile(result.user, { displayName: name });

      setUser(result.user);
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
  alert("This email is already in use. Please log in instead.");
} else {
  alert("Signup failed: " + error.message);
}
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
