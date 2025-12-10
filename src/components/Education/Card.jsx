// ExperienceCard.jsx
import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="exp-card">
      <div className="exp-card-link">
        <a href={item.link} target="_blank" rel="noreferrer">
          🔗 View Certificate
        </a>
      </div>

      <h2 className="exp-card-title">{item.title}</h2>
      <p className="exp-card-company">{item.company}</p>
      <p className="exp-card-duration">{item.duration}</p>

      <p className="exp-card-desc">{item.desc}</p>
    </div>
  );
};

export default Card;
