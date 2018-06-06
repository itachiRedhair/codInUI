import React, { Component } from 'react';
// import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import {
  Row,
  Col,
} from 'react-bootstrap';

// Components imports
import Sidebar from './Sidebar';
import Content from './Content';
import CustomNavbar from '../../commonui/CustomNavbar';
import './DashboardComponent.scss';

export default class DashboardComponent extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <CustomNavbar />
        <div className="dashboard-container container">
          <Row className="dashboard-row-container">
            <Col md={3} className="sidebar-container responsive reset-col-padding">
              <Sidebar />
            </Col>
            <Col md={9} className="dashboard-content-container  reset-col-padding">
              <Content />
            </Col>
          </Row>
        </div>
      </React.Fragment >
    );
  }
}
