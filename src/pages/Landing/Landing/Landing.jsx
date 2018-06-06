import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Components imports
import AddProjectComponent from './../../../components/AddProjectComponent';

// API imports
import { getUser } from '../../../utilities/api';

// Styles imports
import './Landing.scss';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.recentList();
    getUser()
      .then((response) => {
        this.setState({
          /* eslint no-underscore-dangle: 0 */
          userDataId: response._id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onProjectClicked = (e) => {
    this.props.setProjectId(e.target.getAttribute('value'));
    this.props.setProjectName(e.target.getAttribute('value3'));
    this.props.setProjectType(e.target.getAttribute('value2'));
    this.props.listTslintReport(e.target.getAttribute('value'), 'week');
    // this.props.userDetails();
  };

  getRecentActivities = () => {
    let recentActivities = [];
    recentActivities = this.props.recentData.map((aRecentActivity) => (
      <ListGroupItem className="recent-activity-list-item" key={aRecentActivity.submitted_at}>
        <div>
          <span className="">{aRecentActivity.user}</span>
          <span className="text-muted"> has submitted a report in project </span>
          <span className="">{aRecentActivity.project}</span>
          <span className="recent-activity-from-now pull-right text-muted">
            <i className="fa fa-clock-o" /> {moment(aRecentActivity.submitted_at).fromNow()}{' '}
          </span>
        </div>
        <div className="recent-activity-summary-container">
          <span className="recent-activity-error text-danger">
            <i className="fa fa-times" /> {aRecentActivity.summary.lint.totalErrors}
          </span>
          {/* <span className="text-muted"> | </span> */}
          <span className="recent-activity-warning text-warning">
            <i className="fa fa-exclamation-triangle" />{' '}
            {aRecentActivity.summary.lint.totalWarnings}
          </span>
          {/* <span className="text-muted"> | </span> */}
          <span className="recent-activity-maintainability text-info">
            <i className="fa fa-area-chart" /> [ <i className="fa fa-angle-up text-success" />{' '}
            {aRecentActivity.summary.quality.averageMaintainability.toFixed(2)} |{' '}
            <i className="fa fa-angle-down text-danger" />{' '}
            {aRecentActivity.summary.quality.minMaintainability.toFixed(2)} ]
          </span>
        </div>
      </ListGroupItem>
    ));
    return recentActivities;
  };

  getProjects = () => {
    const projects = [];
    const contributorProjects = [];
    this.props.projects.map((project) => {
      const userIcon =
        project.created_by === this.state.userDataId ? (
          <i className="fa fa-user" />
        ) : (
          <i className="fa fa-user-o" />
        );

      const listGroupItem = (
        <ListGroupItem className="project-list-item" key={project._id}>
          <NavLink
            value3={project.name}
            value={project._id}
            value2={project.type}
            onClick={this.onProjectClicked}
            to="/dashboard/overview">
            {userIcon} | {project.name}
          </NavLink>
        </ListGroupItem>
      );

      if (project.created_by === this.state.userDataId) {
        projects.push(listGroupItem);
      } else {
        contributorProjects.push(listGroupItem);
      }
    });
    return { projects, contributorProjects };
  };

  showProjectModal = () => {
    this.props.setProjectModalState(true);
  };

  // TODO: The type of recent activity may change
  // Please have logic to prepareView According to the activity

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
                    <button className="btn btn-outline btn-success" onClick={this.showProjectModal}>
                      Add Project
                    </button>
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
                  Discover interesting projects and people to populate your personal news feed.
                </h4>
                <p className="f4">
                  Your news feed helps you keep up with recent activity on repositories you and
                  people you.
                </p>
              </div>
            </div>
          </Col>
          <Col md={9} className="recent-activities-container">
            <Panel className="panel-custom ">
              <Panel.Heading className="recent-activity-heading-custom">
                <Panel.Title>Recent Activities</Panel.Title>
              </Panel.Heading>
              <Panel.Body className="recent-activity-body-custom">
                {/* removed scrolling */}
                <ListGroup className="recent-activity-list-group">{recentActivities}</ListGroup>
              </Panel.Body>
            </Panel>
          </Col>
        </div>
        {this.props.showProjectModal && <AddProjectComponent />}
      </React.Fragment>
    );
  }
}

export default Landing;

Landing.propTypes = {
  recentList: PropTypes.func.isRequired,
  listTslintReport: PropTypes.func.isRequired,
  setProjectId: PropTypes.func.isRequired,
  setProjectName: PropTypes.func.isRequired,
  setProjectType: PropTypes.func.isRequired,
  setProjectModalState: PropTypes.func.isRequired,
  showProjectModal: PropTypes.bool.isRequired,
  recentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
