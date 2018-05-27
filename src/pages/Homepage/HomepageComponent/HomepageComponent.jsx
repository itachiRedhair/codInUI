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
  handleTestClick = e => {
    this.setState(prevState => {
      console.log(prevState);
      return { testClicked: !prevState.testClicked };
    });
  };
  render() {
    return (
      <div className="homepage-container">
        <Row>
          <Col className="background-alpha" md={7}>
            <div className="welcome-text-container">
              <div className="welcome-text-lg">Welcome to <span className="codin">Cod<span>In</span></span></div>
              <div className="welcome-text-sm">Login to access your projects and reports</div>
            </div>
          </Col>
          <Col md={5}>
            <Row>
              <Col className="login-signup-container">
                <div
                  className={`login-signup ${
                    this.state.isLogin ? "reveal" : ""
                    }`}
                >
                  <Login toggleSignup={this.toggleSignup} />
                </div>
                <div
                  className={`login-signup ${
                    !this.state.isLogin ? "reveal" : ""
                    }`}
                >
                  <Signup toggleLogin={this.toggleLogin} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
