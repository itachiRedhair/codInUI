import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';

//components
import Input from './../../../commonui/Input';
import Checkbox from './../../../commonui/Checkbox';

//styles
import './../../../styles/_form.scss';
import './Signup.scss';

class SignupComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      register: false
    };
  }

  getValidationState = () => {};

  handleNameChange = (e) => this.setState({ name: e.target.value });

  handleEmailChange = (e) => this.setState({ email: e.target.value });

  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  handleConfirmPasswordChange = (e) => this.setState({ confirm: e.target.value });

  handleSubmit = () => {
    // console.log(this.state.email, this.state.password, this.state.confirm);
    this.props
    .userSignUp(this.state.name, this.state.email, this.state.password, this.state.confirm)
    .then(signup => {
      if (signup) {
        this.props.toggleLogin();
      }
      else {
        // TODO: Show some error
      }
    })
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
          placeholder="Enter your name"
          value={name}
          onChange={this.handleNameChange}
        />
        <Input
          id="SignupEmail"
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleEmailChange}
        />
        <Input
          id="SignupPassword"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <Input
          id="SignupConfirmPassword"
          type="password"
          label="Password"
          placeholder="Confirm the password"
          value={confirm}
          onChange={this.handleConfirmPasswordChange}
        />
        <div className="form-action-container">
          <div className="login-prompt text-muted" onClick={this.props.toggleLogin}>
            Have an account? Log in
          </div>
          <Button onClick={this.handleSubmit} className="btn btn-success">
            Signup <i className="fas fa-caret-right" />
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupComponent);

// TODO: Add prop-types here
