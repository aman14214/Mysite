import React from "react";
import { NavLink } from "react-router-dom";
import { FaBriefcase, FaLink, FaUser } from "react-icons/fa";
import "./TopBar.css";

export default function Topbar() {
  return (
    <nav className="topbar">
      <div className="topbar-left">
        <NavLink
          to="/job-careers"
          className={({ isActive }) =>
            `topbar-link ${isActive ? "active" : ""}`
          }
        >
          <FaBriefcase className="icon" /> Jobs & Careers
        </NavLink>
        <NavLink
          to="/product-finder"
          className={({ isActive }) =>
            `topbar-link ${isActive ? "active" : ""}`
          }
        >
          <FaLink className="icon" /> Product Finder
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `topbar-link ${isActive ? "active" : ""}`
          }
        >
          <FaUser className="icon" /> My DLF
        </NavLink>
      </div>
    </nav>
  );
}
