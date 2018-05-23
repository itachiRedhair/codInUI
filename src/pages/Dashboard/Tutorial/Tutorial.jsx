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

//Syles imports
import "./Tutorial.scss";

export default class Tutorial extends Component {
    componentDidMount() {
        this.props.listTslintReport(this.props.projectId, "week");
    }
    render() {
        return (<div className="tutorial-container">
            New Project in Codin.
        Follow these steps.
            </div>)

    }
}

//TODO: Add prop-types here
