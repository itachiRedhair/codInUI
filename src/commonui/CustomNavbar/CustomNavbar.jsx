import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import Notification from './Notification';
import './CustomNavbar.scss';
import ChangePassword from './../../components/ChangePassword';

class CustomNavbar extends Component {

  handleChangePassword = () => {
    this.props.setChangePasswordModalState(true);
  }

  handleClick = () => {
    this.props.history.push('/landing');
  };
  handleLogout = () => {
    this.props.userLogOut();
  };

  render() {
    const title = (
      <span>
        <i className="fas fa-user-circle" /> {this.props.user.name}
      </span>
    );
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="logo-container" onClick={this.handleClick}>
                Cod<span>In</span>
              </div>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <Notification className="dropdown" />
            <NavDropdown eventKey={3} title={title} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} onClick={this.handleChangePassword}>
                <i className="fas fa-key" /> Change Password
              </MenuItem>
              <MenuItem eventKey={3.2} onClick={this.handleLogout}>
                <i className="fa fa-sign-out-alt" /> Log Out
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        {this.props.showChangePasswordModal && <ChangePassword />}
      </div>
    );
  }
}

export default withRouter(CustomNavbar);

CustomNavbar.propTypes = {
  userLogOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape().isRequired,
};
