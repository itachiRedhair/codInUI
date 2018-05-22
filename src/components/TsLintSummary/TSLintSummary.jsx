import React, { Component } from "react";
var _ = require('lodash');
import { Row, Col } from "react-bootstrap";

//Components imports
import Echart from "./../../components/Echart";
import Card from "./../../commonui/Card";

//Styles imports
import "./TSLintSummary.scss";

export default class TSLintSummary extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listTslintReport(this.props.projectId, "week");
    }

    render() {
        let summaryData = [];
        let len = this.props.reportList.length;
        let errorCountData = [];
        let totalErrorCount = "";
        let avgError = 0;
        let xAxisData = [];
        let yAxisData = [];
        let errCount = 0;
        if (len > 0) {
            totalErrorCount = this.props.reportList[len - 1].summary.lint.total; // changed,  previosly it was summary.total
            let recentData = this.props.reportList[len - 1].summary.lint.errorCounts; // changed, previosly it was summary.lint.errorcounts
            let keys = Object.keys(recentData);
            let values = Object.values(recentData);
            let errLen = Math.min(5, keys.length);
            for (let i = 0; i < errLen; i++) {
                let xData = {
                    value: keys[i]
                };
                xAxisData.push(xData);
                let yData = {
                    value: values[i]
                };
                yAxisData.push(yData);
                errCount += values[i];
                let eData = {
                    value: values[i],
                    name: keys[i]
                }
                errorCountData.push(eData);
            }
            avgError = errCount / errLen;
        }
        const _barColor = (params) => {
            if (params.data.value >= avgError) {
                return "red";
            }
            else {
                return "green"
            }
        }
        const tempOptions = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                show: false
            },
            xAxis: {
                name: "Errors",
                type: "category",
                nameTextStyle: {
                    color: "white"
                },
                axisLabel: {
                    rotate: -15,
                    color: "white"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "white"
                    }
                },
                data: xAxisData
            },
            yAxis: {
                name: "Counts",
                nameTextStyle: {
                    color: "white"
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "white"
                    }
                },
                axisLabel: {
                    color: "white"
                },
                // data: yAxisData
            },
            series: [
                {
                    type: "bar",
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    itemStyle: {
                        color: _barColor
                    },
                    data: errorCountData,
                    barWidth: "10px",
                    barCategoryGap: "10"
                }
            ]
        };

        if (errorCountData.length === 0) {
            return <div>Echarts should be here</div>;
        }
        else {
            return (
                <Card title="TSLint Summary">
                    <div className="tslint-summary-container">
                        <Row className="tslint-summary">
                            <Col md={4} className="error-number-container">
                                <div className="digit">
                                    <div className="error-number">{errCount}</div>
                                    <div>Errors</div>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Echart width="550px" height="300px" options={tempOptions} />
                            </Col>
                        </Row>
                    </div>
                </Card>
            );
        }
    }
}
