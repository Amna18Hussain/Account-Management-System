import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      setEmail(storedData.email);
      setPassword(storedData.password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const data = {
      email: email,
      password: password,
    };

   
    localStorage.setItem("data", JSON.stringify(data));

    
    navigate("/signup");
  };

  return (
    <div className="sign-in-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignInForm;
