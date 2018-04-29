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
        <Row className="dashboard-container">
          <Col md={2} className="sidebar-container">
            <Sidebar />
          </Col>
          <Col md={10} className="navbar-and-content-container">
            <Navbar />
            <Content />
          </Col>
        </Row>
    );
  }
}
