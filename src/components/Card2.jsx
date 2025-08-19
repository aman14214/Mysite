import React, { useEffect } from "react";
import "./Card2.css";
import cardImg from "../assets/images/forest.jpg";

export default function Card2() {
  useEffect(() => {
    const images = document.querySelectorAll(".card2-image img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    images.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="card2-wrapper">
        {/* Card 1 */}
        <div className="card2-box card-left">
          <div className="card2-image">
            <img src={cardImg} alt="Card Visual" />
          </div>
          <div className="card2-content">
            <h2>Unlocking Nature's Potential</h2>
            <p>
              This is the first description. The image is on the left side,
              and the content is on the right side for a balanced look.
            </p>
            <a href="#" className="card2-btn">
               Explore More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card2-box card-right">
          <div className="card2-content">
            <h2>Unleashing Tomorrow's Harvest</h2>
            <p>
              This is the second description. The image moves to the right
              side, keeping an alternating design flow.
            </p>
            <a href="#" className="card2-btn">
               Explore More
            </a>
          </div>
          <div className="card2-image">
            <img src={cardImg} alt="Card Visual" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card2-box card-left">
          <div className="card2-image">
            <img src={cardImg} alt="Card Visual" />
          </div>
          <div className="card2-content">
            <h2>Developing Sustainable Seeds</h2>
            <p>
              This is the third description. Again the image comes back
              to the left for a consistent alternating design.
            </p>
            <a href="#" className="card2-btn">
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="card2-banner">
        <h2>Ready to make an impact?</h2>
        <p>
          At DLF we work together across the globe to create long-term, sustainable solutions.
          With more than <strong>2000 employees</strong> across 65 locations, we offer you an
          international workplace and invite you to come and grow with us.
        </p>
        <a
          href="https://example.com/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-btn"
        >
          Explore career opportunities →
        </a>
      </section>
    </>
  );
}
