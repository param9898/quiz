import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(username);
      console.log(password);
      const response = await axios.post("http://localhost:8080/login", {
        username: username,
        password: password,
      });
      console.log("123");
      const role = response.data;

      if (role === "user") {
        navigate("/user", { state: { username: username } });
        setError("User logged");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Failed to log in");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        
          <span className="navbar-brand">Quiz Generation App</span>
        
      </nav>

      {/* Login form */}
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="form-control"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
          {error && <div className="text-danger">{error}</div>}
        </form>
        <div>
          {/* Message prompting users to create an account */}
          <p>
            Don't have an account? <Link to="/signup">Create one</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
