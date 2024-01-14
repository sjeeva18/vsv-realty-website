import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Lands.css";
import { sliderSettings } from "../../utils/common";
import useLands from "../../hooks/useLands";
import LandCard from "../LandCard/LandCard";
import { PuffLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
const Lands = () => {
  const { data, isError, isLoading } = useLands();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <section className="l-wrapper">
      <div className="paddings innerWidth l-container">
        <div className="l-head flexColStart">
          <NavLink to="/lands">
            <span className="primaryText">Popular Lands</span>
          </NavLink>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(0, 4).map((card, i) => (
            <SwiperSlide key={i}>
              <LandCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Lands;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter l-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
