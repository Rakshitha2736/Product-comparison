import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // 🔓 Clear login state
    navigate('/'); // 🔁 Redirect to login
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">CompareX</div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
