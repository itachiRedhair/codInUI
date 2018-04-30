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
          <Col md={3} mdPush={9} className="profile-container">
            <div className="profile-custom">
              <Notification />
              <Profile />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
