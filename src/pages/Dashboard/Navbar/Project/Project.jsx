import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Project.scss';
import DropdownButton from "../../../../commonui/DropdownButton";
import { MenuItem } from 'react-bootstrap';


export default class Project extends Component {
    projectList = [
        { "name": "Project 1" },
        { "name": "Project 2" },
        { "name": "Project 3" },]


    render() {
        const projectDropdown = {
            background: 'transparent',
            color: 'blue',
            border: '#d7dde4',
            fontSize: '2rem',
            // boxShadow: 'none',
            marginLeft: '1rem'
        }
        return (
            <div className="profile dropdown">
                <DropdownButton
                    title="Project"
                    style={projectDropdown}
                    key="1"
                    id={`dropdown-basic-1`}
                    list={this.projectList} />
            </div>

        );
    }
}