import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Route, withRouter, Link } from "react-router-dom";

//components
import Input from "./../../../commonui/Input";
import Button from "./../../../commonui/Button";
import Checkbox from "./../../../commonui/Checkbox";

//styles
import "./../../../styles/_form.scss";
import "./Signup.scss";

class SignupComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      register: false
    };
  }

  getValidationState = () => {};

  handleNameChange = e => this.setState({ name: e.target.value })

  handleEmailChange = e => this.setState({ email: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleConfirmPasswordChange = e => this.setState({ confirm: e.target.value });

  handleSubmit = () => {
    console.log(this.state.email, this.state.password, this.state.confirm);
    this.props
      .userSignUp(this.state.name, this.state.email, this.state.password, this.state.confirm)
      .then(signup => {
        if (signup) {
          this.setState({ register: true });
        }
        console.log("signed up", signup);
      });
  };

  render() {
    const message = <div>Successfully Registered</div>;
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const confirm = this.state.confirm;
    return (
      <form className="form-container">
        <Input
          id="SignupName"
          type="text"
          label="Name"
          placeholder="Enter your Name."
          value={name}
          onChange={this.handleNameChange}
        />
        <Input
          id="SignupEmail"
          type="email"
          label="Email"
          placeholder="Enter your email id."
          value={email}
          onChange={this.handleEmailChange}
        />
        <Input
          id="SignupPassword"
          type="password"
          label="Password"
          placeholder="Password please."
          value={password}
          onChange={this.handlePasswordChange}
        />
        <Input
          id="SignupConfirmPassword"
          type="password"
          label="Password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={this.handleConfirmPasswordChange}
        />
        <Row>
          <Col md={3} mdPush={8}>
            <Button onClick={this.handleSubmit} className="login-button">
              Signup <i className="fas fa-arrow-right arrow-icon" />
            </Button>
          </Col>
        </Row>
        {this.props.signedUp ? message : null}
        <div className="login-prompt" onClick={this.props.toggleLogin}>
          Log in.
        </div>
      </form>
    );
  }
}

export default withRouter(SignupComponent);

// TODO: Add prop-types here
