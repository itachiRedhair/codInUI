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
    this.handleClicked = this.handleClicked.bind(this);
    this.state = {
      showProjectDropdownContent: false,
      projectList: ["Project 1", "Project 2", "Project 3"],
      selectedProject: "Project 1"
    };
  }

  componentDidMount() {
    this.props.showProject();
  }

  handleProjectInfoClick = e => {
    e.preventDefault();
    this.setState(({ showProjectDropdownContent }) => {
      return { showProjectDropdownContent: !showProjectDropdownContent };
    });
  };

  handleClicked(val) {
    this.setState({
      selectedProject: val.target.textContent,
      showProjectDropdownContent: false
    });
  }

  render() {
    var rows = [];
    console.log("******", this.props.projects);
    for (var i = 0; i < this.state.projectList.length; i++) {
      rows.push(
        <div key={i} onClick={this.handleClicked}>
          {this.state.projectList[i]}
        </div>
      );
    }
    return (
      <div className="sidebar">
        {/* <div className="sidebar-header">
          <span>Cod</span>
          <span>In</span>
        </div> */}
        <div className="project-info" onClick={this.handleProjectInfoClick}>
          <div>
            <div className="project-name">
              {this.state.selectedProject} &nbsp;
              <i className="fa fa-gear setting" />
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
          <div className="project-list">{rows}</div>
          <div className="add-project">
            <div>Add Project</div>
            <i className="fa fa-plus-circle fa-align" />
          </div>
        </div>
        <div
          className={`nav-container responsive ${
            this.state.showProjectDropdownContent ? "reveal" : ""
          }`}
        >
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
                <NavLink
                  activeStyle={navLinkActiveStyle}
                  to="/dashboard/tslint"
                >
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
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
