import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import {
    Modal,
    ModalBody,
    ModalHeader,
    MenuItem,
    ModalFooter,
    DropdownButton,
    ButtonToolbar
} from "react-bootstrap";

//Component imports
import ModalComponent from "../../../commonui/Modal";
import Button from "../../../commonui/Button";
import Input from "./../../../commonui/Input";
import Collaborator from "./CollaboratorComponent";

//API imports
import { getUser } from "../../../utilities/api";
import { getUserProject } from "../../../utilities/api";

//Styles imports
import "./Sidebar.scss";
import "../../../styles/_theme.scss";

const navLinkActiveStyle = {
    fontWeight: "bold",
    background: "#242424",
    color: "white",
    paddingLeft: "1em",
    borderLeft: "0.5em solid green"
};

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        // this.handleClicked = this.handleClicked.bind(this);
        this.state = {
            showProjectDropdownContent: false,
            selectedProject: "",
            showProjectModal: false,
            showCollaboratorModal: false,
            isProjectSelected: false,
            projectName: "",
            projectType: "Choose Type",
            isProjectCreated: false,
            userDataId: ""
        };
    }

    componentDidMount() {
        this.props.showProject();
        getUser()
            .then(response => {
                this.setState({
                    userDataId: response._id
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleProjectInfoClick = e => {
        e.preventDefault();
        this.setState(({ showProjectDropdownContent }) => {
            return { showProjectDropdownContent: !showProjectDropdownContent };
        });
    };

    handleClicked = e => {
        this.setState({
            selectedProject: e.target.textContent,
            isProjectSelected: true,
            //   projectId: e.target.getAttribute('value'),
            showProjectDropdownContent: false
        });
        this.props.listTslintReport(e.target.getAttribute("value"), "week");
        this.props.submissionList(e.target.getAttribute("value"));
        this.props.setProjectId(e.target.getAttribute("value"));
        this.props.listTslintReport(e.target.getAttribute("value"), "week");

    };

    showProjectModal = () => {
        this.setState({
            showProjectModal: true
        });
    };
    addCollaboratorModal = () => {
        this.props.setModalState(true);
    };
    hideProjectModal = () => {
        this.setState({
            showProjectModal: false
        });
    };

    handleNameChange = e => this.setState({ projectName: e.target.value });
    handleTypeChange = e => {
        console.log("type change", e.target.getAttribute('value'));
        this.setState({ projectType: e.target.getAttribute('value') })
    }

    addProject = () => {
        this.props.createProject(this.state.projectName).then(projectCreated => {
            if (projectCreated) {
                this.setState({ isProjectCreated: true });
            } else {
                this.setState({ isProjectCreated: false });
            }
        });
    };
    render() {
        const setHeight = {
            height: "1.5em"
        };
        const projectName = this.state.projectName;
        var rows = [];
        let projects = [];
        let contributorProjects = [];
        if (this.props.projects.length !== 0) {
            this.props.projects.map(project => {
                if (project.created_by == this.state.userDataId) {
                    projects.push(
                        <li>
                            <NavLink
                                key={project._id}
                                value={project._id}
                                style={setHeight}
                                onClick={this.handleClicked}
                                to="/dashboard/overview"
                            >
                                {project.name}
                            </NavLink>
                        </li>
                    );
                } else {
                    contributorProjects.push(
                        <li>
                            <NavLink
                                key={project._id}
                                value={project._id}
                                style={setHeight}
                                onClick={this.handleClicked}
                                to="/dashboard/overview"
                            >
                                {project.name}&nbsp;<i className="far fa-copyright" />
                            </NavLink>
                        </li>
                    );
                }
            });
        }

        const profileDropdown = {
            background: "transparent",
            color: "green",
            border: "#d7dde4",
            boxShadow: "none",
            marginLeft: "-1rem"
        };

        const addProject = (
            <div>
                <div className="add-project"  onClick={this.addCollaboratorModal}>
                    {/* <i
                        className="fa fa-users setting"
                       
                    /> */}
                    <div>Add Collaborator</div>
                    <i className="fa fa-plus-circle fa-align" />
                </div>
                <div className="add-project" onClick={this.showProjectModal}>
                    <div>Add Project</div>
                    <i className="fa fa-plus-circle fa-align" />
                </div>
            </div>

        );
        const listStyle = {
            listStyle: "none"
        };
        return (
            <div className="sidebar">
                <div className="project-info"
                    onClick={this.handleProjectInfoClick}
                >
                    <div className="project-content">
                        <div
                            className="project-info-content"
                        >
                            <div className="project-name">
                                {this.state.isProjectSelected && projects.length != 0
                                    ? this.state.selectedProject
                                    : !this.state.isProjectSelected && projects.length != 0
                                        ? this.props.projectName
                                        : addProject}
                            </div>
                            {/* <div className="collaborator">
                                <i
                                    className="fa fa-users setting"
                                    onClick={this.addCollaboratorModal}
                                />
                            </div> */}
                        </div>
                        <div className="project-date">Created on: 25/04/2018</div>
                    </div>
                    {this.state.showProjectDropdownContent ? (
                        <i className="fas fa-caret-up project-dropdown-icon" />
                    ) : (
                            <i className="fas fa-caret-down project-dropdown-icon" />
                        )}
                </div>
                <div
                    className={`project-dropdown-content ${
                        this.state.showProjectDropdownContent ? "reveal" : ""
                        }`}
                >
                    <div className="sub-heading">Your Projects</div>
                    <div
                        className={`${projects.length >= 3 ? "project-list-scroll" : ""}`}
                    >
                        <div >
                            <ul style={listStyle} className="project-list">
                                {projects}
                                {contributorProjects}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="sub-heading">As Contributor</div>
                    <div
                        className={`${projects.length >= 3 ? "project-list-scroll" : ""}`}
                    >
                        <div>
                            <ul>
                                {contributorProjects}
                            </ul>
                        </div>
                    </div> */}
                    {projects.length != 0 ? addProject : ""}
                </div>
                <div
                    className={`nav-container responsive ${
                        this.state.showProjectDropdownContent ? "reveal" : ""
                        }`}
                >
                    <nav className="menu">
                        <ul className="sidebar-menu metismenu" id="sidebar-menu">
                            <li className="active">
                                <NavLink
                                    activeStyle={navLinkActiveStyle}
                                    to="/dashboard/overview"
                                >
                                    <i className="fa fa-tachometer" /> Overview
                </NavLink>
                            </li>
                            <div className="report-container">
                                <div className="reports">Reports</div>
                            </div>
                            <li className="active open bb">
                                <NavLink
                                    activeStyle={navLinkActiveStyle}
                                    to="/dashboard/tslint"
                                >
                                    <i className="fa fa-file-text-o" /> TS Lint Report
                </NavLink>
                            </li>
                            <li className="active open bb">
                                <NavLink
                                    activeStyle={navLinkActiveStyle}
                                    to="/dashboard/coverage"
                                >
                                    <i className="fa fa-file-text-o" /> Coverage Report
                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {this.state.showProjectModal && (
                        <ModalComponent
                            show={this.state.showProjectModal}
                            onHide={this.hideProjectModal}
                        >
                            <ModalHeader>
                                <i className="fa fa-close" onClick={this.hideProjectModal} />
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    type="text"
                                    label="Name"
                                    placeholder="Name of project"
                                    value={projectName}
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
                    )}
                    {this.props.showModal && (
                        <Collaborator
                            projectIdState={
                                this.state.isProjectSelected
                                    ? this.props.projectId
                                    : this.props.projects[0]._id
                            }
                        />
                    )}
                </div>
            </div>
        );
    }
}
