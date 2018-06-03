import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import {
  Modal,
  ModalBody,
  ModalHeader,
  MenuItem,
  ModalFooter,
  DropdownButton,
  ButtonToolbar,
  Button
} from "react-bootstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

//Components imports
import ModalComponent from "../../commonui/Modal";
import Input from "../../commonui/Input";


//Syles imports
import "./AddProjectComponent.scss";

export default class AddProjectComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      projectType: "Choose Type",
      isProjectCreated: false
    }
  }

  componentDidMount() {
  }

  handleNameChange = e => this.setState({ projectName: e.target.value });

  hideProjectModal = () => {
    // this.setState({
    //     showProjectModal: false
    // });
    this.props.setProjectModalState(false);
  };

  addProject = () => {
    this.props.createProject(this.state.projectName, this.state.projectType);
  };

  handleTypeChange = e => {
    this.setState({ projectType: e.target.getAttribute('value') })
  }

  render() {
    const projectName = this.state.projectName;
    return (
      <div>
        <ModalComponent
          show={this.props.showProjectModal}
          onHide={this.hideProjectModal}
        >
          <ModalHeader className="add-project-modal-header">
            <span className="h4">Add New Project</span>
            {/* <span className="pull-right text-danger"> */}
            {/* <i className="fa fa-close" onClick={this.hideProjectModal} /> */}
            {/* </span> */}
          </ModalHeader>
          <ModalBody className="add-project-modal-body">
            <div className="input-container">
              <DropdownButton
                title={this.state.projectType}
                key="1"
                id={`dropdown-basic-1`}
                className="form-dropdown text-muted"
              >
                {/* TODO: Take this from the array in some constants! */}
                <MenuItem eventKey="1" value="angular" onClick={this.handleTypeChange} active>angular</MenuItem>
                <MenuItem eventKey="2" value="react" onClick={this.handleTypeChange}>react</MenuItem>
              </DropdownButton>
              <Input
                type="text"
                placeholder="your-project@0.1.0"
                value={this.state.projectName}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="text-muted text-small">* You can initialize this project in your source directory using "<i>codin --init</i>"</div>
          </ModalBody>
          <ModalFooter className="add-project-modal-footer">
            <Button bsStyle="default" onClick={this.hideProjectModal}>Cancel</Button>
            <Button bsStyle="success" onClick={this.addProject}>Add Project</Button>
          </ModalFooter>
        </ModalComponent>
      </div>
    );
  }
}
