import React from "react";
import "./Brochures.css";
import img1 from "../assets/images/farm.jpg";
import img2 from "../assets/images/agri.jpg";
import img3 from "../assets/images/rice.jpeg";

export default function Brochures() {
  return (
    <section className="brochures">
      <div className="brochures-left">
        <h2>NEW BROCHURES</h2>
        <p>
          Dive into the latest Masterline® and ForageMax® brochures
          to discover more about our mixtures and solutions.
        </p>
      </div>

      <div className="brochures-right">
        <div className="brochure-card">
          <img src={img1} alt="Masterline Brochure" />
          <a href="#" className="read-now">Read now</a>
        </div>

        <div className="brochure-card">
          <img src={img2} alt="ForageMax Brochure" />
          <a href="#" className="read-now">Read now</a>
        </div>

        <div className="brochure-card">
          <img src={img3} alt="Rice Brochure" />
          <a href="#" className="read-now">Read now</a>
        </div>
      </div>
    </section>
  );
}
