import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

// styles
import "./ProgressBar.scss";

export default class ProgressBarComponent extends Component {
  render() {
    let backGround;
    if (this.props.value <= 20) {
      backGround = "danger";
    } else if (this.props.value <= 60) {
      backGround = "warning";
    } else {
      backGround = "success";
    }
 
    return (
      <div>
        <ProgressBar bsStyle={backGround} active now={this.props.value} />
      </div>
    );
  }
}
