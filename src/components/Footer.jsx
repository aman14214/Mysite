import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // update with your logo
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo-wrap">
            <img src={logo} alt="Logo" className="footer-logo" />
            <span className="footer-logo-text">MySite</span>
          </div>
          <p className="footer-office-title">Head Office</p>
          <p>123 Green Street, New Delhi, India</p>
          <p>Email: info@mysite.com</p>
          <button className="footer-btn">Get in Touch</button>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/job-careers">Careers</NavLink></li>
              <li><NavLink to="/innovation">Innovation</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/product-finder">Product Finder</NavLink></li>
              <li><NavLink to="/seeds">Seeds</NavLink></li>
            </ul>
          </div>

          <div>
            <h4>Account</h4>
            <ul>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/signup">Signup</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 MySite. All rights reserved.</p>
        <p>
          <NavLink to="/privacy">Privacy Policy</NavLink> | 
          <NavLink to="/terms"> Terms of Service</NavLink>
        </p>
      </div>
    </footer>
  );
}
