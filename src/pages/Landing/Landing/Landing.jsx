import React, { Component } from "react";
import moment from 'moment';

import {
  Row,
  Col,
  Grid,
  Tabs,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Panel,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

//Components imports
import AddProjectComponent from "./../../../components/AddProjectComponent";
// import CustomNavbar from "./../../CustomNavbar";
import FirstRender from "./../FirstRender";

//API imports
import { getUser } from "../../../utilities/api";

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

    this.props.recentList();
    this.props.showProject().then(response => {
      this.setState({
        projects: response
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
    this.props.setProjectId(e.target.getAttribute("value"));
    this.props.setProjectName(e.target.textContent);
    this.props.setProjectType(e.target.getAttribute("value2"))
    this.props.userDetails();
  };

  showProjectModal = () => {
    this.props.setProjectModalState(true);
  }

  getProjects = () => {
    const projects = [];
    const contributorProjects = [];
    this.state.projects.map(project => {

      const userIcon = (project.created_by === this.state.userDataId)
        ? <i className="fa fa-user" />
        : <i className="fa fa-user-o" />;

      const listGroupItem =
        <ListGroupItem className="project-list-item" key={project._id}>
          <NavLink value={project._id} value2={project.type} onClick={this.handleClicked} to="/dashboard/overview">
            {userIcon} | {project.name}
          </NavLink>
        </ListGroupItem>;

      if (project.created_by === this.state.userDataId) {
        projects.push(listGroupItem);
      } else {
        contributorProjects.push(listGroupItem);
      }
    });
    return { projects, contributorProjects };
  };


  // TODO: The type of recent activity may change
  // Please have logic to prepareView According to the activity
  getRecentActivities = () => {
    const recentActivities = [];
    this.props.recentData.map((aRecentActivity, index) => {
      const recentActivityView =
        <ListGroupItem className="recent-activity-list-item" key={index}>
          <div>
            <span className="">{aRecentActivity.user}</span><span class="text-muted"> has submitted a report in project </span><span className="">{aRecentActivity.project}</span>
            <span className="recent-activity-from-now pull-right text-muted"><i class="fa fa-clock-o" /> {moment(aRecentActivity.submitted_at).fromNow()} </span>
          </div>
          <div className="recent-activity-summary-container">
            <span className="recent-activity-error text-danger">
              <i className="fa fa-times" /> {aRecentActivity.summary.lint.totalErrors}
            </span>
            {/* <span className="text-muted"> | </span> */}
            <span className="recent-activity-warning text-warning">
              <i className="fa fa-exclamation-triangle" /> {aRecentActivity.summary.lint.totalWarnings}
            </span>
            {/* <span className="text-muted"> | </span> */}
            <span className="recent-activity-maintainability text-info">
              <i className="fa fa-area-chart" /> [ <i class="fa fa-angle-up text-success"></i> {aRecentActivity.summary.quality.averageMaintainability.toFixed(2)} | <i class="fa fa-angle-down text-danger"></i>  {aRecentActivity.summary.quality.minMaintainability.toFixed(2)} ]
            </span>
          </div>
        </ListGroupItem>;
      recentActivities.push(recentActivityView);
    });
    return recentActivities;
  }

  render() {
    const { projects, contributorProjects } = this.getProjects();
    const recentActivities = this.getRecentActivities();

    return (
      <React.Fragment>
        <div className="landing-container">
          <Col md={3} className="reset-col-padding">
            <div className="landing-sidebar">
              <Panel className="panel-custom">
                <Panel.Heading className="panel-heading-custom">
                  <Panel.Title componentClass="h3">Your Projects</Panel.Title>
                  <div>
                    <button className="btn btn-outline btn-success" onClick={this.showProjectModal}>Add Project</button>
                  </div>
                </Panel.Heading>
                <Panel.Body className="panel-body-custom">
                  <ListGroup>
                    {projects}
                    {contributorProjects}
                  </ListGroup>
                </Panel.Body>
              </Panel>
              {/* TODO: This should be shown when the user has no projects? */}
              <div className="newsfeed-placeholder">
                <h4 className="h4 lh-condensed">
                  Discover interesting projects and people to populate your
                  personal news feed.
                </h4>
                <p className="f4">
                  Your news feed helps you keep up with recent activity on
                  repositories you and people you.
                </p>
              </div>
            </div>
          </Col>
          <Col md={9} className="recent-activities-container" >
            <Panel className="panel-custom ">
              <Panel.Heading className="recent-activity-heading-custom">
                <Panel.Title>Recent Activities</Panel.Title>
              </Panel.Heading>
              <Panel.Body className="recent-activity-body-custom">
                <ListGroup scrolling className="recent-activity-list-group">
                  {recentActivities}
                </ListGroup>
              </Panel.Body>
            </Panel>
            {/* <div className="landing-body">
              <div className="tab-container">
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title="Recent Activities">
                    <ul style={submitlistStyle}>{submits}</ul>
                  </Tab>
                </Tabs>
              </div>
            </div> */}
          </Col>
        </div>
        {this.props.showProjectModal && (
          <AddProjectComponent />
        )}
      </React.Fragment>
    );
  }
}
