import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Grid,
  Tabs,
  Tab,
  TabContainer,
  TabContent,
  TabPane
} from "react-bootstrap";

//Components imports
import Sidebar from "./../Sidebar";
import CustomNavbar from "./../CustomNavbar";
import Content from "./../Content";

//API imports
import { getUser } from "../../../utilities/api";

//Styles imports
import "./DashboardComponent.scss";

export default class DashboardComponent extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="dashboard-container">
          <CustomNavbar />
          <Row className="dashboard-row-container">
            <Col md={3} className="sidebar-container responsive">
              <Sidebar />
            </Col>
            <Col md={9} className="dashboard-content-container">
              <Content />
            </Col>
          </Row>
        </div>
      </React.Fragment >
    );
  }
}



