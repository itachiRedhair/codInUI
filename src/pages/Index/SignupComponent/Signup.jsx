import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// components
import Input from './../../../commonui/Input';

// styles
import './../../../styles/_form.scss';
import './Signup.scss';

class SignupComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = Object.assign({}, this.INITIAL_STATE);
  }

  getValidationState = () => {};

  INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    isEmailValid: true,
    isPasswordValid: true,
    isConfirmPasswordValid: true,
  };

  handleNameChange = (e) => this.setState({ name: e.target.value });

  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(String(email).toLowerCase())) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  };

  handlePasswordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
    if (password.length >= 6) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false });
    }
  };

  handleConfirmPasswordChange = (e) => {
    const confirm = e.target.value;
    this.setState({ confirm });
    if (confirm === this.state.password) {
      this.setState({ isConfirmPasswordValid: true });
    } else {
      this.setState({ isConfirmPasswordValid: false });
    }
  };

  handleKeyPress = (target) => {
    const { isEmailValid, isConfirmPasswordValid, password } = this.state;
    const isDisabled = !isEmailValid || !isConfirmPasswordValid || password === '';

    if (target.charCode === 13 && !isDisabled) {
      this.handleSubmit({
        target: {
          disabled: false,
        },
      });
    }
  };

  handleSubmit = (e) => {
    if (e.target.disabled) return;
    // console.log(this.state.email, this.state.password, this.state.confirm);
    this.props
      .userSignUp(this.state.name, this.state.email, this.state.password, this.state.confirm)
      .then((signup) => {
        if (signup) {
          this.props.toggleLogin();
        } else {
          // TODO: Show some error
          this.setState(this.INITIAL_STATE);
        }
      })
      .catch(() => {
        this.setState(this.INITIAL_STATE);
      });
  };

  render() {
    const {
      name,
      email,
      password,
      confirm,
      isEmailValid,
      isPasswordValid,
      isConfirmPasswordValid,
    } = this.state;
    return (
      <form className="form-container">
        <Input
          id="SignupName"
          type="text"
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={this.handleNameChange}
          onKeyPress={this.handleKeyPress}
        />
        <Input
          id="SignupEmail"
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          className={!this.state.isEmailValid ? 'invalid-field' : ''}
          onChange={this.handleEmailChange}
          onKeyPress={this.handleKeyPress}
        />
        <Input
          id="SignupPassword"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          className={!this.state.isPasswordValid ? 'invalid-field' : ''}
          onChange={this.handlePasswordChange}
          onKeyPress={this.handleKeyPress}
        />
        <Input
          id="SignupConfirmPassword"
          type="password"
          label="Password"
          placeholder="Confirm the password"
          value={confirm}
          className={!this.state.isConfirmPasswordValid ? 'invalid-field' : ''}
          onChange={this.handleConfirmPasswordChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="form-action-container">
          <div className="login-prompt text-muted" onClick={this.props.toggleLogin}>
            Have an account? Log in
          </div>
          <Button
            onClick={this.handleSubmit}
            bsStyle="success"
            disabled={
              !isEmailValid || !isConfirmPasswordValid || !isPasswordValid || password === ''
            }>
            Signup <i className="fas fa-caret-right" />
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupComponent);

SignupComponent.propTypes = {
  userSignUp: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
};
