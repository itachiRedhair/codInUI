import React, { Component } from 'react';
import PropTypes from 'prop-types';
import path from 'path';
import { NavLink, Link } from 'react-router-dom';
import { Button, Panel, Well, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import moment from 'moment';

// Component imports
import ContributorModal from './CollaboratorComponent';

import constants from '../../../constants';

// Styles imports
import './Sidebar.scss';
import '../../../styles/_theme.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStaticCodeAnalysisReportsOpen: true,
      isProjectConfigurationsOpen: false,
    };
  }

  getFaIconForProjectType = (_type) => {
    const type = _type.toLowerCase();
    const className = constants.projectIcons[type];
    if (className) {
      return <i className={className} />;
    }
    return null;
  };

  addCollaboratorModal = () => {
    this.props.setModalState(true);
  };

  getTooltip = () => (
    <Tooltip id={1}>
      <div className="config-tooltip-container">
        You can download the config file and place it inside{' '}
        <span className="highlight">
          {this.props.projectName.split('@')[0]}
          {path.sep}.codin
        </span>{' '}
        folder.
        <br />This will have the same effect as running{' '}
        <span className="highlight">{'"'}codin init{'"'}</span> in the project
        directory.
        <br />With the config file at the right place, you can execute{' '}
        <span className="highlight">{'"'}codin generate{'"'}</span> and{' '}
        <span className="highlight">{'"'}codin submit{'"'}</span> right away!
      </div>
    </Tooltip>
  );

  render() {
    const configURL = `${constants.API_URL}/v1/project/${this.props.projectId}/config`;
    return (
      <div className="sidebar-main-container">
        <Panel className="panel-custom">
          <Panel.Heading className="panel-heading-custom">
            <Panel.Title componentClass="h3">
              <div className="panel-heading-container">{this.props.projectName}</div>
              <div className="project-summary text-muted">
                <span>
                  {this.getFaIconForProjectType(this.props.projectType)} {this.props.projectType}
                </span>
                <span>|</span>
                <span>
                  {' '}
                  <i className="fa fa-calendar" />{' '}
                  {moment(this.props.createdAt).format('DD/MM/YYYY')}
                </span>
                <span>|</span>
                <span>
                  <i className="fa fa-user" />&nbsp;{this.props.contributors.length}
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
                  isStaticCodeAnalysisReportsOpen: !this.state.isStaticCodeAnalysisReportsOpen,
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
                        to={`${this.props.match.url}/overview`}>
                        <i className="fa fa-tachometer-alt" /> | Overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="navlink"
                        activeClassName="navlink-active"
                        to={`${this.props.match.url}/tslint`}>
                        <i className="fa fa-book" /> | Lint Reports
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="navlink"
                        activeClassName="navlink-active"
                        to={`${this.props.match.url}/coverage`}>
                        <i className="fa fa-chart-line" /> | Code Coverage
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
                  isProjectConfigurationsOpen: !this.state.isProjectConfigurationsOpen,
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
                        to="#">
                        <i className="fa fa-user-plus" /> | Invite A Contributor
                      </NavLink>
                    </li>
                    <li>
                      <OverlayTrigger placement="right" overlay={this.getTooltip()} trigger={['hover', 'focus']}>
                        <a className="navlink" activeClassName="navlink-active" href={configURL}>
                          <i className="fa fa-download" /> | Download Config File
                        </a>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </Well>
              </div>
            </Collapse>
          </Panel.Body>
        </Panel>
        {this.props.showModal && <ContributorModal />}
      </div>
    );
  }
}

export default Sidebar;

Sidebar.propTypes = {
  setModalState: PropTypes.func.isRequired,
  projectName: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  showModal: PropTypes.bool.isRequired,
  createdAt: PropTypes.number.isRequired,
  contributors: PropTypes.arrayOf(PropTypes.object).isRequired,
};
