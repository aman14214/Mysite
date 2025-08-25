import React from "react";
import "./Production.css";
import Footer from "./Footer"; 
import agriImage from "../assets/images/agri.jpg"; 

// Crop names list
const crops = [
  "Radish",
  "Carrot",
  "Cabbage",
  "Chilli",
  "Bottlegourd",
  "Bittergourd",
  "Cucumber",
  "Beet Root",
  "Peas",
  "Mustard",
  "Watermelon",
  "Tomato",
];

function Production() {
  return (
    <section className="production">
      {/* Heading */}
      <h2 className="production-title">
        Our <span>Production</span>
      </h2>

      {/* Paragraph */}
      <p className="production-desc">
        Kerikaa Crop Science offers contract seed production services in respect
        of open-pollinated & hybrid vegetable seeds. We are committed to providing
        high-quality seeds with sustainable practices to empower farmers worldwide.
        <span className="read-more"> Read More »</span>
      </p>

      {/* Slideshow */}
      <div className="slideshow-container">
        <div className="slideshow-track">
          {crops.map((crop, index) => (
            <div className="slide" key={index}>
              <img src={agriImage} alt={crop} className="slide-img" />
              <p className="slide-text">{crop}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer /> 
    </section>
  );
}

export default Production;
