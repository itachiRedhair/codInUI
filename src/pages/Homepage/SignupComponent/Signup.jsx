import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Route, withRouter } from "react-router-dom";

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
      email: "",
      password: ""
    };
  }

  getValidationState = () => {};

  handleEmailChange = e => this.setState({ email: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleSubmit = () => {
    this.props.userLogIn("username", "password").then(() => {
      //TODO: route to dahsboard
      this.props.history.push("/dashboard/overview");
    });
  };

  render() {
    const email = this.state.email;
    const password = this.state.password;
    return (
      <form className="form-container">
        <Input
          id="formControlEmail"
          type="email"
          label="Email"
          placeholder="Enter your email id."
          value={email}
          onChange={this.handleEmailChange}
        />
        <Input
          id="formControlPassword"
          type="password"
          label="Password"
          placeholder="Password please."
          value={password}
          onChange={this.handlePasswordChange}
        />
        <Input
          id="formControlConfirmPassword"
          type="password"
          label="Password"
          placeholder="Confirm Password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <Row>
          <Col md={3} mdPush={9}>
            <Button onClick={this.handleSubmit} className="login-button">
              Signup <i className="fas fa-arrow-right arrow-icon" />
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default withRouter(SignupComponent);

// TODO: Add prop-types here
