import React from "react";
import "./NewProject.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../utils/sliderssss.json";
const NewProject = () => {
  return (
    <section className="np-wrapper">
      <div className="paddings innerWidth np-container">
        <div className="np-head flexColstart">
          <span className="primaryText">New Popular Projects</span>
        </div>

        <Swiper>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="np-card">
                <span className="flexCenter">
                <img src={card.image} alt="project" /></span>

                <span className="secondaryText flexCenter np-price">
                  <span style={{ color: "orange" }}>Rs.</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText flexCenter">{card.name}</span>
                <span className="secondaryText flexCenter">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProject;
