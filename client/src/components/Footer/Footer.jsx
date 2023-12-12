import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter social">
        <div className="flexCenter primaryText">Follow Us On</div>
        <a href="https://www.facebook.com/vsvrealty">
          <FaFacebook size={30} style={{ color: "rgb(229, 177, 45)" }} />
        </a>
        <a href="https://www.youtube.com/@VSVREALTY">
          <FaYoutube size={30} style={{ color: "rgb(229, 177, 45)" }} />
        </a>
        <a href="https://www.instagram.com/vsv_realty/">
          <FaInstagram size={30} style={{ color: "rgb(229, 177, 45)" }} />
        </a>
      </div>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <Link to="/">
            <img src="./PhotoRoom-20230829_231247.png" alt="" width={120} />
          </Link>
          <span className="fourthText">
            © 2023 VSV Realty. All rights reserved. Explore our visionary
            projects for exceptional living.
            <br /> Contact us for inquiries or follow us on social media for the
            latest updates.
            <br /> Privacy Policy | Terms of Service.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">
            <a href="https://www.google.com/maps/place/VSV+Realty/@13.0534579,80.1850231,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526758e96a3fcb:0x3b586e3c6833109e!8m2!3d13.0534527!4d80.187598!16s%2Fg%2F11vlbg_w9g?entry=ttu">
              Information
            </a>
          </span>
          <span className="thirdText">
            <a href="https://www.google.com/maps/place/VSV+Realty/@13.0534579,80.1850231,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526758e96a3fcb:0x3b586e3c6833109e!8m2!3d13.0534527!4d80.187598!16s%2Fg%2F11vlbg_w9g?entry=ttu">
              No.17/1, 5th St, Indira Nagar, <br /> Virugambakkam, Chennai -
              600092
            </a>
          </span>

          <div className="flexCenter f-menu">
            <NavLink to="/residencies">Residencies</NavLink>
            <NavLink to="/lands">Lands</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <a href="mailto:vsvreality@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
