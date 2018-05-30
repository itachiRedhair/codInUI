import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './Notification.scss';

export default class Notification extends Component {
  componentDidMount() {

  }

  render() {
    const notificationIcon = <i className="fa fa-bell" />;
    return (
      <React.Fragment>
        <NavDropdown eventKey={3} title={notificationIcon}>
          <div className="notification-content">
            <span>
              <b>Jagdeep Soni</b> has invited you be to be a contributor of <b>Insite-UI@1.0.0</b>
            </span>
            <div className="btn-container">
              <button className="btn btn-outline btn-success" onClick={this.showProjectModal}>
                <i className="fa fa-check" /> Accept
              </button>
              <button className="btn btn-outline btn-danger" bsStyle="danger" onClick={this.showProjectModal}>
                <i className="fa fa-times" /> Decline
              </button>
            </div>
          </div>
          <div className="notification-content">
            <span>
              <b>Souvik</b> has invited you be to be a contributor of <b>Dashboard-UI@1.0.0</b>
            </span>
            <div className="btn-container">
              <button className="btn btn-outline btn-success" onClick={this.showProjectModal}>
                <i className="fa fa-check" /> Accept
              </button>
              <button className="btn btn-outline btn-danger" bsStyle="danger" onClick={this.showProjectModal}>
                <i className="fa fa-times" /> Decline
              </button>
            </div>
          </div>
        </NavDropdown>
      </React.Fragment>
    );
  }
}
