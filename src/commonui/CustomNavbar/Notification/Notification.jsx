import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './Notification.scss';
import { notificationUpdate } from './../../../utilities/api';

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bellIcon: true,
            notificationId: ""
        }
    }

    componentDidMount() {
        // this.props.fetchUnseenNotifications();

        this.setState({
            notificationId: this.props.unseenNotifications._id
        })
    }

    handleSelect = () => {
        notificationUpdate(this.props.notificationIds).then(response => {
        })
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

    render() {
        let notifications = [];
        let unseenCount = 0;
        let aliasUnseen = this.props.unseenNotifications;
        let aliasAll = this.props.allNotifications;
        if (aliasUnseen.length > 0) {
            unseenCount = aliasUnseen.length;
        }
        if (aliasAll.length > 0) {
            // unseenCount = aliasAll.length;
            for (let i = aliasAll.length - 1; i >= 0; i--) {
                const notificationElement =
                    <div className="notification-content">
                        <span>
                            <b>{aliasAll[i].details.inviter.name}</b> has invited you be to be a contributor of <b>{aliasAll[i].details.project.name}</b>
                        </span>
                        <div className="btn-container">
                            <button className="btn btn-outline btn-success" value={aliasAll[i].details.project._id} onClick={this.handleAcceptInvitation}>
                                <i className="fa fa-check" /> Accept
                        </button>
                            <button className="btn btn-outline btn-danger" bsStyle="danger" value={aliasAll[i].details.project._id} onClick={this.handleDeclineInvitation}>
                                <i className="fa fa-times" /> Decline
                        </button>
                        </div>
                    </div>;
                notifications.push(notificationElement);
            }
        }
        const notificationCount = (this.state.bellIcon && aliasUnseen.length > 0)
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
                <NavDropdown eventKey={3} title={notificationIcon} onClick={this.handleSelect} id="basic-nav-dropdown">
                    {notifications}
                    {aliasAll.length > 0 ? notifications : <div className="no-notifications">No Notifications...</div>}
                </NavDropdown>
            </React.Fragment>
        );
    }
}
