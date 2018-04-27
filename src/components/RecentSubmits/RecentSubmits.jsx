import React, { Component } from "react";
import { Table } from "react-bootstrap";

//Components imports
import Card from "./../../commonui/Card";

export default class RecentSubmit extends Component {
  render() {
    return (
      <Card>
        <Table responsive>
          <thead>
            <tr>
              <th>Collaborator</th>
              <th>Time</th>
              <th>CPI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prajapati Murali</td>
              <td>Today 2:30pm(IST)</td>
              <td>9.2</td>
            </tr>
            <tr>
              <td>Bhalo Souvik</td>
              <td>Yesterday 8:30pm(IST)</td>
              <td>9.2</td>
            </tr>
            <tr>
              <td>Zundana Anand</td>
              <td>4/23/2018 4:20am(IST)</td>
              <td>9.2</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    );
  }
}
