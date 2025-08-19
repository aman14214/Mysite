import React from "react";
import { NavLink } from "react-router-dom";
import { FaBriefcase, FaLink, FaUser } from "react-icons/fa"; // icons
import "./Topbar.css";

export default function Topbar() {
  return (
    <nav className="topbar">
      <div className="topbar-left">
        <NavLink to="/job-careers" className="topbar-link">
          <FaBriefcase className="icon" /> Jobs & Careers
        </NavLink>
        <NavLink to="/product-finder" className="topbar-link">
          <FaLink className="icon" /> Product finder
        </NavLink>
        <NavLink to="/login" className="topbar-link">
          <FaUser className="icon" /> My DLF
        </NavLink>
      </div>
    </nav>
  );
}
