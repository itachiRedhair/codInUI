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


// API imports
// import { getUser } from '../../../utilities/api';

// Styles imports
import './DashboardComponent.scss';

export default class DashboardComponent extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <CustomNavbar />
        <div className="dashboard-container">
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
