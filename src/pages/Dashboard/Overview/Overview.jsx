import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Components imports
import OverviewGraph from './../../../components/OverviewGraph';
import CPICard from './../../../components/CPICard';
import CodeQuality from './../../../components/CodeQuality';
import RecentSubmits from './../../../components/RecentSubmits';
import TSLintSummary from './../../../components/TSLintSummary';
import OverviewHeatmap from './../../../components/OverviewHeatmap';
import Tutorial from './../Tutorial';

// Syles imports
import './Overview.scss';

class Overview extends Component {
  componentDidMount() {}

  render() {
    const { projectReports, projectSubmits, isFetching } = this.props;
    if (isFetching) return null;
    if (projectReports.length === 0) return <Tutorial />;

    return (
      <React.Fragment>
        <Row className="overview-row-group col-container">
          <Col md={10} className="overview-col">
            <CodeQuality reportList={projectReports} submittedAt={this.props.submittedAt} />
          </Col>
          <Col md={2} className="overview-col">
            <CPICard reportList={projectReports} submittedAt={this.props.submittedAt} />
          </Col>
        </Row>
        <Row className="overview-row-group col-container">
          <Col md={12} className="overview-col">
            <TSLintSummary reportList={projectReports} submittedAt={this.props.submittedAt} />
          </Col>
        </Row>
        <Row className="overview-row-group col-container">
          <Col xs={12} sm={12} md={9} className="overview-col">
            <OverviewGraph reportList={projectReports} />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="overview-col">
            <RecentSubmits reportList={projectReports} submitList={projectSubmits} />
          </Col>
        </Row>
        <Row className="overview-row-group col-container">
          <Col md={12} className="overview-col">
            <OverviewHeatmap reportList={projectReports} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Overview;

Overview.propTypes = {
  projectReports: PropTypes.arrayOf(PropTypes.object).isRequired,
  submittedAt: PropTypes.string.isRequired,
  projectSubmits: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
