import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";
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
          <div className="footer-address">
            <p className="footer-office-title">Head Office</p>
            <p>Sector 5, D Block, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
            <p>Email: info@mysite.com</p>

            {/* Google Maps Button */}
            <a
              href="https://maps.app.goo.gl/kFTGc5zKpFiAajfF7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-btn"
            >
              <FaMapMarkerAlt /> View on Map
            </a>
          </div>
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

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <h3>Let's stay in touch</h3>
            <p>
              Update your knowledge with the latest research,<br />
              product news and innovation!
            </p>
            <button className="newsletter-btn">
              Subscribe to newsletter
            </button>
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
