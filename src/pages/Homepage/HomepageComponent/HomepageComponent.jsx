import React, { Component } from "react";
import { Row, Col, Grid } from "react-bootstrap";

import Login from "./../LoginComponent";
import Signup from "./../SignupComponent";

import "./HomepageComponent.scss";

export default class HomepageComponent extends Component {
  render() {
    return (
      <div className="homepage-container">
        <Grid>
          <Row>
            <Col md={6} mdPush={6} className="login-form-container">
              <Row className="login-form">
                <Col md={10} mdOffset={1}>
                  <Login />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
