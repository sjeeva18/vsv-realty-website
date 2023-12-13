import React from "react";
import "./Testimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <section className="test">
      <div className="paddings innerWidth flexColStart">
        <span className="orangeText">Let Swipe for Our Mentors</span>
        <span className="primaryText">Best in the Business</span>
      </div>
      <Swiper>
        <SwiperSlide>
          <div className="paddings innerWidth flexCenter testimonial">
            <div className="testi">
              <div className="testi-content">
                <div className="slide">
                  <img
                    src="https://i.ibb.co/Km4tv5d/Whats-App-Image-2023-11-26-at-7-00-09-PM-1.jpg"
                    alt=""
                    className="imagg"
                  />

                  <p className="fourthText">
                    With over 15 years of unparalleled expertise in the real
                    estate ,your go-to authority for all things property. Armed
                    with an authorized registered certificate, his commitment to
                    excellence ensures your real estate journey is not just a
                    transaction but a seamless experience. Choose expertise,
                    choose N. Murugan for your real estate endeavors.
                  </p>

                  <ImQuotesLeft className="quote-icon" />

                  <div className="details">
                    <span className="peru">N. Murugan MA, LLB. (Founder)</span>
                    <span className="cmpny">VSV REALTY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="paddings innerWidth flexCenter testimonial">
            <div className="testi">
              <div className="testi-content">
                <div className="slide">
                  <img
                    src="https://i.ibb.co/jkdj8Jc/Whats-App-Image-2023-11-26-at-7-02-28-PM.jpg"
                    alt=""
                    className="imagg"
                  />

                  <p className="fourthText">
                    Embark on a property journey with confidence, guided by K.
                    Saravana Kumar, a seasoned professional with more than 6
                    years of hands-on experience in the real estate market. As
                    your trusted agent
                  </p>

                  <ImQuotesLeft className="quote-icon" />

                  <div className="details">
                    <span className="peru">K. Saravana Kumar (Co-Founder)</span>
                    <span className="cmpny">VSV REALTY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="paddings innerWidth flexCenter testimonial">
            <div className="testi">
              <div className="testi-content">
                <div className="slide">
                  <img
                    src="https://i.ibb.co/gWVg8DL/Whats-App-Image-2023-12-12-at-10-15-20-AM.jpg"
                    alt=""
                    className="imagg"
                  />

                  <p className="fourthText">
                    Meet Tamil Selvan, your gateway to seamless real estate
                    solutions. With a passion for turning dreams into addresses,
                    I, along with a team of seasoned professionals, specialize
                    in assisting individuals to secure their own piece of luxury
                    in the heart of the city. Let's transform aspirations into
                    reality – welcome home!
                  </p>

                  <ImQuotesLeft className="quote-icon" />

                  <div className="details">
                    <span className="peru">
                      M. Tamil Selvan, B.COM. (Manager)
                    </span>
                    <span className="cmpny">VSV REALTY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="paddings innerWidth flexCenter testimonial">
            <div className="testi">
              <div className="testi-content">
                <div className="slide">
                  <img
                    src="https://i.ibb.co/2MZPLMp/IMG-20210408-161043sdada.jpg"
                    alt=""
                    className="imagg"
                  />
                  <p className="fourthText">
                    Introducing Mr. Jeevanandham, your dedicated partner in real
                    estate. With a wealth of experience, I collaborate with
                    seasoned professionals to turn your homeownership dreams
                    into reality. Let's navigate the path to your ideal
                    apartment in the heart of the city together.
                  </p>
                  <ImQuotesLeft className="quote-icon" />
                  <div className="details">
                    <span className="peru">
                      S. Jeevanandham, B.E. ECE. (Co-Manager)
                    </span>
                    <span className="cmpny">VSV REALTY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
