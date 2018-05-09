import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

//Components imports
import TSLintBar from "./../../../components/TSLintBar";
import TSLintSunBurst from "./../../../components/TSLintSunBurst";
import TSLintSummary from "./../../../components/TSLintSummary";
import TSLintHistory from "./../../../components/TSLintHistory";
import TSLintHeatmap from "./../../../components/TSLintHeatmap";

//Syles imports
import "./TSLintReport.scss";

export default class TSLintReport extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="tslint-row-group col-container">
          <Col md={4} className="tslint-col">
            <TSLintSummary />
          </Col>
          <Col md={8} className="tslint-col">
            <TSLintHistory />
          </Col>
        </Row>
        <Row className="tslint-row-group col-container">
          <Col md={12} className="tslint-col">
            <TSLintHeatmap />
          </Col>
        </Row>
        <Row className="tslint-row-group col-container tslint-bar">
          <Col md={12} className="tslint-col">
            <TSLintBar />
          </Col>
          {/* <Col md={5} className="tslint-col">
            <TSLintSunBurst />
          </Col> */}
        </Row>
      </React.Fragment>
    );
  }
}

//TODO: Add prop-types here
