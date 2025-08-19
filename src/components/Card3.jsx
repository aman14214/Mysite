import React from "react";
import "./card3.css";
import news1 from "../assets/images/farm.jpg"; // using card2.jpeg for all
import news2 from "../assets/images/card2.jpeg";
import news3 from "../assets/images/farm.jpg";

export default function Card3() {
  const newsData = [
    { img: news1, date: "15/08/2025", title: "Hard-Wearing and Dense" },
    { img: news2, date: "06/08/2025", title: "ITRC 2025 Spotlights" },
    { img: news3, date: "03/07/2025", title: "Top Turf for Top Tournaments" },
  ];

  return (
    <section className="card3-wrapper">
      {/* Section Heading */}
      <h2 className="card3-heading">Latest News</h2>

      {/* Filter Bar */}
      <div className="card3-filters">
        <select>
          <option>Location</option>
        </select>
        <select>
          <option>Topic</option>
        </select>
        <select>
          <option>Date range</option>
        </select>
      </div>

      {/* News Grid */}
      <div className="card3-grid">
        {newsData.map((item, index) => (
          <div key={index} className="card3-card">
            <div className="card3-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card3-body">
              <p className="card3-date">📅 {item.date}</p>
              <h3 className="card3-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button className="card3-btn load-more">Load More News</button>
    </section>
  );
}
