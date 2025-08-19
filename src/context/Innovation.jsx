import React, { useEffect } from "react";
import "./Innovation.css";
import img1 from "../assets/images/agri.jpg";
import img2 from "../assets/images/agri.jpg";
import img3 from "../assets/images/agri.jpg";
import img4 from "../assets/images/agri.jpg";
import Footer from "../components/Footer";

export default function Innovation() {
  const innovations = [
    {
      img: img1,
      title: "Impact on climate and environment",
      desc: "We are committed to developing new plant varieties that offer improved climate- and environmental footprints, empowering farmers to enhance their agricultural systems."
    },
    {
      img: img2,
      title: "Sustainable farming solutions",
      desc: "Providing innovative approaches to reduce water usage and soil depletion while maintaining high crop yield and quality."
    },
    {
      img: img3,
      title: "Cutting-edge research",
      desc: "Our dedicated R&D team focuses on breakthrough technologies for a sustainable agricultural future."
    },
    {
      img: img4,
      title: "Community & education",
      desc: "We engage with local communities to promote sustainable farming practices and awareness programs."
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".innovation-card");

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

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="innovation-page">
      <div className="innovation-header">
        <h1>INNOVATIVE SOLUTIONS FOR A SUSTAINABLE FUTURE</h1>
        <p>
          Innovation takes center stage in our mission to address global challenges.
          We provide cutting-edge solutions that make a tangible impact on our environment.
        </p>
      </div>

      <div className="innovation-cards">
        {innovations.map((item, index) => (
          <div
            key={index}
            className={`innovation-card ${index % 2 === 0 ? "slide-left" : "slide-right"}`}
          >
            <div className="innovation-card-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="innovation-card-body">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
