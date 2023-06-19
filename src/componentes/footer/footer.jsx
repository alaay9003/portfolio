import React from "react";
import "./footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="pt-5 pb-2 footer" id="about">
      <Container>
        <Row>
          <Col lg="6">
            <p className="title">Education</p>
            <p className="education">
              Graduated from Helwan univesity major in Compuer Science
            </p>
          </Col>
          <Col lg="3">
            <p className="title">Skils</p>
            <ul className="p-0 skill">
              <li>
                <CodeIcon className="icon" />
                <span>Front-End</span>
              </li>
              <li>
                <CodeOffIcon className="icon" />
                <span>Back-end</span>
              </li>
              <li>
                <TerminalIcon className="icon" />
                <span>Software-engneering</span>
              </li>
            </ul>
          </Col>
          <Col lg="3" className="cont">
            <p className="title">contact</p>
            <ul>
              <li>
                <LocalPhoneIcon className="icon" />
                <span>01270579984</span>
              </li>
              <li>
                <EmailIcon className="icon" />
                <span>Alaay9003@gmail.com</span>
              </li>
              <li>
                <HomeIcon className="icon" />
                <span>Egypt ,Cairo</span>
              </li>
            </ul>
          </Col>
          <div className="text-center mt-2">
            © 2023 Copyright:{" "}
            <span className="fw-bold main-color">Youssef Alaa</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
