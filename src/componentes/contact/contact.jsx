import React, { useRef } from "react";
import "./contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Container } from "react-bootstrap";
import mail from "../img/Sending emails_Monochromatic (1).png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9gfful9",
        "template_ljr2oag",
        form.current,
        "AwwhwTC5RS-4YwE2y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("message").style.display = "block";
    setTimeout(() => {
      document.getElementById("message").style.display = "none";
    }, 2000);
    e.target.reset();
  };

  return (
    <div
      className="contact  justify-content-center align-items-center d-flex"
      id="contact"
    >
      <Container>
        <div className="row align-items-center d-flex ">
          <div className="col-lg-6 left ">
            <h2 className="text-white text-uppercase fw-bold header mt-5 mb-2">
              Get in touch with Me
            </h2>
            <p className="fs-5 text-white  ms-4 mb-0">
              I'm Happy To Contact with You
            </p>
            <img src={mail} alt="" className="img" />
            {/* <MailOutlineIcon className="mail-icon" /> */}
          </div>
          <div className="col-lg-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex flex-column "
            >
              <input
                placeholder="Your Name"
                type="text"
                name="user_name"
                className="input mb-3"
              />
              <input
                placeholder="Your Email"
                type="email"
                name="user_email"
                required
                className="input mb-3"
              />
              <textarea
                rows={6}
                name="message"
                className="mb-3"
                placeholder="Write Your Message"
              />
              <button className="main-btn fw-bold " type="submit">
                Send
              </button>
              <p id="message" className="text-white mt-2 ms-2 ">
                massege was sent
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
