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
    console.log("props in signup", props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
      register: false
    };
  }

  getValidationState = () => {};

  handleEmailChange = e => this.setState({ email: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleConfirmPasswordChange = e => this.setState({ confirm: e.target.value });

  handleSubmit = () => {
    console.log(this.state.email, this.state.password, this.state.confirm);
    this.props
      .userSignUp(this.state.email, this.state.password, this.state.confirm)
      .then(signup => {
        if (signup) {
          this.setState({ register: true });
        }
        console.log("signed up", signup);
      });
  };

  render() {
    const message = <div>Successfully Registered</div>;
    const email = this.state.email;
    const password = this.state.password;
    const confirm = this.state.confirm;
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
        {this.state.register ? message : null}
      </form>
    );
  }
}

export default withRouter(SignupComponent);

// TODO: Add prop-types here
