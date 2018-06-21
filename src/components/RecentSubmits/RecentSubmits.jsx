import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components imports
import Card from './../../commonui/Card';
import './RecentSubmits.scss';

// Function Imports
import { getCPI } from './../../utilities/cpi';

class RecentSubmit extends Component {
  componentDidMount() {}

  render() {
    let reports = [...this.props.reportList];
    reports.sort((a, b) => b.meta.submitted_at - a.meta.submitted_at);
    reports = reports.map((report) =>
      getCPI(report.summary.lint.totalErrors, report.summary.quality.averageMaintainability)
    );

    const submits = [...this.props.submitList];

    // Sorting in descending order i.e. showing most recent first
    submits.sort((a, b) => b.meta.submitted_at - a.meta.submitted_at);

    const recentSubmits = submits.map((item, index) => (
      <tr key={`${item._id}-${item.meta.submitted_at}`}>
        <td>{item.meta.submitted_by.name}</td>
        <td>{new Date(item.meta.submitted_at).toString()}</td>
        <td>{reports[index]}</td>
      </tr>
    ));

    // Taking top 5 submits
    recentSubmits.splice(Math.min(5, recentSubmits.length));

    return (
      <Card title="Recent Submits">
        <div className="recent-submit-table-container">
          <Table className="recent-submit-table" responsive>
            <thead>
              <tr>
                <th>Contributor</th>
                <th>Time</th>
                <th>CPI</th>
              </tr>
            </thead>
            <tbody>{recentSubmits}</tbody>
          </Table>
        </div>
      </Card>
    );
  }
}

export default RecentSubmit;

RecentSubmit.propTypes = {
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
