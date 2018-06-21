import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalBody, ModalHeader, Button, ModalFooter } from 'react-bootstrap';

// Components imports
import ModalComponent from '../../commonui/Modal';
import Input from '../../commonui/Input';
// Syles imports
import './ChangePassword.scss';

export default class ChangePassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      isOldPasswordValid: true,
      isNewPasswordValid: true,
      isConfirmNewPasswordValid: true,
    };
  }

  handleOldPasswordChange = (e) => {
    const oldPassword = e.target.value;
    this.setState({ oldPassword });
    if (oldPassword.length >= 6) {
      this.setState({ isOldPasswordValid: true });
    } else {
      this.setState({ isOldPasswordValid: false });
    }
  };

  handleNewPasswordChange = (e) => {
    const newPassword = e.target.value;
    this.setState({ newPassword });
    if (newPassword.length >= 6) {
      this.setState({ isNewPasswordValid: true });
    } else {
      this.setState({ isNewPasswordValid: false });
    }
  };

  handleConfirmNewPasswordChange = (e) => {
    const confirmNewPassword = e.target.value;
    this.setState({ confirmNewPassword });
    if (confirmNewPassword === this.state.newPassword) {
      this.setState({ isConfirmNewPasswordValid: true });
    } else {
      this.setState({ isConfirmNewPasswordValid: false });
    }
  };

  changePassword = (e) => {
    this.props
      .changePassword(
        this.props.user.email,
        this.state.oldPassword,
        this.state.newPassword,
        this.state.confirmNewPassword
      )
      .then((cp) => {
        if (cp) {
          this.props.userLogOut();
        }
      });
    e.preventDefault();
  };

  hideChangePasswordModal = () => {
    this.props.setChangePasswordModalState(false);
  };

  isFormInValid = () =>
    !this.state.isOldPasswordValid ||
    !this.state.isNewPasswordValid ||
    !this.state.isConfirmNewPasswordValid ||
    this.state.oldPassword === '' ||
    this.state.newPassword === '' ||
    this.state.confirmNewPassword === '';

  render() {
    const { oldPassword, newPassword, confirmNewPassword } = this.state;
    return (
      <div>
        <ModalComponent
          show={this.props.showChangePasswordModal}
          onHide={this.hideChangePasswordModal}>
          <ModalHeader className="add-project-modal-header">
            <span className="h4">
              <i className="fas fa-key" /> Change Password
            </span>
          </ModalHeader>
          <ModalBody className="change-password-modal-body">
            <div className="left">
              <form
                className="form-container"
                onSubmit={this.changePassword}
                id="change-password-form">
                <Input
                  id="OldPassword"
                  type="password"
                  autoFocus
                  label="Current Password"
                  placeholder="Enter your current password"
                  value={oldPassword}
                  className={!this.state.isOldPasswordValid ? 'invalid-field' : ''}
                  onChange={this.handleOldPasswordChange}
                  onKeyPress={this.handleKeyPress}
                />
                <Input
                  id="NewPassword"
                  type="password"
                  label="New Password"
                  placeholder="Enter the new password"
                  value={newPassword}
                  className={!this.state.isNewPasswordValid ? 'invalid-field' : ''}
                  onChange={this.handleNewPasswordChange}
                  onKeyPress={this.handleKeyPress}
                />
                <Input
                  id="ConfirmNewPassword"
                  type="password"
                  label="Confirm"
                  placeholder="Confirm the new password"
                  value={confirmNewPassword}
                  className={!this.state.isConfirmNewPasswordValid ? 'invalid-field' : ''}
                  onChange={this.handleConfirmNewPasswordChange}
                  onKeyPress={this.handleKeyPress}
                />
              </form>
            </div>
            <div className="right">
              <div className="text-muted">*The new password must be 6 characters long.</div>
            </div>
          </ModalBody>
          <ModalFooter className="">
            <Button bsStyle="default" onClick={this.hideChangePasswordModal}>
              Cancel
            </Button>
            <Button
              bsStyle="success"
              type="submit"
              form="change-password-form"
              disabled={this.isFormInValid()}
              onClick={this.addProject}>
              Change Password
            </Button>
          </ModalFooter>
        </ModalComponent>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
  showChangePasswordModal: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  userLogOut: PropTypes.func.isRequired,
  setChangePasswordModalState: PropTypes.func.isRequired,
};
