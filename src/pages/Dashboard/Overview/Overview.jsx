import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

//Components imports
import OverviewGraph from "./../../../components/OverviewGraph";
import CPICard from "./../../../components/CPICard";
import RecentSubmits from "./../../../components/RecentSubmits";
import OverviewTsLint from "./../../../components/OverviewTsLint";
import OverviewCoverage from "./../../../components/OverviewCoverage";

//Syles imports
import "./Overview.scss";

export default class Overview extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="row-group">
          <Col md={9}>
            <OverviewGraph />
          </Col>
          <Col md={3}>
            <CPICard />
          </Col>
        </Row>
        <Row className="row-group">
          <Col md={5}>
            <OverviewTsLint />
          </Col>
          <Col md={2}>
            <OverviewCoverage />
          </Col>
          <Col md={5}>
            <RecentSubmits />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

//TODO: Add prop-types here
