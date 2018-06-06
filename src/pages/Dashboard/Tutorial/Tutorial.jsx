import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components imports

// API imports

// Syles imports
import './Tutorial.scss';

class Tutorial extends Component {
  componentDidMount() {}
  render() {
    let projectList = [];
    if (this.props.projects.length > 0) {
      projectList = this.props.projects.map((projectItem) => {
        return (
          <div className={this.props.projectName === projectItem.name ? 'type-a' : 'green'}>
            {projectItem.name}
          </div>
        );
      });
    }
    if (this.props.user) {
      return (
        <div className="tutorial-container">
          <div>New Project in Codin.Follow these steps.</div>
          <div>
            <ol className="steps">
              <li className="steps-space">Proceed to your project folder in CLI</li>
              <li>Type codin -i in the console</li>
              <div className="shell-wrap">
                <p className="shell-top-bar">Codin CLI</p>
                <ul className="shell-body">
                  <li>{this.props.projectName}/ codin -i</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>
                      info: Initializing Code Investigator in &quot;C:\{this.props.projectName}&quot;
                    </span>
                  </div>
                </ul>
              </div>
              <li>Now Login to Codin CLI</li>
              <div className="shell-wrap">
                <p className="shell-top-bar">Codin CLI</p>
                <ul className="shell-body">
                  <li>{this.props.projectName}/ codin -i</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>
                      info: Initializing Code Investigator in &quot;C:\{this.props.projectName}&quot;
                    </span>
                    <span>? Enter your email {this.props.user.email}</span>
                    <span>? Enter your password ********</span>
                  </div>
                </ul>
              </div>
              <li>Select the type of project(React/Angular) and register</li>
              <div className="shell-wrap">
                <p className="shell-top-bar">Codin CLI</p>
                <ul className="shell-body">
                  <li>{this.props.projectName}/ codin -i</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>
                      info: Initializing Code Investigator in &quot;C:\{this.props.projectName}&quot;
                    </span>
                    <span>? Enter your email {this.props.user.email}</span>
                    <span>? Enter your password ********</span>
                    <div className="project-type">
                      <span>Select type of project</span>
                      <span className="type-a">angular</span>
                      <span>react</span>
                    </div>
                  </div>
                </ul>
              </div>
              <li>Select the project you want to submit form the list</li>
              <div className="shell-wrap">
                <p className="shell-top-bar">Codin CLI</p>
                <ul className="shell-body">
                  <li>{this.props.projectName}/ codin -i</li>
                  <div className="shell-content">
                    <span>info: EXECUTING &quot;init&quot;</span>
                    <span>
                      info: Initializing Code Investigator in &quot;C:\{this.props.projectName}&quot;
                    </span>
                    <span>? Enter your email {this.props.user.email}</span>
                    <span>? Enter your password ********</span>
                    <div className="project-type">
                      <span>Select type of project</span>
                      <span className="type-a">angular</span>
                      <span>react</span>
                    </div>
                    <div>Select from the list of the projects</div>
                    <div className="project-list">{projectList}</div>
                    <div>Or, Create a new one</div>
                  </div>
                </ul>
              </div>
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
  projects: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};
