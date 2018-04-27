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
        {this.props.children}
      </div>
    );
  }
}

export default Card;
