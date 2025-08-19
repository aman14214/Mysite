import React from "react";
import Footer from "../components/Footer";
import "./Contact.css"; // ✅ import CSS file

export default function Contact() {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
  ];

  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact DLF</h1>
        <p>
          We are always ready to provide you with additional information about
          the DLF Group and our solutions. You are always welcome to contact us
          if you have any questions or comments. We look forward to hear from
          you.
        </p>
      </div>

      {/* Left Side */}
      <div className="contact-left">
        <h2>DLF Head Office</h2>
        <p>
          Ny Oestergade 9
          <br />
          4000 Roskilde
          <br />
          Denmark
        </p>
        <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
          Find us on Google Maps
        </a>
        <p>Tel: +45 46 330 300</p>
        <p>
          E-mail: <a href="mailto:dlf@dlf.com">dlf@dlf.com</a>
        </p>
        <div className="contact-icons">
          <span>LinkedIn</span>
          <span>Twitter</span>
        </div>
        <p>CVR: 62556013</p>
        <p>VAT: DK62556013</p>
        <p>Exportvat: DK19139956</p>
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <h1>
          Contact <br /> us
        </h1>
        <button className="contact-btn">Select your country</button>
        <ul className="country-list">
          {countries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
