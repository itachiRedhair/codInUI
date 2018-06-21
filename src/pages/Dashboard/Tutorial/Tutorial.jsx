import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';

// Syles imports
import './Tutorial.scss';

class Tutorial extends Component {
  componentDidMount() {
    this.props.showProject();
  }

  render() {
    const shell = {
      topBar: (
        <div className="shell-title">
          <div className="icons">
            <i className="text-danger fa fa-circle" />
            <i className="text-warning fa fa-circle" />
            <i className="text-success fa fa-circle" />
          </div>
          <div className="user-name">
            {this.props.user.name} -- bash -- 80 <i className="fa fa-times" /> 24
          </div>
        </div>
      ),
      cursor: (
        <span className="cursor">
          {this.props.projectName}:~ {this.props.user.name}$
        </span>
      ),
      pwd: `\\Users\\${this.props.projectName}`,
    };
    const projectList = this.props.projects.map(
      (projectItem) =>
        this.props.projectName === projectItem.name ? (
          <div className="blue" key={projectItem._id}>
            <i className="fa fa-angle-right" /> {projectItem.name}
          </div>
        ) : (
          <div className="green" key={projectItem._id}>
            {projectItem.name}
          </div>
        )
    );
    if (this.props.user) {
      return (
        <div className="tutorial-container">
          <Well>
            <div>
              <i className="text-warning fa fa-exclamation-triangle" />
            </div>
            <div className="warning">
              <span>Looks like this project has no report submissions yet.</span>
              <span> Here is the guide to get you started with report submissions.</span>
            </div>
          </Well>
          <div>
            <ol className="steps">
              <li className="steps-space">
                Open up a terminal and navigate to your source directory
              </li>
              <li>
                Run <span className="command">codin init</span>
              </li>
              <div className="shell-wrap">
                <div className="shell-top-bar">{shell.topBar}</div>
                <ul className="shell-body">
                  <li>{shell.cursor} codin init</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>info: Initializing Code Investigator in &quot;{shell.pwd}&quot;</span>
                  </div>
                </ul>
              </div>
              <li>Login to Codin CLI if asked</li>
              <div className="shell-wrap">
                <div className="shell-top-bar">{shell.topBar}</div>
                <ul className="shell-body">
                  <li>{this.props.projectName}/ codin init</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>info: Initializing Code Investigator in &quot;{shell.pwd}&quot;</span>
                    <span>? Enter your email {this.props.user.email}</span>
                    <span>? Enter your password ********</span>
                  </div>
                </ul>
              </div>
              <li>Select the type of project(React/Angular) and register</li>
              <div className="shell-wrap">
                <div className="shell-top-bar">{shell.topBar}</div>
                <ul className="shell-body">
                  <li>{this.props.projectName}/ codin init</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>info: Initializing Code Investigator in &quot;{shell.pwd}&quot;</span>
                    <span>? Enter your email {this.props.user.email}</span>
                    <span>? Enter your password ********</span>
                    <div className="project-type">
                      <span>Select type of project</span>
                      <span className="blue">
                        <i className="fa fa-angle-right" /> angular
                      </span>
                      <span>react</span>
                    </div>
                  </div>
                </ul>
              </div>
              <li>Select {this.props.projectName} form the list</li>
              <div className="shell-wrap">
                <div className="shell-top-bar">{shell.topBar}</div>
                <ul className="shell-body">
                  <li>{this.props.projectName}/ codin init</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>info: Initializing Code Investigator in &quot;{shell.pwd}&quot;</span>
                    <span>? Enter your email {this.props.user.email}</span>
                    <span>? Enter your password ********</span>
                    <div className="project-type">
                      <span>Select type of project</span>
                      <span className="type-a">angular</span>
                      <span>react</span>
                    </div>
                    <div>Select from the list of the projects</div>
                    <div className="project-list">{projectList}</div>
                    <div>** create a new one **</div>
                  </div>
                </ul>
              </div>

              <li>
                Once the projet is initialized, execute <span className="command">codin gs</span>
              </li>
              {/* TODO: Shell for -gs here */}
            </ol>
          </div>
        </div>
      );
    }
    return <div>No Tutorial</div>;
  }
}

export default Tutorial;

Tutorial.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectName: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  showProject: PropTypes.func.isRequired,
};
