import React from "react";
import "./PropertyCard.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../residencies/${card.id}`)}
    >
      <img src={card.image} alt="home" />

      <span className="thirdText r-price">
        <span style={{ color: "goldenrod" }}>Rs.</span>
        <span>{card.price}</span>
      </span>

      <span className="primaryText">
        {truncate(card.title, { length: 20 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
