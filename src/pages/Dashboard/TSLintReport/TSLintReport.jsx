import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Components imports
import TSLintBar from './../../../components/TSLintBar';
import TSLintHistory from './../../../components/TSLintHistory';
import TSLintHeatmap from './../../../components/TSLintHeatmap';
import Tutorial from './../Tutorial';

// Syles imports
import './TSLintReport.scss';

class TSLintReport extends Component {
  componentDidMount() {}

  render() {
    const { projectId, reports } = this.props;

    const projectReports = reports[projectId];

    if (!projectReports || (projectReports && projectReports.reportList.length === 0)) {
      return <Tutorial />;
    }

    return (
      <React.Fragment>
        <Row className="tslint-row-group col-container">
          <Col md={8} className="tslint-col">
            <TSLintHistory reportList={projectReports.reportList} />
          </Col>
        </Row>
        <Row className="tslint-row-group col-container">
          <Col md={12} className="tslint-col">
            <TSLintHeatmap reportList={projectReports.reportList} />
          </Col>
        </Row>
        <Row className="tslint-row-group col-container tslint-bar">
          <Col md={12} className="tslint-col">
            <TSLintBar reportList={projectReports.reportList} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TSLintReport;

TSLintReport.propTypes = {
  projectId: PropTypes.string.isRequired,
  reports: PropTypes.arrayOf(PropTypes.object).isRequired
};
