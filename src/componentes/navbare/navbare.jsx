import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";

const Navbare = () => {
  return (
    <div className="navbare">
      {" "}
      <Navbar expand="lg" className="position-fixed w-100 nav">
        <Container>
          <Navbar.Brand
            href="#"
            className="text-uppercase fw-bold ms-5 logo fs-4"
          >
            youssef
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
          <Navbar.Collapse id="">
            <Nav className="ms-auto me-5 ">
              <Nav.Link className="links ms-3" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="links ms-3" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="links ms-3" href="#about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbare;
