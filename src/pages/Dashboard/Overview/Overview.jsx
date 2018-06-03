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
import Tutorial from "./../Tutorial";
import Loader from "./../../../components/Loader";


//Syles imports
import "./Overview.scss";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.listTslintReport(this.props.projectId, "week");
  }

  render() {
    const { projectId, reports } = this.props;
    const projectReports = reports[projectId];
    if (!projectReports) return null;
    else if (!projectReports || (projectReports && projectReports.reportList.length === 0)) {
      return <Tutorial />;
    }
    else {
      return (
        <React.Fragment>
          <Row className="overview-row-group col-container">
            <Col xs={12} sm={12} md={9} className="overview-col">
              <OverviewGraph reportList={projectReports.reportList} />
            </Col>
          </Row>
          <Row className="overview-row-group col-container">
            <Col md={10} className="overview-col">
              <CodeQuality reportList={projectReports.reportList} />
            </Col>
            <Col md={2} className="overview-col">
              <CPICard reportList={projectReports.reportList} />
            </Col>
          </Row>
          <Row className="overview-row-group col-container">
            <Col md={12} className="overview-col">
              <TSLintSummary reportList={projectReports.reportList} />
            </Col>
          </Row>
          {/* <Col md={2} className="overview-col">
                            <CoverageSummary />
                        </Col> */}
          <Row>
            <Col md={12} className="overview-col">
              <RecentSubmits />
            </Col>
          </Row>
          <Row className="overview-row-group col-container">
            <Col md={12} className="overview-col">
              <OverviewHeatmap reportList={projectReports.reportList} />
            </Col>
          </Row>
        </React.Fragment>
      );
    }
  }
}

//TODO: Add prop-types here
