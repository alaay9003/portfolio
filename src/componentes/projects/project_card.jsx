import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./project.css";

const Project_card = ({ img, tecnology, title, link, git }) => {
  const onclick = () => {};
  return (
    <div className="mb-5 mt-5 ms-auto me-auto project">
      <Card style={{ width: "24rem" }} className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-uppercase fw-bold card-title">
            {title}
          </Card.Title>
          <Card.Text>
            <span className="tecnology">tecnology</span> :{" "}
            <span className="text-black-50">{tecnology}</span>
          </Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
          <a href={link} className="main-btn ">
            View
          </a>
          <a href={git} className="main-btn ">
            Source code
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project_card;
