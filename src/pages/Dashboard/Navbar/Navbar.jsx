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
        <div>
          <div className="logo-container">
            <span>Cod</span>
            <span>In</span>
          </div>
        </div>
        <div className="profile-container responsive">
          <div className="profile-custom responsive">
            <Notification />
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}
