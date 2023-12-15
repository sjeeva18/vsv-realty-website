import React from "react";
import "./LandCard.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
const LandCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart l-card"
      onClick={() => navigate(`../lands/${card.id}`)}
    >
      <img src={card.image} alt="home" />

      <span className="thirdText l-price">
        <span>{card.area}</span>{" "} <span>-</span>{" "}
        <span style={{ color: "goldenrod" }}>Rs.</span>
        <span>{card.price}</span>
      </span>

      <span className="primaryText">
        {truncate(card.address, { length: 20 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default LandCard;
