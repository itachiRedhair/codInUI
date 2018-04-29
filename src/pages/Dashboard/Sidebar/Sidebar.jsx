import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

//Styles imports
import "./Sidebar.scss";
import "../../../styles/_theme.scss";

const navLinkActiveStyle = {
  fontWeight: "bold",
  background: "#242424",
  color: "white",
  paddingLeft: "1em",
  borderLeft: "0.5em solid green"
};

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProjectDropdownContent: false
    };
  }

  handleProjectInfoClick = e => {
    e.preventDefault();
    this.setState(({ showProjectDropdownContent }) => {
      return { showProjectDropdownContent: !showProjectDropdownContent };
    });
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <span>Cod</span>
          <span>In</span>
        </div>
        <div className="project-info" onClick={this.handleProjectInfoClick}>
          <div>
            <div className="project-name">
              Project 1 &nbsp;
              <i className="fas fa-pen-square " />
            </div>
            <div className="project-date">Created on: 25/04/2018</div>
          </div>
          {this.state.showProjectDropdownContent ? (
            <i className="fas fa-caret-up project-dropdown-icon" />
          ) : (
            <i className="fas fa-caret-down project-dropdown-icon" />
          )}
        </div>
        <div
          className={`project-dropdown-content ${
            this.state.showProjectDropdownContent ? "reveal" : ""
          }`}
        >
          <ul>
            <li>Collaborators</li>
            <li>Settings</li>
          </ul>
        </div>
        <nav className="menu">
          <ul className="sidebar-menu metismenu" id="sidebar-menu">
            <li className="active">
              <NavLink
                activeStyle={navLinkActiveStyle}
                to="/dashboard/overview"
              >
                <i className="fa fa-tachometer" /> Overview
              </NavLink>
            </li>
            <div className="report-container">
              <div className="reports">Reports</div>
            </div>
            <li className="active open bb">
              <NavLink activeStyle={navLinkActiveStyle} to="/dashboard/tslint">
                <i className="fa fa-file-text-o" /> TS Lint Report
              </NavLink>
            </li>
            <li className="active open bb">
              <NavLink
                activeStyle={navLinkActiveStyle}
                to="/dashboard/coverage"
              >
                <i className="fa fa-file-text-o" /> Coverage Report
              </NavLink>
            </li>
            <li className="active open">
              <NavLink
                activeStyle={navLinkActiveStyle}
                to="/dashboard/side-report"
              >
                <i className="fa fa-file-text-o" /> Side Report
              </NavLink>
            </li>
            <div className="report-container">
              <div className="reports">Application</div>
            </div>
            <li className="active open bb">
              <a href="">
                <i className="fa fa-file-text-o" /> Feedback
              </a>
            </li>
            <li className="active open">
              <a href="">
                <i className="fa fa-cog" /> Settings
              </a>
            </li>
            {/* <li className="active open">
                <a href="">
                  <i className="fa fa-th-large" /> Items Manager
                  <i className="fa arrow" />
                </a>
              </li>

              <li className="active open">
                <a href="">
                  <i className="fa fa-area-chart" /> Charts
                  <i className="fa arrow" />
                </a>
              </li>
              <li className="active">
                <a href="forms.html">
                  <i className="fa fa-pencil-square-o" /> Forms
                </a>
              </li>
              <li className="active open">
                <a href="">
                  <i className="fa fa-desktop" /> UI Elements
                  <i className="fa arrow" />
                </a>
              </li>

              <li className="active open">
                <a href="">
                  <i className="fa fa-file-text-o" /> Pages
                  <i className="fa arrow" />
                </a>
              </li>
              <li className="active">
                <a href="screenful.html">
                  <i className="fa fa-bar-chart" /> Agile Metrics{" "}
                  <span className="label label-screenful">by Screenful</span>
                </a>
              </li>
              <li className="active">
                <a href="https://github.com/modularcode/modular-admin-html">
                  <i className="fa fa-github-alt" /> Theme Docs
                </a>
              </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
