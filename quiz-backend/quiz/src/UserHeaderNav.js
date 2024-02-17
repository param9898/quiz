import React from "react";
import { useNavigate } from "react-router-dom";

const UserHeaderNav = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">Quiz App</div>
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              {username && (
                <span className="nav-link">Welcome, {username}!</span>
              )}
            </li>
          </ul>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserHeaderNav;