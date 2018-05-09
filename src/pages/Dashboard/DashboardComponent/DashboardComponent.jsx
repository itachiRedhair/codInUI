import React, { Component } from "react";
import { Row, Col, Grid } from "react-bootstrap";

//Components imports
import Sidebar from "./../Sidebar";
import Navbar from "./../Navbar";
import Content from "./../Content";

//Styles imports
import "./DashboardComponent.scss";

export default class DashboardComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="dashboard-container">
          <Navbar />
          <Row className="dashboard-row-container">
            <Col md={2} className="sidebar-container responsive">
              <Sidebar />
            </Col>
            <Col md={10} className="dashboard-content-container">
              <Content />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
