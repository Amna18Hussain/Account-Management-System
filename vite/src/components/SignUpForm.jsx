import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    console.log(storedData);
    
    if (storedData) {
      setName(storedData.name);
      console.log(setName);
      
    }
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("data", JSON.stringify(data));

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    if (password.length < 4) {
      alert("Password must be at least 4 characters long.");
      return;
    }

    // Navigate to role selection after storing user data
    navigate("/role-selection");
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
