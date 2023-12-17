import React from "react";
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Hero from "../components/Hero/Hero";
import Properties from "../components/Properties/Properties";
import Values from "../components/Values/Values";
import Lands from "../components/Lands/Lands";
import Testimonial from "../components/Testimonial/Testimonial";
import SoldOut from "../components/SoldOut/SoldOut";
import NewProject from "../components/NewProject/NewProject";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Companies />
      <Properties />
      <Lands />
      <NewProject />
      <Testimonial />
      <Values />
      <SoldOut />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default Website;
