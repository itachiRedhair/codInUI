// import React, { Component } from "react";
// import { Route, Switch, withRouter, Redirect } from "react-router-dom";
// import { Nav,Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
// import Notification from "./Notification";
// import Profile from "./Profile";
// import Project from "./Project";
// import "./Navbar.scss";

// class Navbar extends Component {
//     constructor(props) {
//         super(props);
//     }
//     handleClick = () => {
//         this.props.history.push("/landing");
//     }
//     // render() {
//     //     return (
//     //         <div className="header">
//     //             {/* <Row className="navbar-row">
//     //                 <Col md={3}>
//     //                     <div className="logo-container" onClick={this.handleClick}>
//     //                         <span>Cod</span>
//     //                         <span>In</span>
//     //                     </div>
//     //                 </Col>
//     //                 <Col md={3} mdPush={6} className="profile-container responsive">
//     //                     <div className="profile-custom responsive">
//     //                         <Notification />
//     //                         <Profile />
//     //                     </div>
//     //                 </Col>
//     //             </Row> */}
//     //         </div>
//     //     );
//     // }

//     render() {
//         return (
//             <Navbar>
//                 <Navbar.Header>
//                     <Navbar.Brand>
//                         <a href="#home">React-Bootstrap</a>
//                     </Navbar.Brand>
//                 </Navbar.Header>
//                 <Nav>
//                     <NavItem eventKey={1} href="#">
//                         Link
//     </NavItem>
//                     <NavItem eventKey={2} href="#">
//                         Link
//     </NavItem>
//                     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                         <MenuItem eventKey={3.1}>Action</MenuItem>
//                         <MenuItem eventKey={3.2}>Another action</MenuItem>
//                         <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                         <MenuItem divider />
//                         <MenuItem eventKey={3.4}>Separated link</MenuItem>
//                     </NavDropdown>
//                 </Nav>
//             </Navbar>
//         )
//     }
// }

// export default withRouter(Navbar);