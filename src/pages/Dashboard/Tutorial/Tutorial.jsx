import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

//Components imports
import OverviewGraph from "./../../../components/OverviewGraph";
import CPICard from "./../../../components/CPICard";
import CodeQuality from "./../../../components/CodeQuality";
import RecentSubmits from "./../../../components/RecentSubmits";
import TSLintSummary from "./../../../components/TSLintSummary";
import CoverageSummary from "./../../../components/CoverageSummary";
import OverviewHeatmap from "./../../../components/OverviewHeatmap";

//API imports
import { getUser } from "../../../utilities/api";

//Syles imports
import "./Tutorial.scss";

export default class Tutorial extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.showProject();
        // this.props.listTslintReport(this.props.projectId, "week");
    }
    render() {
        let projectList = [];
        if (this.props.projects.length > 0) {
            for (let i = 0; i < this.props.projects.length; i++) {
                projectList.push(<div className={this.props.projectName === this.props.projects[i].name ? 'type-a' : 'green'} >
                    {this.props.projects[i].name}
                </div>);
            }
        }
        if (this.props.user) {
            return (
                <div className="tutorial-container">
                    <div>New Project in Codin.Follow these steps.</div>
                    <div>
                        <ol className="steps">
                            <li className="steps-space">Proceed to your project folder in CLI</li>
                            <li >Type codin -i in the console</li>
                            <div className="shell-wrap">
                                <p className="shell-top-bar">Codin CLI</p>
                                <ul className="shell-body">
                                    <li>{this.props.projectName}/ codin -i</li>
                                    <div className="shell-content">
                                        <span>info: EXECUTING "init"</span>
                                        <span>
                                            info: Initializing Code Investigator in "C:\{
                                                this.props.projectName
                                            }"
                                        </span>
                                    </div>
                                </ul>
                            </div>
                            <li >Now Login to Codin CLI</li>
                            <div className="shell-wrap">
                                <p className="shell-top-bar">Codin CLI</p>
                                <ul className="shell-body">
                                    <li>{this.props.projectName}/ codin -i</li>
                                    <div className="shell-content">
                                        <span>info: EXECUTING "init"</span>
                                        <span>
                                            info: Initializing Code Investigator in "C:\{
                                                this.props.projectName
                                            }"
                                        </span>
                                        <span>? Enter your email {this.props.user.email}</span>
                                        <span>? Enter your password ********</span>
                                    </div>
                                </ul>
                            </div>
                            <li >Select the type of project(React/Angular) and register</li>
                            <div className="shell-wrap">
                                <p className="shell-top-bar">Codin CLI</p>
                                <ul className="shell-body">
                                    <li>{this.props.projectName}/ codin -i</li>
                                    <div className="shell-content">
                                        <span>info: EXECUTING "init"</span>
                                        <span>
                                            info: Initializing Code Investigator in "C:\{
                                                this.props.projectName
                                            }"
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
                            <li >Select the project you want to submit form the list</li>
                            <div className="shell-wrap">
                                <p className="shell-top-bar">Codin CLI</p>
                                <ul className="shell-body">
                                    <li>{this.props.projectName}/ codin -i</li>
                                    <div className="shell-content">
                                        <span>info: EXECUTING "init"</span>
                                        <span>
                                            info: Initializing Code Investigator in "C:\{
                                                this.props.projectName
                                            }"
                                        </span>
                                        <span>? Enter your email {this.props.user.email}</span>
                                        <span>? Enter your password ********</span>
                                        <div className="project-type">
                                            <span>Select type of project</span>
                                            <span className="type-a">angular</span>
                                            <span>react</span>
                                        </div>
                                        <div>Select from the list of the projects</div>
                                        <div className="project-list">
                                            {projectList}
                                        </div>
                                        <div>Or, Create a new one</div>
                                    </div>
                                </ul>
                            </div>
                        </ol>
                    </div>
                </div>
            );
        } else {
            return <div>No Tutorial</div>
        }

    }
}

//TODO: Add prop-types here
