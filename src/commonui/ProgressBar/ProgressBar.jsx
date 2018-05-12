import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

//styles
import "./ProgressBar.scss";

export default class ProgressBarComponent extends Component {
  render() {
    console.log(
      "-*----this.props in progress bar component-------",
      this.props
    );
    return <div>
        <ProgressBar active now={this.props.value} />
    </div>;
  }
}
