import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import Notification from "./Notification";
import Profile from "./Profile";
import Project from "./Project";
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
  // render() {
  //     return (
  //         <div className="header">
  //             {/* <Row className="navbar-row">
  //                 <Col md={3}>
  //                     <div className="logo-container" onClick={this.handleClick}>
  //                         <span>Cod</span>
  //                         <span>In</span>
  //                     </div>
  //                 </Col>
  //                 <Col md={3} mdPush={6} className="profile-container responsive">
  //                     <div className="profile-custom responsive">
  //                         <Notification />
  //                         <Profile />
  //                     </div>
  //                 </Col>
  //             </Row> */}
  //         </div>
  //     );
  // }

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
            <NavDropdown eventKey={3} title={this.props.user?this.props.user.name:""} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><div onClick={this.handleLogout}>LogOut</div></MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(CustomNavbar);
