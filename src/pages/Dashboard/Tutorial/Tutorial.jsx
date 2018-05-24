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
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    // this.props.showProject();
    // this.props.listTslintReport(this.props.projectId, "week");
  }
  render() {
    return (
      <div className="tutorial-container">
        <div>New Project in Codin.Follow these steps.</div>
        <div>
          <ol>
            <li>Proceed to your project folder in CLI</li>
            <li>Type codin -i in the console</li>
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
            <li>Now Login to Codin CLI</li>
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
                  <span>? Enter your email -</span>
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
                  <span>info: EXECUTING "init"</span>
                  <span>
                    info: Initializing Code Investigator in "C:\{
                      this.props.projectName
                    }"
                  </span>
                  <span>? Enter your email -</span>
                  <span>? Enter your password ********</span>
                </div>
                <li>cd ../../../../</li>
                <li>pwd</li>
                <li>/Users/pjlangley/Documents/websites/</li>
              </ul>
            </div>
          </ol>
        </div>
      </div>
    );
  }
}

//TODO: Add prop-types here
