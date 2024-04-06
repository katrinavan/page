import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/favorite-videos">Favorite Videos</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
