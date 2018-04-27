import React from "react";
import { Media } from "react-bootstrap";

//Styles imports
import "./Card.scss";

export default ({ children, title = "Card Title" }) => (
  <div className="card">
    <Media>
      <Media.Body>
        <Media.Heading className="card-title">{title}</Media.Heading>
        {children}
      </Media.Body>
    </Media>
  </div>
);
