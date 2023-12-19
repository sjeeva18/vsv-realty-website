import React from "react";
import "./NewProjectCard.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
const NewProjectCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="np-card"
      onClick={() => navigate(`../residencies/${card.id}`)}
    >
      <span className="flexCenter">
        <img src={card.image} alt="home" />
      </span>

      <span className="flexCenter thirdText np-price">
        <span style={{ color: "goldenrod" }}>Rs.</span>
        <span>{card.price}</span>
      </span>

      <span className="flexCenter primaryText">
        {truncate(card.title, { length: 30 })}
      </span>
      <span className="flexCenter secondaryText">{truncate(card.address)}</span>
    </div>
  );
};

export default NewProjectCard;
