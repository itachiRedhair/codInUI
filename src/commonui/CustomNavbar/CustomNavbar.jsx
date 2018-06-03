import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import Notification from "./Notification";
import Profile from "./Profile";
import "./CustomNavbar.scss";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    this.props.history.push("/landing");
  }
  handleLogout = () => {
    this.props.userLogOut();
  }


  render() {
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
            <NavDropdown eventKey={3} title={this.props.user ? this.props.user.name : ""} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} onClick={this.handleLogout}>Log Out <i className="fa fa-sign-out"></i></MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(CustomNavbar);
