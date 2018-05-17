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

//Components imports
import Sidebar from "./../Sidebar";
import Navbar from "./../Navbar";
import Content from "./../Content";

//Styles imports
import "./DashboardComponent.scss";

export default class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProjectSelected: false
    };
  }

  componentDidMount() {
      this.props.showProject();
  }

  showLanding = () => {


    var rows = [];
    let projects = [];
    let contributorProjects = [];
    if (this.props.projects.length !== 0) {
      this.props.projects.map(project => {
        if (project.created_by == this.state.userDataId) {
          projects.push(
            <li>
              <NavLink
                key={project._id}
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
                key={project._id}
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


    return (
      <div className="landing-container">
        <div class="newsfeed-placeholder p-5">
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
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Your Projects">
              Your Projects
            </Tab>
            <Tab eventKey={2} title="As Contributor">
              As Contributor
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  };
  showProjectLayout = () => {
    return (
      <div className="dashboard-container">
        <Navbar />
        <Row className="dashboard-row-container">
          <Col md={3} className="sidebar-container responsive">
            <Sidebar />
          </Col>
          <Col md={9} className="dashboard-content-container">
            <Content />
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {/* <div className="dashboard-container">
          <Navbar />
          <Row className="dashboard-row-container">
            <Col md={3} className="sidebar-container responsive">
              <Sidebar />
            </Col>
            <Col md={9} className="dashboard-content-container">
              <Content />
            </Col>
          </Row>
        </div> */}

      </React.Fragment>
    );
  }
}
