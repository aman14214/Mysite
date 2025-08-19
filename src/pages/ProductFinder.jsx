import React from "react";
import "./ProductFinder.css";
import turfImage from "../assets/images/brochure1.jpeg";   // Replace with your Turf image path
import forageImage from "../assets/images/brochure2.jpeg"; // Replace with your Forage image path
import Footer from "../components/Footer"; // Import Footer component

export default function ProductFinder() {
  return (
    <div className="product-finder-page">
      <div className="product-finder">
        <h1>Find and compare varieties</h1>
        <p>
          Select your area (forage or turf), your specie and compare up to 3 varieties to find the exact variety that suits your need.
        </p>

        <div className="product-cards">
          <div className="product-card">
            <img src={turfImage} alt="Turf" />
            <div className="card-label">Turf</div>
          </div>
          <div className="product-card">
            <img src={turfImage} alt="Turf" />
            <div className="card-label">Turf</div>
          </div>

          <div className="product-card">
            <img src={forageImage} alt="Forage" />
            <div className="card-label">Forage</div>
          </div>
           <div className="product-card">
            <img src={forageImage} alt="Forage" />
            <div className="card-label">Forage</div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
