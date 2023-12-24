import React, { useRef, useState } from "react";
import "./EnquireForm.css";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";
import { getLand } from "../api";
import { useLocation } from "react-router-dom";

const EnquireForm = () => {
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

  const [setMenuOpened] = useState(false);
  const openPopup = document.querySelector(".openPopup");
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".closePopup");

  openPopup?.addEventListener("click", function () {
    popup.classList.add("show");
  });

  closePopup?.addEventListener("click", function () {
    popup.classList.remove("show");
  });

  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data } = useQuery(["land", id], () => getLand(id));
  console.log(data);

  return (
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
                onClick="openPopup"
                onOutsideClick={() => {
                  setMenuOpened(false);
                }}
                value="Send"
              />
              <div className="popup flexColStart show">
                <FaCheckCircle size={100} className="thankicon" />
                <h2>Thank You for Contacting VSV!</h2>
                <div>{data?.phone}</div>
                <button className="button flexCenter" onClick="closePopup">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
