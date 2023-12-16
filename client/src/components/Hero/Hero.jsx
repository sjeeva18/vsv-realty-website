import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, typer: "spring" }}
            >
              Your Gateway to Chennai's <br /> BUDGET PREMIUM LUXURY
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="thirdText">
              Explore Chennai's perfect properties with us.
            </span>
            <span className="thirdText">
              From cozy apartments to elegant homes, find your ideal match
              effortlessly.
            </span>
            <span className="thirdText">
              Start your search now for a home that suits your lifestyle.
            </span>
          </div>

          <div className="flexCenter hero-link">
            <motion.div
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, typer: "spring" }}
            >
              <NavLink to="/residencies">
                <FaAngleDoubleRight size={15} style={{ gap: "1rem" }} />
                Residencies
              </NavLink>
              <NavLink to="/lands">
                <FaAngleDoubleRight size={15} style={{ gap: "1rem" }} />
                Lands
              </NavLink>
            </motion.div>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp end={15} />
                <span>+</span>
                <span className="secondaryText"> Properties</span>
              </span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="flexCenter image-container"
          >
            <img
              src="https://i.ibb.co/dG2yrDz/tobias-wilden-4453-DIQWts-Q-unsplash.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
