import React, { Component } from "react";
import { Table } from "react-bootstrap";
var moment = require('moment');

//Components imports
import Card from "./../../commonui/Card";
import "./RecentSubmits.scss";

//Function Imports
import { getCPI } from "./../../utilities/cpi";

export default class RecentSubmit extends Component {

    componentDidMount() {
        this.props.submissionList(this.props.projectId);
    }

    render() {
        let recentSubmits = [];
        let cpiScore = 0;
        let reports = [];
        let totalErrors = 0;
        // let cyclomatic = 0;
        let maintainability = 0;
        let len = this.props.reportList.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                totalErrors = this.props.reportList[i].summary.lint.totalErrors;
                // cyclomatic = this.props.reportList[i].summary.quality.cyclomatic;
                maintainability = this.props.reportList[i].summary.quality
                    .averageMaintainability;
                cpiScore = getCPI(totalErrors, maintainability);
                reports.push(cpiScore);
            }
        }

        if (this.props.submitList.length > 0) {
            let response = this.props.submitList;
            for (let i = response.length - 1; i >= 0; i--) {
                // var day = moment.locale(response[i].meta.submitted_at);
                // console.log("moment", day);
                let divElement =
                    <tr>
                        <td>{response[i].meta.submitted_by.name}</td>
                        <td>{new Date(response[i].meta.submitted_at).toString()}</td>
                        <td>{reports[i]}</td>
                    </tr>
                recentSubmits.push(divElement);
            }
            recentSubmits.splice(Math.min(5, recentSubmits.length));
        }

        return (
            <Card title="Recent Submits">
                <Table className="recent-submit-table" responsive>
                    <thead>
                        <tr>
                            <th>Collaborator</th>
                            <th>Time</th>
                            <th>CPI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentSubmits}
                    </tbody>
                </Table>
            </Card>
        );
    }
}
