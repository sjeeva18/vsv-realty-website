import React, { useRef } from "react";
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
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
