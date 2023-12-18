import React from "react";
import "./NewProjectCard.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
const NewProjectCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="np-card flexCenter"
      onClick={() => navigate(`../residencies/${card.id}`)}
    >
      <img src={card.image} alt="home"/>

      <span className="thirdText np-price">
        <span style={{ color: "goldenrod" }}>Rs.</span>
        <span>{card.price}</span>
      </span>

      <span className=" primaryText">
        {truncate(card.title, { length: 30 })}
      </span>
      <span className="secondaryText">
        {truncate(card.address)}
      </span>
    </div>
  );
};

export default NewProjectCard;
