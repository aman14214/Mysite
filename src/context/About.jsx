import React from "react";
import "./About.css";

// Import images from src/assets
import cowImage from "../assets/images/cow.jpg";
import Footer from "../components/Footer";

export default function About() {
  const cards = [
    { title: "Our Mission", text: "We aim to deliver sustainable solutions for agriculture and green spaces worldwide." },
    { title: "Our Vision", text: "To be the global leader in innovative seed solutions, supporting a greener future." },
    { title: "Our Values", text: "Integrity, innovation, and sustainability are at the core of everything we do." },
    { title: "Global Reach", text: "With offices worldwide, we serve customers in more than 100 countries." },
    { title: "Innovation", text: "We constantly invest in research and development to improve seed quality." },
    { title: "Sustainability", text: "Committed to creating eco-friendly solutions for future generations." },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">SEEDS ARE EVERYWHERE,<br />SO ARE WE</h1>
        <p className="about-subtitle">
          What do kids, football stars and cows have in common? They cannot do without our high-quality turf grass. 
          It all begins with a seed.
        </p>
      </section>

      {/* Cards Section */}
      <section className="about-cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </section>

      {/* Career Section */}
      <section className="career-section">
        <h2 className="career-title">Want to be a part of DLF?</h2>
        <div className="career-content">
          <p>
            Our employees are our greatest assets, and we are always looking for new talents 
            to develop new and existing roles within the company. Let’s grow together!
          </p>
          <a href="/careers" className="career-button">
            Explore career opportunities
          </a>
        </div>
      </section>

      {/* Sustainability Split Cards */}
      <section className="split-section">
        {/* Card 1 */}
        <div className="split-card">
          <div className="split-text">
            <h2>Seeds for a sustainable future</h2>
            <p>
              Everything we do is about breeding and innovating more sustainable products. 
              From the forage grasses that help cows produce more milk with reduced impact 
              on the environment to the lawn grasses that thrive in drought areas with 
              almost no need for irrigation.
            </p>
            <a href="/sustainability" className="split-button">
              See our sustainable actions
            </a>
          </div>
          <div className="split-image">
            <img src={cowImage} alt="Sustainable future with cows" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="split-card reverse">
          <div className="split-text">
            <h2>Innovating for tomorrow</h2>
            <p>
              We constantly invest in research to develop seed varieties that can thrive 
              in changing climates, reduce water usage, and improve food security worldwide. 
              Our innovation is helping to create a greener planet for future generations.
            </p>
            <a href="/innovation" className="split-button">
              Learn more about innovation
            </a>
          </div>
          <div className="split-image">
            <img src={cowImage} alt="Innovation in agriculture" />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
