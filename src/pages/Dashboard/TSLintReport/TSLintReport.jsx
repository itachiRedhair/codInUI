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
    const { projectReports, reportDetails, isFetching } = this.props;

    if (isFetching) return null;
    if (projectReports.length === 0) return <Tutorial />;

    return (
      <React.Fragment>
        <Row className="tslint-row-group col-container">
          <Col md={8} className="tslint-col">
            <TSLintHistory reportList={projectReports} />
          </Col>
        </Row>
        <Row className="tslint-row-group col-container">
          <Col md={12} className="tslint-col">
            <TSLintHeatmap reportList={projectReports} />
          </Col>
        </Row>
        <Row className="tslint-row-group col-container tslint-bar">
          <Col md={12} className="tslint-col">
            <TSLintBar reportList={projectReports} reportListDetails={reportDetails} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TSLintReport;

TSLintReport.propTypes = {
  projectReports: PropTypes.arrayOf(PropTypes.object).isRequired,
  reportDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
