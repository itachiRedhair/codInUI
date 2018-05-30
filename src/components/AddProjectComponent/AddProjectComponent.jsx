import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import {
    Modal,
    ModalBody,
    ModalHeader,
    MenuItem,
    ModalFooter,
    DropdownButton,
    ButtonToolbar
} from "react-bootstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

//Components imports
import ModalComponent from "../../commonui/Modal";
import Button from "../../commonui/Button";
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
        console.log("type change", e.target.getAttribute('value'));
        this.setState({ projectType: e.target.getAttribute('value') })
    }

    render() {
        const projectName = this.state.projectName;
        const profileDropdown = {
            background: "transparent",
            color: "green",
            border: "#d7dde4",
            boxShadow: "none",
            marginLeft: "-1rem"
        };
        return (
            <div>
                <ModalComponent
                    show={this.props.showProjectModal}
                    onHide={this.hideProjectModal}
                >
                    <ModalHeader>
                        <i className="fa fa-close" onClick={this.hideProjectModal} />
                    </ModalHeader>
                    <ModalBody>
                        <Input
                            type="text"
                            label="Name"
                            placeholder="your-project@0.1.0"
                            value={this.state.projectName}
                            onChange={this.handleNameChange}
                        />
                        <DropdownButton
                            style={profileDropdown}
                            title={this.state.projectType}
                            key="1"
                            id={`dropdown-basic-1`}
                        >
                            <MenuItem eventKey="1" value="angular" onClick={this.handleTypeChange} active>Angular</MenuItem>
                            <MenuItem eventKey="2" value="react" onClick={this.handleTypeChange}>React</MenuItem>
                        </DropdownButton>
                    </ModalBody>
                    <ModalFooter>
                        <Button bsStyle="primary" onClick={this.addProject}>
                            Add Project
                                </Button>
                    </ModalFooter>
                </ModalComponent>
            </div>
        );
    }
}
