import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavDropdown } from 'react-bootstrap';
import './Notification.scss';
import { notificationUpdate } from './../../../utilities/api';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bellIcon: true,
    };
  }

  componentDidMount() {}

  handleAcceptInvitation = (e) => {
    this.props.respondInvitation(true, e.target.getAttribute('value'));
  };

  handleDeclineInvitation = (e) => {
    this.props.respondInvitation(false, e.target.getAttribute('value'));
  };

  updateNotifications = () => {
    notificationUpdate(this.props.notificationIds).then(() => {
      this.setState({
        bellIcon: false,
      });
    });
  };

  render() {
    let notifications = [];
    let unseenCount = 0;
    const aliasAll = this.props.allNotifications;
    notifications = aliasAll.map((item) => {
      if (item.seen === false) {
        unseenCount += 1;
      }
      let actionContainer = null;
      if (item.details.responded === true) {
        actionContainer = (
          <div className="action-container text-muted">
            <div className={item.details.accepted ? 'accepted': 'declined'}>
              <i className="fas fa-exclamation-circle" /> Invitation was
              {item.details.accepted ? ' accepted' : ' declined'}
            </div>
            <div>
              <i className="far fa-clock" /> {moment(item.meta.created_at).fromNow()}{' '}
            </div>
          </div>
        );
      } else {
        actionContainer = (
          <div key={item._id} className="action-container">
            <button
              className="btn btn-outline btn-danger"
              bsstyle="danger"
              value={item.details.project._id}
              onClick={this.handleDeclineInvitation}>
              <i className="fa fa-times" /> Decline
            </button>
            <button
              className="btn btn-outline btn-success"
              value={item.details.project._id}
              onClick={this.handleAcceptInvitation}>
              <i className="fa fa-check" /> Accept
            </button>
            <div className="text-muted">
              <i className="far fa-clock" /> {moment(item.meta.created_at).fromNow()}{' '}
            </div>
          </div>
        );
      }
      const notificationElement = (
        <div
          key={item._id}
          className={`notification-content ${
            item.details.responded ? 'notification-responded' : ''
          }`}>
          <span className="text-muted">
            <span className="notification-highlight ">{item.details.inviter.name}</span> has invited
            you be to be a contributor of{' '}
            <span className="notification-highlight ">{item.details.project.name}</span>
          </span>
          {actionContainer}
        </div>
      );
      return notificationElement;
    });
    const notificationCount =
      this.state.bellIcon && unseenCount > 0 ? (
        <div className="unseen-content">
          <div className={unseenCount < 10 ? 'unseen-count' : 'unseen-count hide-unseen-count'}>
            {' '}
            {unseenCount}{' '}
          </div>
        </div>
      ) : null;
    const notificationIcon = (
      <span>
        <span className="notification-bell">
          <i className="fa fa-bell" />
          {notificationCount}
        </span>
      </span>
    );

    return (
      <React.Fragment>
        <NavDropdown
          id={1}
          onClick={this.props.unseenNotifications.length > 0 ? this.updateNotifications : null}
          eventKey={3}
          title={notificationIcon}
          className="notification-dropdown">
          {/* {notifications} */}
          {aliasAll.length > 0 ? (
            notifications
          ) : (
            <div className="notification-content no-notifications">No Notifications</div>
          )}
        </NavDropdown>
      </React.Fragment>
    );
  }
}

export default Notification;

Notification.propTypes = {
  respondInvitation: PropTypes.func.isRequired,
  notificationIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  allNotifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  unseenNotifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};
