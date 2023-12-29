import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import "./Residency.css";
import { PuffLoader } from "react-spinners";
import { getResidency } from "../../utils/api";
import { MdLocationPin } from "react-icons/md";
import {
  FaBed,
  FaBirthdayCake,
  FaBuilding,
  FaCar,
  FaCompass,
  FaShower,
} from "react-icons/fa";
import { TbStairs } from "react-icons/tb";
import { GiWindow } from "react-icons/gi";
import EnquireFormResd from "../../utils/EnquireForm/EnquireFormResd";
import ResdCarousel from "../../utils/ResdCarousel/ResdCarousel";

const Residency = () => {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getResidency(id)
  );
  console.log(data);
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth residency-container">
        <ResdCarousel />
        {/*}  <Swiper>
          <SwiperSlide>
            <img src={data?.image1} alt="residency image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data?.image2} alt="residency image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data?.image3} alt="residency image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data?.image4} alt="residency image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data?.image5} alt="residency image" />
          </SwiperSlide>
  </Swiper> */}
        <div className="flexCenter paddings innerWidth residency-details">
          {/*Left side*/}
          <div className="flexColStart innerWidth left">
            {/* Head */}
            <div className="flexStart innerWidth head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                Rs. <span className="rupees">{data?.price}</span>
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaBed size={20} color="#1F3E72" />
                <span>{data?.facilities.bedroom} Bedroom</span>
              </div>
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities.bathroom} Bathroom</span>
              </div>
              <div className="flexStart facility">
                <TbStairs size={20} color="#1F3E72" />
                <span>{data?.facilities.floor} Floor</span>
              </div>
              <div className="flexStart facility">
                <FaBuilding size={20} color="#1F3E72" />
                <span>{data?.facilities.totalfloor} Total Floor</span>
              </div>
              <div className="flexStart facility">
                <FaCar size={20} color="#1F3E72" />
                <span>{data?.facilities.carparking} Car Parking</span>
              </div>
            </div>
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaBirthdayCake size={20} color="#1F3E72" />
                <span>{data?.facilities.ageofproperty} Age of Property</span>
              </div>
              <div className="flexStart facility">
                <FaCompass size={20} color="#1F3E72" />
                <span>{data?.facing} Facing</span>
              </div>
              <div className="flexStart facility">
                <GiWindow size={20} color="#1F3E72" />
                <span>{data?.furnishing}</span>
              </div>
            </div>

            {/* area */}
            <div className="primaryText">
              Area: <span style={{ fontWeight: 500 }}>{data?.area}</span>
            </div>

            {/* descriptiom*/}
            <span className="thirdText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}
            <div
              className="flexStart"
              style={{ gap: "1rem", color: "#1F3E72" }}
            >
              <MdLocationPin size={30} />
              <div className="fifthText">
                <div>{data?.address}</div>
                <div>{data?.city}</div>
                <div>{data?.state}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EnquireFormResd />
    </div>
  );
};

export default Residency;
