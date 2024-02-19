  import React from "react";
import "./UserHeaderNav.css"
import { useNavigate } from "react-router-dom";



const UserHeaderNav = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions
    navigate("/");
  };

  return (
      <div>
          <nav className="navbar">
              <div>
                  <ul className="nav-list">
                      <li className="nav-item">
                          Quiz App
                      </li>
                      <li className="nav-item">
                          {username && (
                              <span className="nav-link">Welcome, {username}!</span>
                          )}
                      </li>
                      <li className="nav-item">
                          <button className="btn" onClick={handleLogout}>
                              Logout
                          </button>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
  );
};

export default UserHeaderNav;