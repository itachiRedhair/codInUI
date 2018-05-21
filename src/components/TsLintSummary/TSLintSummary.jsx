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
    this.props.listTslintReport(this.props.proj, "recent");
  }

  render() {
    let summaryData = [];
    let len = this.props.reportList.length;
    let errorCountData = [];
    let totalErrorCount = "";
    let xAxisData = [];
    let yAxisData = [];
    if (len > 0) {
      totalErrorCount = this.props.reportList[0].summary.total;
      let recentData = this.props.reportList[0].summary.errorCounts;
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
        let eData = {
          value: values[i],
          name: keys[i]
        }
        errorCountData.push(eData);
      }
    }

    const tempOptions = {
      grid: {
        show: false
      },
      xAxis: {
        name: "Errors",
        type: "category",
        axisLabel: {
            rotate: -15,
            color: "white"
        },
        axisLine: {
          show: false
        },
        data: xAxisData
      },
      yAxis: {
        name: "Counts",
        axisLine: {
            show: true
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
                  <div className="error-number">{totalErrorCount}</div>
                  <div>Errors</div>
                </div>
              </Col>
              <Col md={8}>
                <Echart width="400px" height="300px" options={tempOptions} />
              </Col>
            </Row>
          </div>
        </Card>
      );
    }
  }
}
