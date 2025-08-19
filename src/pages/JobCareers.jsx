import React from "react";
import "./JobCareers.css";

export default function JobCareers() {
  const regions = [
    {
      name: "Europe",
      desc: "DLF was founded in Denmark and operates additional brands such as Jensen Seeds, DLF Sugar Beets and Danespo, we have 50% market share in Europe and 30% worldwide."
    },
    {
      name: "North America",
      desc: "We have more than 300 employees located across Canada, Oregon, Kentucky and Wisconsin with headquarters in Lindsay Ontario and the Pacific Northwest."
    },
    {
      name: "South America",
      desc: "DLF South America flourishes with research, plant breeding as well as distributing forage grasses, legumes, sorghum, and other crops."
    },
    {
      name: "Oceania",
      desc: "View our range of jobs across Australia (DLF Seeds) & New Zealand (PGG Wrightson Seeds) from R&D to distribution, on-farm support and much more."
    },
  ];

  const values = [
    {
      title: "Innovation and entrepreneurship",
      desc: "We continuously develop our business, our products and the way we work acknowledging the courage and risk willingness that this may require."
    },
    {
      title: "Global synergies",
      desc: "We want to realise synergies through sharing of knowledge, collaboration and developing together as a business, an organization and as individuals."
    },
    {
      title: "Environmental sustainability",
      desc: "We support environmental sustainability by developing sustainable products and operating in an environmentally sustainable way."
    },
    {
      title: "Empowerment",
      desc: "We empower our people and our local business units to act in the interest of the company based on their professional insight and knowledge of local conditions."
    },
  ];

  return (
    <div className="job-careers">
      {/* Top Section */}
      <div className="job-header">
        <h1>DLF Careers</h1>
        <p>Join our global team and explore exciting opportunities across different regions.</p>
        <input 
          type="text" 
          placeholder="Search jobs..." 
          className="search-input"
        />
      </div>

      {/* Regions Section */}
      <h2>Explore our career opportunities across the globe</h2>
      <div className="cards-container">
        {regions.map((region, index) => (
          <div className="job-card" key={index}>
            <div className="circle"></div>
            <h3>{region.name}</h3>
            <p>{region.desc}</p>
            <button type="button">View opportunities</button>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <h2 className="values-title">DLF Global Values</h2>
      <div className="values-container">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="icon-circle"></div>
            <h3>{value.title}</h3>
            <p>{value.desc}</p>
          </div>
        ))}
      </div>

      <p className="footer-text">
        In everything we do we act with respect, trust and integrity.
      </p>
    </div>
  );
}
