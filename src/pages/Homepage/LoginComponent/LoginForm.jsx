import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Route, withRouter, Link } from "react-router-dom";

//Components imports
import Input from "./../../../commonui/Input";
import Button from "./../../../commonui/Button";
import Checkbox from "./../../../commonui/Checkbox";

//Constants imports
import constants from "./../../../constants";

//styles
import "./../../../styles/_form.scss";
import "./loginForm.scss";

class LoginComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      password: "",
      loginFailed: false
    };
  }

  getValidationState = () => {};

  handleEmailChange = e => this.setState({ email: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleSubmit = () => {
    console.log(this.state.email, this.state.password);
    this.props
      .userLogIn(this.state.email, this.state.password)
      .then(isLoggedIn => {
        if (isLoggedIn) this.props.history.push("/dashboard/overview");
        else this.setState({ loginFailed: true });
      });
  };

  render() {
    const email = this.state.email;
    const password = this.state.password;
    return (
      <form className="form-container" autoComplete="on">
        {this.state.loginFailed ? (
          <div className="error-message">
            Username or password is incorrect.
          </div>
        ) : null}

        <Input
          id="LoginEmail"
          type="text"
          label="Email"
          placeholder="Enter your email id."
          value={email}
          onChange={this.handleEmailChange}
        />
        <Input
          id="LoginPassword"
          type="password"
          label="Password"
          placeholder="Password please."
          value={password}
          onChange={this.handlePasswordChange}
        />
        <Checkbox list={[`Keep me logged in`]} />
        <Row>
          <Col md={3} mdPush={8}>
            <Button onClick={this.handleSubmit} className="login-button">
              Login <i className="fas fa-arrow-right arrow-icon" />
            </Button>
          </Col>
        </Row>
        <div className="signup-prompt" onClick={this.props.toggleSignup}>
          New Here? Sign up.
        </div>
      </form>
    );
  }
}

export default withRouter(LoginComponent);

// TODO: Add prop-types here
