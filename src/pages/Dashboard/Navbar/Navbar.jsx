import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Grid } from "react-bootstrap";
import Notification from "./Notification";
import Profile from "./Profile";
import Project from "./Project";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <Row className="navbar-row">
          <Col md={3}>
            <div className="logo-container">
              <span>Cod</span>
              <span>In</span>
            </div>
          </Col>
          <Col md={3} mdPush={6} className="profile-container responsive">
            <div className="profile-custom responsive">
              <Notification />
              <Profile />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
