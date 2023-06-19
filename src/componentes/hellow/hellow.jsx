import { Container } from "react-bootstrap";
import "./hellowstyle.css";
import logo from "../Web Developer_Monochromatic.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Hellow = () => {
  return (
    <div className="hellow d-flex align-items-center">
      <Container>
        <div className="main row align-items-center">
          <div className="discribtion col-lg-6 col-sm-12 d-flex justify-content-center ">
            <div className="info  ">
              <p className="text-white fs-5 mb-0">Hello,I'm Youssef</p>
              <p className=" fs-2 fw-bold ms-3">Full-Stack Web Developer</p>
              <p className="text-white fw-bold fs-5  mb-4">
                I Create a WebApps
              </p>
              <a
                className="main-btn text-uppercase fw-bold text-white"
                href="#projects"
              >
                view my work
              </a>
              <div className="social d-flex justify-content-start align-items-center mt-4 mb-3">
                <a
                  href="https://www.linkedin.com/in/youssef-alaa-323341236/"
                  className="me-3"
                >
                  <LinkedInIcon className="icon" />
                </a>
                <a href="https://github.com/alaay9003" className="me-3">
                  <GitHubIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="img col-lg-6 col-sm-12 d-flex justify-content-center ">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hellow;
