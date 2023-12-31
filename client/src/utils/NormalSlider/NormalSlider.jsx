import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./NormalSlider.css";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getResidency } from "../api";

const NormalSlider = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data } = useQuery(["resd", id], () => getResidency(id));
  console.log(data);
  return (
    <div className="paddings innerWidth">
      <Swiper>
        <SwiperSlide>
          <div className="normal-container">
            <img src={data?.image1} alt="residency image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="normal-container">
            <img src={data?.image2} alt="residency image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="normal-container">
            <img src={data?.image3} alt="residency image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="normal-container">
            <img src={data?.image4} alt="residency image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="normal-container">
            <img src={data?.image5} alt="residency image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NormalSlider;
