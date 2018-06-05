import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
var _ = require('lodash');
import './Notification.scss';
import { notificationUpdate } from './../../../utilities/api';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bellIcon: true,
      notificationId: "",
    }
  }

  componentDidMount() {
    // this.props.fetchUnseenNotifications();
    this.setState({
      notificationId: this.props.unseenNotifications._id
    })
  }

  handleSelect = () => {
    notificationUpdate(this.props.notificationIds);
    this.setState({
      bellIcon: false
    })
  }

  handleAcceptInvitation = e => {
    this.props.respondInvitation(true, e.target.getAttribute('value'));
  }

  handleDeclineInvitation = e => {
    this.props.respondInvitation(false, e.target.getAttribute('value'));
  }

  updateNotifications = () => {
    notificationUpdate(this.props.notificationIds).then(response => {
      this.setState({
        bellIcon: false
      })
    })
  }


  render() {
    let notifications = [];
    let unseenCount = 0;
    let aliasUnseen = this.props.unseenNotifications;
    let aliasAll = this.props.allNotifications;
    for (let i = 0; i < aliasAll.length; i++) {
      if (aliasAll[i].seen === false) {
        unseenCount++;
      }

      let actionContainer = null;
      if (aliasAll[i].details.responded === true) {
        if (aliasAll[i].details.accepted === true) {
          actionContainer =
            <div className="accept-container">Invitation was accepted</div>;
        } else {
          actionContainer =
            <div className="decline-container">Invitation was declined</div>
        }
      } else {
        actionContainer =
          <div className="btn-container">
            <button className="btn btn-outline btn-danger" bsStyle="danger" value={aliasAll[i].details.project._id} onClick={this.handleDeclineInvitation}>
              <i className="fa fa-times" /> Decline</button>
            <button className="btn btn-outline btn-success" value={aliasAll[i].details.project._id} onClick={this.handleAcceptInvitation}>
              <i className="fa fa-check" /> Accept</button>
          </div>
      }
      const notificationElement =
        <div className="notification-content">
          <span>
            <span className="notification-highlight">{aliasAll[i].details.inviter.name}</span> has invited you be to be a contributor of <span className="notification-highlight">{aliasAll[i].details.project.name}</span>
          </span>
          {actionContainer}
        </div>;
      notifications.push(notificationElement);
    }
    const notificationCount = (this.state.bellIcon && unseenCount > 0)
      ? (<div className="unseen-content">
        <div className={unseenCount < 10 ? "unseen-count" : "unseen-count hide-unseen-count"}> {unseenCount} </div>
      </div>)
      : null
    const notificationIcon =
      <span>
        <span className="notification-bell">
          <i className="fa fa-bell" />
          {notificationCount}
        </span>
      </span>;

    return (
      <React.Fragment>
        <NavDropdown onClick={this.updateNotifications} eventKey={3} title={notificationIcon} className="notification-dropdown">
          {/* {notifications} */}
          {aliasAll.length > 0 ? notifications : <div className="notification-content">No Notifications...</div>}
        </NavDropdown>
      </React.Fragment>
    )
  }
}
