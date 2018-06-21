import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ModalBody,
  ModalHeader,
  MenuItem,
  ModalFooter,
  DropdownButton,
  Button,
} from 'react-bootstrap';

// Components imports
import ModalComponent from '../../commonui/Modal';
import Input from '../../commonui/Input';

import constants from '../../constants';

// Syles imports
import './AddProjectComponent.scss';

export default class AddProjectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projectType: Object.keys(constants.projectIcons)[0],
      form: {
        projectName: {
          valid: false,
          touched: false,
        },
        projectType: {
          valid: false,
          touched: false,
        },
      },
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

  handleTypeChange = (e) => {
    this.setState({ projectType: e.target.getAttribute('value') });
  };
  addProject = () => {
    this.props.createProject(this.state.projectName, this.state.projectType.toLowerCase());
  };
  hideProjectModal = () => {
    this.props.setProjectModalState(false);
  };
  handleNameChange = (e) => {
    const { form } = this.state;
    form.projectName.touched = true;
    form.projectName.valid = e.target.value !== '';
    this.setState({ projectName: e.target.value, form });
  };

  isProjectNameValid = () =>
    this.state.form.projectName.touched ? this.state.form.projectName.valid : true;

  renderDropdownButton = () => {
    const { projectTypes } = this.props;
    const menuItems = projectTypes.map((type, index) => (
      <MenuItem
        key={type.id}
        eventKey={type.id}
        value={type.name}
        onClick={this.handleTypeChange}>
        {this.getFaIconForProjectType(type.name)} {type.name}
      </MenuItem>
    ));
    // TODO: Use Form Select instead of DropdownButton
    const dropdownButton = (
      <DropdownButton id={1} title={this.state.projectType} key="1" className="form-dropdown">
        {menuItems}
      </DropdownButton>
    );

    return dropdownButton;
  };

  render() {
    const { projectName, form } = this.state;
    return (
      <div>
        <ModalComponent show={this.props.showProjectModal} onHide={this.hideProjectModal}>
          <ModalHeader className="add-project-modal-header">
            <span className="h4">Add New Project</span>
          </ModalHeader>
          <ModalBody className="add-project-modal-body">
            <div className="input-container">
              <React.Fragment>{this.renderDropdownButton()}</React.Fragment>
              <Input
                className={!this.isProjectNameValid() ? 'invalid-input' : ''}
                type="text"
                placeholder="your-project@0.1.0"
                value={projectName}
                onChange={this.handleNameChange}
              />
            </div>
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
            <Button bsStyle="success" disabled={!form.projectName.valid} onClick={this.addProject}>
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
  createProject: PropTypes.func.isRequired,
};
