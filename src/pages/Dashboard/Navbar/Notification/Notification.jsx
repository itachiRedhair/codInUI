import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Overlay, Tooltip, OverlayTrigger, Popover } from "react-bootstrap";
import "./Notification.scss";

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidMount() {

    }

    render() {

        const popoverClickRootClose = (
            <Popover id="popover-trigger-click-root-close" title="Notifications">
                <div className="notification-panel">
                    <div className="notification-content">
                        <span className="not-desc">You have received an invitation from Abundavia</span>
                        <div className="btn-property">
                            <a className="btn btn-outline mt-2" onClick={this.showProjectModal}>Accept</a>
                            <a className="btn btn-outline mt-3 decline" onClick={this.showProjectModal}>Decline</a>
                        </div>
                    </div>
                    <div className="notification-content">
                        <span className="not-desc">You have received an invitation from Abundavia</span>
                        <div className="btn-property">
                            <a className="btn btn-outline mt-2" onClick={this.showProjectModal}>Accept</a>
                            <a className="btn btn-outline mt-3 decline" onClick={this.showProjectModal}>Decline</a>
                        </div>
                    </div>
                </div>
            </Popover>
        );
        return (
            <div>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="left"
                    overlay={popoverClickRootClose}
                >
                    <div className="notifications new align-new responsive" ref={button => {
                        this.target = button;
                    }} onClick={this.handleClicked}>
                        <a data-toggle="dropdown-menu" >
                            <i className="fa fa-bell-o align" />
                            <sup>
                                <span className="counter">8</span>
                            </sup>
                        </a>
                    </div>
                </OverlayTrigger>
            </div>
        );
    }
}
