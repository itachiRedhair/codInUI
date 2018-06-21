import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddProjectComponent from './../../../components/AddProjectComponent';

// Styles imports
import './FirstRender.scss';

class FirstRender extends Component {
  showProjectModal = () => {
    this.props.setProjectModalState(true);
  };
  render() {
    return (
      <React.Fragment>
        <div className="first-render-container">
          <div>
            <h1>Welcome to CodIn</h1>
          </div>
          <div>
            <h3>Click on Add Project to continue</h3>
          </div>
          <div>
            <button className="btn btn-outline btn-success" onClick={this.showProjectModal}>
              Add Project
            </button>
          </div>
        </div>
        {this.props.showProjectModal && <AddProjectComponent />}
      </React.Fragment>
    );
  }
}

export default FirstRender;

FirstRender.propTypes = {
  setProjectModalState: PropTypes.func.isRequired,
  showProjectModal: PropTypes.bool.isRequired
}
