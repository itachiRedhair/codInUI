import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// Components imports
import Input from './../../../commonui/Input';

// styles
import './../../../styles/_form.scss';
import './LoginForm.scss';

class LoginComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = Object.assign({}, this.INITIAL_STATE);
  }

  getValidationState = () => {};

  INITIAL_STATE = {
    email: '',
    password: '',
    isEmailValid: true,
  };

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
    this.setState({ password: e.target.value });
  };

  handleKeyPress = (target) => {
    const { isEmailValid, password } = this.state;
    const isDisabled = !isEmailValid || password === '';

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
    this.props
      .userLogIn(this.state.email, this.state.password)
      .then((loginResponse) => {
        if (loginResponse._id) {
          // const { from } = this.props.location.state || { from: { pathname: '/landing' } };
          this.props.history.push({ pathname: '/landing' });
        }
      })
      .catch(() => {
        this.setState(this.INITIAL_STATE);
      });
  };

  render() {
    const { email, password, isEmailValid } = this.state;
    return (
      <form className="form-container">
        <Input
          id="LoginEmail"
          type="text"
          autoFocus
          label="Email"
          placeholder="someone@example.com"
          value={email}
          className={!isEmailValid ? 'invalid-field' : ''}
          onChange={this.handleEmailChange}
          onKeyPress={this.handleKeyPress}
        />
        <Input
          id="LoginPassword"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handlePasswordChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="form-action-container">
          <div className="signup-prompt text-muted" onClick={this.props.toggleSignup}>
            New Here? Sign up
          </div>

          <Button
            onClick={this.handleSubmit}
            bsStyle="success"
            disabled={!isEmailValid || password === ''}>
            Login <i className="fa fa-caret-right" />
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginComponent);

LoginComponent.propTypes = {
  userLogIn: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  // location: PropTypes.shape().isRequired,
  toggleSignup: PropTypes.func.isRequired,
};
