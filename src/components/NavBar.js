import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  };

  return (
    <>
      
      <nav className={`navbar ${navExpanded ? 'expanded' : ''}`}>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
        <NavLink to="/favorite-videos" activeClassName="active">Favorite Videos</NavLink>
        <NavLink to="/member-page" activeClassName="active">Member Page</NavLink>
        {/* More nav links */}
      </nav>
    </>
  );
};

export default NavBar;
