import React from 'react'
import "./HeaderNav.css"
import { Link, useNavigate } from 'react-router-dom';

export const HeaderNav = ({username}) => {
    const navigate = useNavigate();
    const handleLogout=()=>
    {
        navigate("/");
    };
  return (
    <div>
        <nav className="navbar">
            <div>
                <ul className="nav-list">
                    <li className="nav-item">
                    <Link to="/admin"className="nav-link">Add Question</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/show-question" className="nav-link">Show Question</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/generate-quiz" className="nav-link">Generate Quiz</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/validate-answer" className="nav-link">User Response</Link>
                    </li>

                    <li className="nav-item">
                        {username && <span className="nav-link">Welcome, {username}!</span>}
                    </li>
                  

                    <button className='logout-button'>
                        Logout
                    </button>
                </ul>
            </div>  
        </nav>
   </div>
  )
}
