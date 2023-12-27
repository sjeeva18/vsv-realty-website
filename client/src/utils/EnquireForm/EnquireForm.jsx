import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getLand } from "../api";

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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <input type="submit" value="Send" />
              <Button variant="primary" onClick={handleShow} />

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{data?.phone}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
