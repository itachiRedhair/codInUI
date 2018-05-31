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
import "./LoginForm.scss";

class LoginComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      password: "",
      loginFailed: false,
      connectionFailed: false,
      serviceUnavailable: false
    };
  }

  getValidationState = () => { };

  handleEmailChange = e => this.setState({ email: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  handleSubmit = () => {
    this.props
      .userLogIn(this.state.email, this.state.password)
      .then((loginResponse) => {
        if (loginResponse._id) {
          this.props.history.push("/landing");
        }
        else if (loginResponse === 404) {
          this.setState({ connectionFailed: true })
        }
        else if (loginResponse === 401) this.setState({ loginFailed: true });
        else this.setState({ serviceUnavailable: true })
      });
  };

  render() {
    const email = this.state.email;
    const password = this.state.password;
    return (
      <form className="form-container" >
        {this.state.loginFailed ? (
          <div className="error-message">
            Email or password is incorrect.
                    </div>
        ) : this.state.connectionFailed ? (
          <div className="error-message">
            Connection Failed
                    </div>
        ) : null}
        <Input
          id="LoginEmail"
          type="text"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleEmailChange}
        />
        <Input
          id="LoginPassword"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <div className="form-action-container">
          <div className="signup-prompt text-muted" onClick={this.props.toggleSignup}>New Here? Sign up</div>

          <Button onClick={this.handleSubmit} className="btn btn-success">
            Login <i className="fa fa-caret-right" />
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginComponent);

// TODO: Add prop-types here
