import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Sidebar.scss";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="sidebar-header">CodeIn</div>
                    <nav className="menu">
                        <ul className="sidebar-menu metismenu" id="sidebar-menu">
                            <li className="active">
                                <a>
                                    <i className="fa fa-tachometer" /> Overview
                                </a>
                            </li>
                            <div className="report-container">
                                <div className="reports">Reports</div>
                            </div>
                            <li className="active open bb">
                                <a href="">
                                    <i className="fa fa-file-text-o" /> TS Lint Report
                                            <i className="fa arrow" />
                                </a>
                            </li>
                            <li className="active open bb">
                                <a href="">
                                    <i className="fa fa-file-text-o" /> Coverage Report
                                            <i className="fa arrow" />
                                </a>
                            </li>
                            <li className="active open">
                                <a href="">
                                    <i className="fa fa-file-text-o" /> Side Report
                                            <i className="fa arrow" />
                                </a>
                            </li>
                            <div className="report-container">
                                <div className="reports">Application</div>
                            </div>
                            <li className="active open bb">
                                <a href="">
                                    <i className="fa fa-file-text-o" /> Feedback
                                            <i className="fa arrow" />
                                </a>
                            </li>
                            <li className="active open">
                                <a href="">
                                    <i className="fa fa-cog" /> Settings
                                            <i className="fa arrow" />
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
            </div>
        );
    }
}
