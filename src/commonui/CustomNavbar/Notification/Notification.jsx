import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './Notification.scss';
import { notificationUpdate } from './../../../utilities/api';

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bellIconSelected: true,
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
        console.log("code");
        notificationUpdate(this.props.notificationIds).then(response => {
            console.log("-----response from status------", response);
        })
        this.setState({
            bellIconSelected: false
        })
    }

    render() {
        console.log("-----checking for id----", this.props.notificationIds)
        // const countElement = <div className="unseen-content">
        //                         <div className="unseen-count"> {unseenCount} </div>
        //                      </div>;
        let notifications = [];
        let unseenCount = 0;
        let alias = this.props.unseenNotifications;
        if (alias.length > 0) {
            unseenCount = alias.length;
            for (let i = 0; i < alias.length; i++) {
                const notificationElement =
                    <div className="notification-content">
                        <span>
                            <b>{alias[i].details.inviter.name}</b> has invited you be to be a contributor of <b>{alias[i].details.project.name}</b>
                        </span>
                        <div className="btn-container">
                            <button className="btn btn-outline btn-success" onClick={this.showProjectModal}>
                                <i className="fa fa-check" /> Accept
                        </button>
                            <button className="btn btn-outline btn-danger" bsStyle="danger" onClick={this.showProjectModal}>
                                <i className="fa fa-times" /> Decline
                        </button>
                        </div>
                    </div>;
                notifications.push(notificationElement);
            }
        }

        const notificationIcon = <i className="fa fa-bell" />;
        return (
            <React.Fragment>
                { this.state.bellIconSelected && alias.length>0 ? <div className="unseen-content">
                                <div className="unseen-count"> {unseenCount} </div>
                             </div> : null }
                <NavDropdown eventKey={3} title={notificationIcon} onClick={this.handleSelect} id="basic-nav-dropdown">
                    {notifications}
                </NavDropdown>
            </React.Fragment>
        );
    }
}
