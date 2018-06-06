import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button, Panel, Well, Collapse } from 'react-bootstrap';

// Component imports
import Collaborator from './CollaboratorComponent';

// API imports

// Styles imports
import './Sidebar.scss';
import '../../../styles/_theme.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    // this.handleClicked = this.handleClicked.bind(this);
    this.state = {
      isStaticCodeAnalysisReportsOpen: true,
      isProjectConfigurationsOpen: false
    };
  }

  componentDidMount() {
    this.props.showProject();
  }

  handleProjectInfoClick = (e) => {
    e.preventDefault();
    this.setState(({ showProjectDropdownContent }) => ({
      showProjectDropdownContent: !showProjectDropdownContent
    }));
  };

  handleClicked = (e) => {
    this.props.listTslintReport(e.target.getAttribute('value'), 'week');
    this.props.submissionList(e.target.getAttribute('value'));
    this.props.setProjectId(e.target.getAttribute('value'));
    this.props.setProjectName(e.target.textContent);
    this.props.listTslintReport(e.target.getAttribute('value'), 'week');
    this.props.userDetails();
  };

  addCollaboratorModal = () => {
    this.props.setModalState(true);
  };

  toggleAccordion = () => {};

  render() {
    return (
      <div className="sidebar-main-container">
        <Panel className="panel-custom">
          <Panel.Heading className="panel-heading-custom">
            <Panel.Title componentClass="h3">
              <div className="panel-heading-container">{this.props.projectName}</div>
              <div className="project-summary text-muted">
                <span>{this.props.projectType}</span>
                <span>|</span>
                <span>
                  {' '}
                  <i className="fa fa-calendar" /> 03/04/2018
                </span>
                <span>|</span>
                <span>
                  <i className="fa fa-user" />&nbsp;5
                </span>
              </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body className="panel-body-custom">
            <Button
              className={
                this.state.isStaticCodeAnalysisReportsOpen
                  ? 'accordion-button accordion-button-active'
                  : 'accordion-button'
              }
              onClick={() =>
                this.setState({
                  isStaticCodeAnalysisReportsOpen: !this.state.isStaticCodeAnalysisReportsOpen
                })
              }>
              Static Code Analysis Reports{' '}
              <i
                className={
                  this.state.isStaticCodeAnalysisReportsOpen ? 'fa fa-caret-up' : 'fa fa-caret-down'
                }
              />
            </Button>
            <Collapse in={this.state.isStaticCodeAnalysisReportsOpen}>
              <div>
                <Well>
                  <ul>
                    <li>
                      <NavLink
                        className="navlink"
                        activeClassName="navlink-active"
                        to="/dashboard/overview">
                        <i className="fa fa-tachometer" /> | Overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="navlink"
                        activeClassName="navlink-active"
                        to="/dashboard/tslint">
                        <i className="fa fa-book" /> | Lint Reports
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="navlink"
                        activeClassName="navlink-active"
                        to="/dashboard/coverage">
                        <i className="fa fa-line-chart" /> | Code Coverage
                      </NavLink>
                    </li>
                  </ul>
                </Well>
              </div>
            </Collapse>
            <Button
              className={
                this.state.isProjectConfigurationsOpen
                  ? 'accordion-button accordion-button-active'
                  : 'accordion-button'
              }
              onClick={() =>
                this.setState({
                  isProjectConfigurationsOpen: !this.state.isProjectConfigurationsOpen
                })
              }>
              Project Configuration{' '}
              <i
                className={
                  this.state.isProjectConfigurationsOpen ? 'fa fa-caret-up' : 'fa fa-caret-down'
                }
              />
            </Button>
            <Collapse in={this.state.isProjectConfigurationsOpen}>
              <div>
                <Well>
                  <ul>
                    <li>
                      <NavLink
                        className="navlink"
                        activeClassName="navlink-active"
                        onClick={this.addCollaboratorModal}
                        to="#"
                      >
                        <i className="fa fa-user-plus" /> | Invite A Contributor
                      </NavLink>
                    </li>
                  </ul>
                </Well>
              </div>
            </Collapse>
          </Panel.Body>
        </Panel>
        {this.props.showModal && <Collaborator projectId={this.props.projectId} />}
      </div>
    );
  }
}

export default Sidebar;

Sidebar.propTypes = {
  showProject: PropTypes.func.isRequired,
  listTslintReport: PropTypes.func.isRequired,
  submissionList: PropTypes.func.isRequired,
  setProjectId: PropTypes.func.isRequired,
  setProjectName: PropTypes.func.isRequired,
  userDetails: PropTypes.func.isRequired,
  setModalState: PropTypes.func.isRequired,
  projectName: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  showModal: PropTypes.string.isRequired
};
