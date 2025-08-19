import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // reuse same CSS

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <div className="login-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}
