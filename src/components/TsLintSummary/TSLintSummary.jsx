import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

//Components imports
import Echart from "./../../components/Echart";
import Card from "./../../commonui/Card";

//Styles imports
import "./TSLintSummary.scss";

const tempOptions = {
  tooltip: {
    trigger: "item",
    formatter: "{c}"
  },
  grid: {
    height: "100%",
    width: "100%"
  },
  series: [
    {
      type: "pie",
      radius: "80%",
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "semicolon" },
        { value: 310, name: "eofline" },
        { value: 234, name: "whitespace" }
      ],
      label: {
        // show: false,
        position: "inside"
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};

export default class TSLintSummary extends Component {
  render() {
    return (
      <Card title="TSLint Summary">
        <div className="tslint-summary-container">
          <Row className="tslint-summary">
            <Col md={4} className="error-number-container">
              <div>
                <div className="error-number">6</div>
                <div>Errors</div>
              </div>
            </Col>
            <Col md={8}>
              <Echart width="185px" height="185px" options={tempOptions} />
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}
