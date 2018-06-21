import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Components imports
import AddProjectComponent from './../../../components/AddProjectComponent';

import constants from '../../../constants';

// Styles imports
import './Landing.scss';

class Landing extends Component {
  componentDidMount() {
    this.props.recentList();
  }

  getRecentActivities = () => {
    const recentActivities = this.props.recentData.map((aRecentActivity) => (
      <ListGroupItem className="recent-activity-list-item" key={aRecentActivity.submitted_at}>
        <NavLink
          to={`projects/${aRecentActivity.projectID}/${
            aRecentActivity.submitted_at
          }/dashboard/overview`}>
          <div key={aRecentActivity.projectID}>
            <span className="">
              {aRecentActivity.userID === this.props.user.id ? 'You' : aRecentActivity.user}
            </span>
            <span className="text-muted">
              {' '}
              {aRecentActivity.userID === this.props.user.id ? 'have' : 'has'} submitted a report in{' '}
            </span>
            <span className="">{aRecentActivity.project}</span>
            <span className="recent-activity-from-now pull-right text-muted">
              <i className="far fa-clock" /> {moment(aRecentActivity.submitted_at).fromNow()}{' '}
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
        </NavLink>
      </ListGroupItem>
    ));
    return recentActivities;
  };

  getFaIconForProjectType = (_type) => {
    const type = _type.toLowerCase();
    const className = constants.projectIcons[type];
    if (className) {
      return <i className={className} />;
    }
    return null;
  };

  getProjects = () => {
    const projects = [];
    const contributorProjects = [];
    this.props.projects.forEach((project) => {
      const userIcon =
        project.created_by === this.props.user.id ? (
          <i className="fa fa-user" />
        ) : (
          <i className="far fa-user" />
        );

      const listGroupItem = (
        <ListGroupItem className="project-list-item" key={project._id}>
          <NavLink to={`projects/${project._id}/Recent/dashboard/overview`}>
            {userIcon} | {this.getFaIconForProjectType(project.type)} {project.name}
          </NavLink>
        </ListGroupItem>
      );

      if (project.created_by === this.props.user.id) {
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
    const emptyRecentActivity = (
      <div className="empty-recent-activity-container text-muted">
        <span>
          <i className="fas fa-info-circle text-info" />
        </span>
        <span>You will see a list of activities when a report is submitted in your projects.</span>
      </div>
    );
    const recentActivityView =
      recentActivities.length === 0 ? (
        emptyRecentActivity
      ) : (
        <ListGroup className="recent-activity-list-group">{recentActivities}</ListGroup>
      );
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
                  Discover interesting projects to populate your personal activity feed.
                </h4>
                <p className="f4">
                  Your news feed helps you keep up with recent activity on repositories you and
                  people you know.
                </p>
              </div>
            </div>
          </Col>
          <Col md={9} className="recent-activities-container">
            <Panel className="panel-custom ">
              <Panel.Heading className="recent-activity-heading-custom">
                <Panel.Title>Recent Activities</Panel.Title>
              </Panel.Heading>
              <Panel.Body className="recent-activity-body-custom">{recentActivityView}</Panel.Body>
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
  setProjectModalState: PropTypes.func.isRequired,
  showProjectModal: PropTypes.bool.isRequired,
  recentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
