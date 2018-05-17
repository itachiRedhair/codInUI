import React, { Component } from "react";
import {
  Row,
  Col,
  Grid, Tabs, Tab, TabContainer, TabContent, TabPane
} from "react-bootstrap";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

//Components imports

import Navbar from "./../../Navbar";

//API imports
import { getUser } from "../../../../utilities/api";

//Styles imports
import "./Landing.scss";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.props.showProject().then(response => {
      console.log("response", response);
      this.setState({
        projects: response
      })
    });
    getUser()
      .then(response => {
        this.setState({
          userDataId: response._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClicked = e => {
    this.props.listTslintReport(e.target.getAttribute("value"), "week");
    this.props.setProjectId(e.target.getAttribute("value"));
    this.props.setProjectName(e.target.textContent);
    this.props.submissionList(e.target.getAttribute("value"));
  }

  render() {

    console.log("[Dashboard Component render]: && this.state.isProjectSelected", this.state.projects);
    const setHeight = {
      height: "1.5em"
    };
    var rows = [];
    let projects = [];
    let contributorProjects = [];
    if (this.state.projects.length !== 0) {
      this.state.projects.map(project => {
        if (project.created_by == this.state.userDataId) {
          projects.push(
            <li>
              <NavLink
                key={project.name}
                value={project._id}
                style={setHeight}
                onClick={this.handleClicked}
                to="/dashboard/overview"
              >
                {project.name}
              </NavLink>
            </li>
          );
        } else {
          contributorProjects.push(
            <li>
              <NavLink
                key={project.name}
                value={project._id}
                style={setHeight}
                onClick={this.handleClicked}
                to="/dashboard/overview"
              >
                {project.name}
              </NavLink>
            </li>
          );
        }
      });
    }
    const listStyle = {
      listStyle: "none"
    }

    if (this.state.projects.length === 0) {
      return <div>Sorry, no value available</div>
    }
    else {
      return (
        <React.Fragment>
          <Navbar />
          <div className="landing-container">
            <div className="newsfeed-placeholder p-5">
              <h3 className="h2 lh-condensed mb-2">
                Discover interesting projects and people to populate your personal
                news feed.
                  </h3>
              <p className="f4">
                Your news feed helps you keep up with recent activity on
                repositories you and people you
                  </p>
              <a className="btn btn-outline mt-2">Explore Codin</a>
            </div>
            <div className="tab-container">
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Your Projects">
                  <ul style={listStyle}>
                    {projects}
                  </ul>

                  {/* your projects */}
                </Tab>
                <Tab eventKey={2} title="As Contributor">
                  {contributorProjects}
                  {/* contributor */}
                </Tab>
              </Tabs>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}



