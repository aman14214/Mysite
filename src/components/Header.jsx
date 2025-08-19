import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      {/* Left side: logo + text */}
      <div className="header-left">
        <NavLink to="/" className="header-logo-link">
          <img src={logo} alt="DLF Logo" className="logo" />
          <div className="logo-text">
            <p className="welcome-text"><h1>DLF Corporate website</h1></p>
            <span className="sub-text">Go to another DLF website </span>
          </div>
        </NavLink>
      </div>

      {/* Right side: navigation links */}
      <nav className="nav-links">
        <NavLink to="/seeds">Seeds </NavLink>
        <NavLink to="/news">News & Insight</NavLink>
        <NavLink to="/innovation">Innovation & Sustainability</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
