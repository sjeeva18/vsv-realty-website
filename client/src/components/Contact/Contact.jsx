import React from "react";
import "./Contact.css";
import { MdCall, MdMail } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="thirdText">
            We always ready to help by providing the best services for you.{" "}
            <br /> We believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexCenter row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="thirdText">+91 81900 38839</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:8190038839">Call Now</a>
                </div>
              </div>

              {/*second mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="thirdText">+91 81900 38839</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://wa.me/8190038839">Chat Now</a>
                </div>
              </div>

              {/*third mode*/}
              <div className="flexCenter row">
                <div className="flexColStart mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdMail size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Mail</span>
                      <span className="thirddText">vsvreality@gmail.com</span>
                    </div>
                  </div>
                  <div className="flexCenter button">
                    <a href="mailto:vsvreality@gmail.com">Mail Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter c-right">
          <div className="cimage-container">
            <img src="./5f4fc83bb484476a40e95960_1599064123104.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
