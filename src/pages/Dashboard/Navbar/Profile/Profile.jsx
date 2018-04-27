import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Profile.scss';
import DropdownButton from "../../../../commonui/DropdownButton";
import { MenuItem } from 'react-bootstrap'

export default class Profile extends Component {
    profileList = [
        { "name": "Profile" },
        { "name": "Notifications" },
        { "name": "Settings" },
        { "name": "Logout" }]


    render() {
        return (

            <div className="profile dropdown">
                <DropdownButton
                    title="Profile"
                    key="1"
                    pullRight id="split-button-pull-right"
                    id={`dropdown-basic-1`}
                    list={this.profileList} />
            </div>

        );
    }
}