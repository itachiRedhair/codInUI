import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Row, Col, Grid } from "react-bootstrap";
import Notification from './Notification';
import Profile from './Profile';
import Project from './Project';
import './Navbar.scss';

export default class Navbar extends Component {
    render() {
        return (
            <Grid className="header">
                <Row className="navbar-row">
                    <Col md={9} className="project-container">
                        <Project />
                    </Col>
                    <Col md={3} className="profile-container">
                        <div className="profile-custom">
                            <Notification />
                            <Profile />
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
