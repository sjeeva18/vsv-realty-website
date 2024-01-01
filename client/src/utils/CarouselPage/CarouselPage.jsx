import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getResidency } from "../api";
import "./CarouselPage.css";

const CarouselPage = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data } = useQuery(["resd", id], () => getResidency(id));
  console.log(data);
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={data?.image1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={data?.image2} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={data?.image3} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselPage;
