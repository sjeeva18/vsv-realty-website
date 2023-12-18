import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./NewProject.css";
import { sliderSettings } from "../../utils/common";
import useResidencies from "../../hooks/useResidencies";
import { PuffLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import NewProjectCard from "../NewProjectCard/NewProjectCard";
const NewProject = () => {
  const { data, isError, isLoading } = useResidencies();

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
    <section className="np-wrapper">
      <div className="paddings innerWidth np-container">
        <div className="np-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <NavLink to="/residencies">
            <span className="primaryText">Popular Residencies</span>
          </NavLink>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(0, 4).map((card, i) => (
            <SwiperSlide key={i}>
              <NewProjectCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProject;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter np-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
