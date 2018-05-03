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
          <Col md={6} mdPush={6}>
            <Row>
              <Col md={7} mdPush={2} className="login-signup-container">
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
