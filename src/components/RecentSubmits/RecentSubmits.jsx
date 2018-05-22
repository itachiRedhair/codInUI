import React, { Component } from "react";
import { Table } from "react-bootstrap";

//Components imports
import Card from "./../../commonui/Card";
import "./RecentSubmits.scss";

export default class RecentSubmit extends Component {

  componentDidMount() {
    this.props.submissionList(this.props.projectId);
  }

  render() {
    let recentSubmits = []
    if (this.props.submitList.length > 0) {
      let response = this.props.submitList;
      for (let i = response.length-1; i >= 0; i--) {
        let divElement =
        <tr>
          <td>{response[i].meta.submitted_by.name}</td>
          <td>{new Date(response[i].meta.submitted_at).toString()}</td>
          <td>9.2</td>
        </tr>
        recentSubmits.push(divElement);
      }
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
