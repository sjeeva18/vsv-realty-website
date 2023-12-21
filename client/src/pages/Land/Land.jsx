import React, { useRef } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import "./Land.css";
import { PuffLoader } from "react-spinners";
import { getLand } from "../../utils/api";
import { MdLocationPin } from "react-icons/md";
import { FaCheckCircle, FaCompass } from "react-icons/fa";
import { TbDimensions, TbRoad } from "react-icons/tb";
import emailjs from "@emailjs/browser";

const Land = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n6cdqef",
        "template_0k9z2bj",
        form.current,
        "5-hSzXVKfTZE_w87n"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["land", id], () =>
    getLand(id)
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
      <div className="flexColStart paddings innerWidth land-container">
        <img src={data?.image} alt="land image" />

        <div className="flexCenter land-details">
          {/*Left side*/}
          <div className="flexColStart left">
            {/* Head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                Rs. <span className="rupees">{data?.price}</span>
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <TbDimensions size={20} color="#1F3E72" />
                <span>{data?.dimension} Dimension</span>
              </div>
              <div className="flexStart facility">
                <FaCompass size={20} color="#1F3E72" />
                <span>{data?.facing} Facing</span>
              </div>
              <div className="flexStart facility">
                <TbRoad size={20} color="#1F3E72" />
                <span>{data?.facilities.Roadfeet} Road Feet</span>
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

        <div className="paddings innerWidth e-container">
          <span className="enquiryText">Enquire to Get Number</span>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label className="thirdText">Name</label>
              <div>
                <input type="text" name="user_name" />
              </div>
            </div>
            <div>
              <label className="thirdText">Phone Number</label>
              <div>
                <input type="number" name="user_phone" />
              </div>
            </div>
            <div>
              <label className="thirdText">Property Name</label>
              <div>
                <textarea name="user-prop" />
                <div>
                  <input
                    type="submit"
                    onOutsideClick={() => {
                      setMenuOpened(false);
                    }}
                    value="Send"
                    onClick={() => setMenuOpened((prev) => !prev)}
                  />
                  <div className="popup">
                    <FaCheckCircle size={50} className="thankicon" />
                    <h2>Thank You for Contacting VSV!</h2>
                    <div>{data?.phone}</div>
                    <button type="button" onClick="closePopup()">
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Land;
