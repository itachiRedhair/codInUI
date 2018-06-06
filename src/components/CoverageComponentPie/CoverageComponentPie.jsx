import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import ProgressBarComponent from "../../commonui/ProgressBar";

// Components imports
import Echart from "./../../components/Echart";
import Card from "./../../commonui/Card";

// Syles imports
import "./CoverageComponentPie.scss";

export default class CoverageComponentPie extends Component {
  componentDidMount() {
  }

  render() {
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
          data: this.props.headData,
          label: {
            // show: false,
            position: "outside"
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
    return (
      <Card title="Coverage Details">
        <Col md={6}>
          <Echart width="185px" height="185px" options={tempOptions} />
        </Col>
      </Card>
    );
  }
}
