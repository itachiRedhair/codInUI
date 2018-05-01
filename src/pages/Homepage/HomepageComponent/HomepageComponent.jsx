import React, { Component } from "react";
import { Row, Col, Grid } from "react-bootstrap";

import Login from "./../LoginComponent";
import Signup from "./../SignupComponent";

import "./HomepageComponent.scss";

export default class HomepageComponent extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true
        }
    }
    toggleLogin = () => {
        this.setState({
            isLogin: true
        })
    }
    toggleSignup = () => {
        this.setState({
            isLogin: false
        })
    }
    render() {
        return (
            <div className="homepage-container">
                <Grid>
                    <Row>
                        {/* <Col md={6} mdPush={6} className="login-form-container"> */}
                            <div className="login-signup">
                                <div className="ls-content">
                                    <button className={`login-btn ${this.state.isLogin ? "border-bottom" : ""}`} onClick={this.toggleLogin}>Login</button>
                                    <button className={`signup-button ${this.state.isLogin ? "" : "border-bottom"}`} onClick={this.toggleSignup}>Signup</button>
                                </div>
                            </div>
                            <Row className="login-form">
                                <Col md={10} mdOffset={1}>
                                    {this.state.isLogin ? <Login /> : <Signup />}
                                </Col>
                            </Row>
                        {/* </Col> */}
                    </Row>
                </Grid>
            </div>
        );
    }
}
