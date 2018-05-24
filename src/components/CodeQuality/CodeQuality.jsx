import React, { Component } from "react";
var _ = require('lodash');
import { Row, Col } from "react-bootstrap";

//Components imports
import Echart from "./../../components/Echart";
import Card from "./../../commonui/Card";

//Styles imports
import "./CodeQuality.scss";

export default class CodeQuality extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.listTslintReport(this.props.projectId, "week");
    }

    render() {
        
        let cyclomatic = 0;
        let maintainability = 0;
        let len = this.props.reportList.length;
        if(len > 0) {
            cyclomatic = this.props.reportList[len-1].summary.quality.cyclomatic.toFixed(1);
            maintainability = this.props.reportList[len-1].summary.quality.maintainability.toFixed(1);            
        }

        if (len === 0) {
            return <div>Cards should be here</div>;
        }
        else {
            return (
                <Card title="Code Quality">
                    <div className="tslint-summary-container">
                        <Row className="tslint-summary">
                            <Col md={4} className="cyclomatic-number-container">
                                <div className="digit">
                                    <div className="error-number">{cyclomatic}</div>
                                    <div>Cyclomatic Complexity</div>
                                </div>
                            </Col>
                            <Col md={4} >
                                <div className="digit">
                                    <div className="error-number">{maintainability}</div>
                                    <div>Maintainability</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            );
        }
    }
}
