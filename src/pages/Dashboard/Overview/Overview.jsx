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
        if (this.props.isFetching) {
            return (<div><Loader /></div>)
        }
        else if(this.props.reportList.length === 0)
        {
            return <Tutorial />
        }
        else {
            return (
                <React.Fragment>
                    <Row className="overview-row-group col-container">
                        <Col xs={12} sm={12} md={9} className="overview-col">
                            <OverviewGraph />
                        </Col>
                        <Col md={3} className="overview-col">
                            <CPICard />
                        </Col>
                    </Row>
                    <Row className="overview-row-group col-container">
                        <Col xs={12} sm={12} md={9} className="overview-col">
                            <CodeQuality />
                        </Col>
                    </Row>
                    <Row className="overview-row-group col-container">
                        <Col md={12} className="overview-col">
                            <TSLintSummary />
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
                            <OverviewHeatmap />
                        </Col>
                    </Row>
                </React.Fragment>
            );
        }
    }
}

//TODO: Add prop-types here
