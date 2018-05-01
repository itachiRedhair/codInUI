import React, { Component } from "react";
import { Row, Col, Grid } from "react-bootstrap";

import Login from "./../LoginComponent";
import Signup from "./../SignupComponent";

import "./HomepageComponent.scss";

export default class HomepageComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
      testClicked: false
    };
  }
  toggleLogin = () => {
    this.setState({
      isLogin: true
    });
  };
  toggleSignup = () => {
    this.setState({
      isLogin: false
    });
  };
  handleTestClick = prevState => {
    this.setState({
      testClicked: !prevState.testClicked
    });
  };
  render() {
    return (
      <div className="homepage-container">
        <Row>
          <Col md={6} mdPush={6}>
            <Row>
              <Col md={7} mdPush={2} className="login-signup-container">
                <div className="login-signup-button-container">
                  <button
                    className={`login-btn ${
                      this.state.isLogin ? "border-bottom" : ""
                    }`}
                    onClick={this.toggleLogin}
                  >
                    Login
                  </button>
                  <button
                    className={`signup-btn ${
                      this.state.isLogin ? "" : "border-bottom"
                    }`}
                    onClick={this.toggleSignup}
                  >
                    Signup
                  </button>
                </div>
                <div
                  className={`login-signup ${
                    this.state.testClicked ? "reveal" : ""
                  }`}
                >
                  {this.state.isLogin ? <Login /> : <Signup />}
                </div>
                <div onClick={this.handleTestClick}>test click</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
