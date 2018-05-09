import React, { Component } from "react";
import { Media } from "react-bootstrap";

//Styles imports
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
          {this.props.title ? this.props.title : "Card Title"}
        </div>
        <div
          className={`card-content ${this.props.contentScroll ? "" : ""}`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
