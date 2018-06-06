import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ModalBody,
  ModalHeader,
  MenuItem,
  ModalFooter,
  DropdownButton,
  Button
} from 'react-bootstrap';

// Components imports
import ModalComponent from '../../commonui/Modal';
import Input from '../../commonui/Input';

// Syles imports
import './AddProjectComponent.scss';

export default class AddProjectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projectType: 'Choose Type'
    };
  }

  handleNameChange = (e) => this.setState({ projectName: e.target.value });

  hideProjectModal = () => {
    this.props.setProjectModalState(false);
  };

  addProject = () => {
    this.props.createProject(this.state.projectName, this.state.projectType.toLowerCase());
  };

  handleTypeChange = (e) => {
    this.setState({ projectType: e.target.getAttribute('value') });
  };

  renderDropdownButton = () => {
    const { projectTypes } = this.props;
    const menuItems = projectTypes.map((type) => (
      <MenuItem eventKey={type.id} value={type.name} onClick={this.handleTypeChange}>
        {type.name}
      </MenuItem>
    ));
    // TODO: Use Form Select instead of DropdownButton
    const dropdownButton = (
      <DropdownButton
        title={this.state.projectType}
        key="1"
        id="dropdown-basic-1"
        className="form-dropdown text-muted">
        {menuItems}
      </DropdownButton>
    );

    return dropdownButton;
  };

  render() {
    const { projectName } = this.state;
    return (
      <div>
        <ModalComponent show={this.props.showProjectModal} onHide={this.hideProjectModal}>
          <ModalHeader className="add-project-modal-header">
            <span className="h4">Add New Project</span>
          </ModalHeader>
          <ModalBody className="add-project-modal-body">
            <div className="input-container">
              <Input
                type="text"
                placeholder="your-project@0.1.0"
                value={projectName}
                onChange={this.handleNameChange}
              />
            </div>
            <React.Fragment>{this.renderDropdownButton()}</React.Fragment>
            <div className="text-muted text-small">
              <span>
                * You can initialize this project in your source directory using &ldquo;
                <i>codin --init</i>&rdquo;
              </span>
            </div>
          </ModalBody>
          <ModalFooter className="add-project-modal-footer">
            <Button bsStyle="default" onClick={this.hideProjectModal}>
              Cancel
            </Button>
            <Button bsStyle="success" onClick={this.addProject}>
              Add Project
            </Button>
          </ModalFooter>
        </ModalComponent>
      </div>
    );
  }
}

AddProjectComponent.propTypes = {
  showProjectModal: PropTypes.bool.isRequired,
  projectTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProjectModalState: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired
};
