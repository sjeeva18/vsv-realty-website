import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started and List with VSV Realty</span>
          <span className="thirdText">
            Begin your journey to extraordinary living with VSV Realty. <br />{" "}
            Explore our innovative projects and list it for turn your dream home into a
            reality.
          </span>
          <button className="button">
            <a href="mailto:vsvreality@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
