import React from "react";
import Footer from "../components/Footer"; 
import Card3 from "../components/Card3";
import "./News.css"; // ✅ Import CSS file

export default function News() {
  return (
    <div className="news-page">
      <h1>News & Insight</h1>
      <p>
        Get inspired with the latest news from DLF. If you're looking for news related to a specific topic,
        a location or a date range, you can use the filters to specify the view. Or you can browse through
        all news to make sure you don't miss out.
      </p>

      {/* Cards */}
      <Card3 />

      {/* Footer */}
      <Footer />
    </div>
  );
}
