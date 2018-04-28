import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import "../../../styles/_theme.scss";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">CodeIn</div>
        <div className="profile-sidebar">
          <div className="profile-pic">
            <img
              src="http://www.hrserviceinc.com/testsite/wp-content/uploads/2015/12/job_description.png"
              alt="..."
              className="img-circle profile_img"
            />
          </div>
          <div className="profile-info">
            <div>Project 1</div>
            <div>Created on: 25/04/2018</div>
            <div>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  //   background: "#f0f3f6",
                  color: "black"
                }}
                to="/dashboard/overview"
              >
                <i className="fa fa-users link" />
                <span className="link">Collaborators</span>
              </NavLink>
            </div>
          </div>
        </div>
        {/* <div className="partition"></div> */}
        <nav className="menu">
          <ul className="sidebar-menu metismenu" id="sidebar-menu">
            <li className="active">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  background: "#242424",
                  color: "white"
                }}
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
                activeStyle={{
                  fontWeight: "bold",
                  background: "#242424",
                  color: "white"
                }}
                to="/dashboard/tslint"
              >
                <i className="fa fa-file-text-o" /> TS Lint Report
              </NavLink>
            </li>
            <li className="active open bb">
              <a href="">
                <i className="fa fa-file-text-o" /> Coverage Report
              </a>
            </li>
            <li className="active open">
              <a href="">
                <i className="fa fa-file-text-o" /> Side Report
              </a>
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
