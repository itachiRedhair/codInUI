import React, { Component } from "react";
import {
  Row,
  Col,
  Grid,
  Tabs,
  Tab,
  TabContainer,
  TabContent,
  TabPane
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
      projects: [],
      submitList: []
    };
  }

  componentDidMount() {
    this.props.showProject().then(response => {
      this.setState({
        projects: response
      });
    });
    this.props.submissionList("5afae657aeae393c0889663b").then(response => {
      this.setState({
        submitList: response
      });
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
    // this.props.listTslintReport(e.target.getAttribute("value"), "week");
    this.props.setProjectId(e.target.getAttribute("value"));
    this.props.setProjectName(e.target.textContent);
    this.props.submissionList(e.target.getAttribute("value"));
  };

  render() {
    
    const setHeight = {
      height: "1.5em",
      color: "white"
    };
    const recentName = {
      color: "green"
    };
    var rows = [];
    let projects = [];
    let contributorProjects = [];
    let submits = [];
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
    if (this.state.submitList.length !== 0) {
      let sData = this.state.submitList;
      let submitLen = this.state.submitList.length;
      for (let i = submitLen - 1; i > 0; i--) {
        let divElement = (
          <div className="recent-activities">
            <div className="recent-activities-content">
              <div style={recentName}>{sData[i].meta.submitted_by.name}</div>has
              submitted Project Bluebridge(angular)
            </div>
            <div className="recent-activities-time">
              Submitted On: {new Date(sData[i].meta.submitted_at).toString()}
            </div>
          </div>
        );
        submits.push(divElement);
      }
    }
    const listStyle = {
      listStyle: "none"
    };

    if (this.state.projects.length === 0) {
      return <div>Sorry, no value available</div>;
    } else {
      return (
        <React.Fragment>
          <Navbar />
          <div className="landing-container">
            <div className="landing-sidebar">
              <div className="newsfeed-placeholder p-5">
                <h3 className="h2 lh-condensed mb-2">
                  Discover interesting projects and people to populate your
                  personal news feed.
                </h3>
                <p className="f4">
                  Your news feed helps you keep up with recent activity on
                  repositories you and people you
                </p>
                <a className="btn btn-outline mt-2">Explore Codin</a>
              </div>
              <div className="box box-condensed mb-3">
                <div className="box-header">
                  <div>Repositories</div>
                  <div>
                    <a className="btn btn-outline mt-2">Add New</a>
                  </div>
                </div>
                <div style={listStyle} className="box-body">
                  {projects}
                  {contributorProjects}
                </div>
              </div>
            </div>
            <div className="landing-body">
              <div className="tab-container">
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title="Recent Activities">
                    <ul style={listStyle}>{submits}</ul>
                  </Tab>
                  <Tab eventKey={2} title="Explore Repositories">
                    {/* {contributorProjects} */}
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
