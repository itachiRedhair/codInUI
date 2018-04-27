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
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "80%",
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ],
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
      <Card>
        <Row className="tslint-summary">
          <Col md={6} className="error-number-container">
            6 Errors
          </Col>
          <Col md={6}>
            <Echart width="150px" height="150px" options={tempOptions} />
          </Col>
        </Row>
      </Card>
    );
  }
}
