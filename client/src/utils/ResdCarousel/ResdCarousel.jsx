import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getResidency } from "../api";
import "./ResdCarousel.css";

const ResdCarousel = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data } = useQuery(["resd", id], () => getResidency(id));
  console.log(data);
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-container"
          src={data?.image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-container"
          src={data?.image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-container"
          src={data?.image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-container"
          src={data?.image4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-container"
          src={data?.image5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ResdCarousel;
