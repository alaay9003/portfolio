import React from "react";
import Project_card from "./project_card";
import { Container } from "react-bootstrap";
import "./project.css";
import bondi from "../img/bondi_temp.png";
import playground from "../img/playground.png";
const Projects = () => {
  return (
    <div className="projects pt-5 pb-5" id="projects">
      <Container>
        <div className="title text-center mt-5 mb-5">
          <h2 className="text-uppercase fw-bold">projects</h2>
        </div>
        <div className="row d-flex flex-wrap">
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <Project_card
              img={bondi}
              title={"bondi Template"}
              tecnology={"bootstrap, html, css"}
              link={"#"}
              git={"#"}
            />
          </div>
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <Project_card
              img={bondi}
              title={"bondi Template"}
              tecnology={"bootstrap, html, css"}
              link={"#"}
              git={"#"}
            />
          </div>
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <Project_card
              img={playground}
              title={"bondi Template"}
              tecnology={"bootstrap, html, css"}
              link={"#"}
              git={"#"}
            />
          </div>
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <Project_card
              img={bondi}
              title={"bondi Template"}
              tecnology={"bootstrap, html, css"}
              link={"#"}
              git={"#"}
            />
          </div>
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <Project_card
              img={bondi}
              title={"bondi Template"}
              tecnology={"bootstrap, html, css"}
              link={"#"}
              git={"#"}
            />
          </div>
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <Project_card
              img={bondi}
              title={"bondi Template"}
              tecnology={"bootstrap, html, css"}
              link={"#"}
              git={"#"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
