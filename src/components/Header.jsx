import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      {/* Left side: logo + text */}
      <div className="header-left">
        <NavLink to="/" className="header-logo-link" onClick={closeMenu}>
          <img src={logo} alt="DLF Logo" className="logo" />
          <div className="logo-text">
            <h1 className="welcome-text">DLF Corporate website</h1>
            <span className="sub-text">Go to another DLF website</span>
          </div>
        </NavLink>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Right side: navigation links */}
      <nav className={isOpen ? "nav-links open" : "nav-links"}>
        <NavLink to="/" onClick={closeMenu}>HOME</NavLink>
        {/* <NavLink to="/seeds" onClick={closeMenu}>Seeds</NavLink> */}
        <NavLink to="/product">PRODUCTS</NavLink>
        {/* <NavLink to="/innovation" onClick={closeMenu}>PRODUCTS</NavLink> */}
        <NavLink to="/about" onClick={closeMenu}>ABOUT US</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink>
      </nav>
    </header>
  );
}

export default Header;
