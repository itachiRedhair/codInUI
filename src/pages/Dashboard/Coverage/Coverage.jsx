import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Components imports
import CoverageComponentTable from '../../../components/CoverageComponentTable';
import CoverageComponentPie from '../../../components/CoverageComponentPie';
import CoverageOverTime from '../../../components/CoverageOverTime';

// Syles imports
import './Coverage.scss';

class Coverage extends Component {
  getCoverageSummary = () => {
    const { coverageDetails } = this.props;
    if (coverageDetails.length === 0) return null;
    const { summary } = coverageDetails[0].output[0];
    return summary;
  };

  render() {
    const coverageSummary = this.getCoverageSummary();
    const coverageContainer = (
      <div className="coverage-container">
        <Row className="reset-row-margin">
          <Col md={12}>
            <CoverageComponentPie coverageSummary={coverageSummary} />
          </Col>
        </Row>
        <Row className="coverage-container">
          <Col md={12} className="reset-col-padding">
            <CoverageOverTime coverageOTList={this.props.coverageOTList} />
          </Col>
        </Row>
        <Row className="coverage-container">
          <Col md={12} className="reset-col-padding">
            <CoverageComponentTable tableData={this.props.coverageDetails} />
          </Col>
        </Row>
      </div>
    );
    const empty = (
      <div className="empty-recent-activity-container text-muted">
        <span>
          <i className="fas fa-info-circle text-info" />
        </span>
        <span>No Coverage Report was generated.</span>
      </div>
    );
    return this.props.coverageDetails.length === 0 ? empty : coverageContainer;
  }
}

export default Coverage;

Coverage.propTypes = {
  coverageDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
  coverageOTList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
