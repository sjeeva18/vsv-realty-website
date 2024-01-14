import React from "react";
import "./SoldOut.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./SoldOut.css";
import data from "../../utils/slidersss.json";
import { sliderSettings } from "../../utils/common";

const SoldOut = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Recently Sold Out</span>
          <span className="primaryText">Products</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart s-card">
                <img src={card.image} alt="home" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SoldOut;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
