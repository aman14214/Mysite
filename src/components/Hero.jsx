import React from "react";
import { NavLink } from "react-router-dom";  // ✅ import NavLink
import "./Hero.css";
import bgVideo from "../assets/viedos/hero.mp4"; // check path

export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <h1 className="hero-title">We turn science into growth</h1>
        <p className="hero-subtitle">
          Step into our green world, where innovation and sustainability
          intertwine, unlocking endless possibilities for seeds
        </p>

        {/* ✅ Button navigates to /innovation */}
        <NavLink to="/innovation" className="hero-button">
          See more <span className="arrow">→</span>
        </NavLink>
      </div>
    </section>
  );
}
