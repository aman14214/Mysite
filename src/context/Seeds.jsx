import React from "react";
import { motion } from "framer-motion";
import forageImg from "../assets/images/cow.jpg";
import sportImg from "../assets/images/cow.jpg";
import lawnImg from "../assets/images/cow.jpg"; 
import beetsImg from "../assets/images/cow.jpg"; 
import Footer from "../components/Footer";
import Card2 from "../components/Card2";
import "./Seeds.css"; // ✅ Import CSS

export default function Seeds() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    { img: forageImg, label: "Forage & Agriculture" },
    { img: sportImg, label: "Sport & Landscape" },
    { img: lawnImg, label: "Lawn & Garden" },
    { img: beetsImg, label: "Beets & Vegetables" },
  ];

  return (
    <div className="seeds-container">
      <h1 className="seeds-title">Seeds</h1>

      <div className="seeds-cards">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="seed-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img src={card.img} alt={card.label} className="seed-img" />
            <div className="seed-label">{card.label}</div>
          </motion.div>
        ))}
      </div>

      <Card2 />
      <Footer />
    </div>
  );
}
