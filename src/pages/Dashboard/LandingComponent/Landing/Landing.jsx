import React, { Component } from "react";
import {
    Row,
    Col,
    Grid,
    Tabs,
    Tab,
    TabContainer,
    TabContent,
    TabPane
} from "react-bootstrap";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

//Components imports
import AddProjectComponent from "./../../../../components/AddProjectComponent";
import Navbar from "./../../Navbar";
import FirstRender from "./../FirstRender";

//API imports
import { getUser } from "../../../../utilities/api";

//Styles imports
import "./Landing.scss";

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        
        this.props.recentList();
        this.props.showProject().then(response => {
            this.setState({
                projects: response
            });
        });
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

    handleClicked = e => {
        this.props.setProjectId(e.target.getAttribute("value"));
        this.props.setProjectName(e.target.textContent);
        this.props.setProjectType(e.target.getAttribute("value2"))
        this.props.userDetails();
    };

    showProjectModal = () => {
        this.props.setProjectModalState(true);
    }

    render() {

        const setHeight = {
            height: "1.5em",
            color: "white"
        };
        const recentName = {
            color: "green"
        };
        const recentProject = {
            fontWeight: "bold"
        }
        const errors = {
            color: "#ff3232"
        }
        const warnings = {
            color: "#fd822f"
        }
        var rows = [];
        let projects = [];
        let contributorProjects = [];
        let submits = [];
        if (this.state.projects.length !== 0) {
            this.state.projects.map(project => {
                if (project.created_by == this.state.userDataId) {
                    projects.push(
                        <li>
                            <NavLink
                                key={project._id}
                                value={project._id}
                                value2={project.type}
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
                                value2={project.type}                                
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
        if (this.props.recentData.length !== 0) {
            let sData = this.props.recentData;
            let submitLen = this.props.recentData.length;
            for (let i = 0; i < submitLen; i++) {
                let divElement = (
                    <div className="recent-activities">
                        <div className="recent-activities-content">
                            <div  key={sData[i]._id} style={recentName}>{sData[i].user}
                            </div>&nbsp;has submitted Project&nbsp;
                            <div style={recentProject}>{sData[i].project}</div>
                        </div>
                        <div className="detail-component">
                            <div className="detail-component-errors">
                                Errors:&nbsp;<span  key={sData[i]._id} style={errors}>{sData[i].summary.lint.totalErrors}</span>
                            </div>
                            <div className="detail-component-errors">
                                Warnings:&nbsp;<span  key={sData[i]._id} style={warnings}>{sData[i].summary.lint.totalWarnings}</span>
                            </div>
                        </div>
                        <div  key={sData[i]._id} className="recent-activities-time">
                            Submitted On: {new Date(sData[i].submitted_at).toString()}
                        </div>
                    </div>
                );
                submits.push(divElement);
            }
        }
        const listStyle = {
            listStyle: "none"
        };
        const submitlistStyle = {
            listStyle: "none",
            height: "75vh",
            overflowY: "scroll"
        }

        if (this.state.projects.length === 0) {
            return <FirstRender />;
        } else {
            return (
                <React.Fragment>
                    <Navbar />
                    <div className="landing-container">

                        <Col md={4}>
                            <div className="landing-sidebar">
                                <div className="newsfeed-placeholder p-5">
                                    <h3 className="h2 lh-condensed mb-2">
                                        Discover interesting projects and people to populate your
                                        personal news feed.
                                    </h3>
                                    <p className="f4">
                                        Your news feed helps you keep up with recent activity on
                                        repositories you and people you
                                    </p>
                                    <a className="btn btn-outline mt-2">Explore Codin</a>
                                </div>
                                <div className="box box-condensed mb-3">
                                    <div className="box-header">
                                        <div>Repositories</div>
                                        <div>
                                            <a className="btn btn-outline mt-2" onClick={this.showProjectModal}>Add New</a>
                                        </div>
                                    </div>
                                    <div style={listStyle} className="box-body">
                                        {projects}
                                        {contributorProjects}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} >
                            <div className="landing-body">
                                <div className="tab-container">
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                        <Tab eventKey={1} title="Recent Activities">
                                            <ul style={submitlistStyle}>{submits}</ul>
                                        </Tab>
                                        <Tab eventKey={2} title="Explore Repositories">
                                            {/* {contributorProjects} */}
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </Col>
                    </div>
                    {this.props.showProjectModal && (
                        <AddProjectComponent />
                    )}
                </React.Fragment>
            );
        }
    }
}
