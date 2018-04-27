import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

//Components imports
import OverviewGraph from "./../../../components/OverviewGraph";
import CPICard from "./../../../components/CPICard";
import RecentSubmits from "./../../../components/RecentSubmits";
import TSLintSummary from "./../../../components/TSLintSummary";
import CoverageSummary from "./../../../components/CoverageSummary";

//Syles imports
import "./Overview.scss";

export default class Overview extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="overview-row-group">
          <Col md={9} className="overview-col">
            <OverviewGraph />
          </Col>
          <Col md={3} className="overview-col">
            <CPICard />
          </Col>
        </Row>
        <Row className="overview-row-group">
          <Col md={5} className="overview-col">
            <TSLintSummary />
          </Col>
          <Col md={2} className="overview-col">
            <CoverageSummary />
          </Col>
          <Col md={5} className="overview-col">
            <RecentSubmits />
          </Col>
        </Row>
        <Row className="overview-row-group">
          <Col md={5} className="overview-col">
            <TSLintSummary />
          </Col>
          <Col md={2} className="overview-col">
            <CoverageSummary />
          </Col>
          <Col md={5} className="overview-col">
            <RecentSubmits />
          </Col>
        </Row>
        <Row className="overview-row-group">
          <Col md={5} className="overview-col">
            <TSLintSummary />
          </Col>
          <Col md={2} className="overview-col">
            <CoverageSummary />
          </Col>
          <Col md={5} className="overview-col">
            <RecentSubmits />
          </Col>
        </Row>
        <Row className="overview-row-group">
          <Col md={5} className="overview-col">
            <TSLintSummary />
          </Col>
          <Col md={2} className="overview-col">
            <CoverageSummary />
          </Col>
          <Col md={5} className="overview-col">
            <RecentSubmits />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

//TODO: Add prop-types here
