import React, { useRef, useState } from "react";
import "./EnquireForm.css";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";

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
  const openPopup = document
    .querySelector("#openPopup")
    .addEventListener("click", function () {
      console.log(popup.classList.add("show"));
    });
  const popup = document.getElementById("popup");
  const closePopup = document
    .querySelector("#closePopup")
    .addEventListener("click", function () {
      console.log(popup.classList.remove("show"));
    });

  result(
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
                onClick="openPopup()"
              />
              <div className="popup" id="popup">
                <FaCheckCircle size={60} className="thankicon" />
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
  );
};

export default EnquireForm;
