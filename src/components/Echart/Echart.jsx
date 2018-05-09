import React, { Component } from "react";
import ReactDom from "react-dom";
import echarts from "echarts";
import "echarts-liquidfill";

export default class EchartComponent extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  createEchart = () => {
    this.chart = echarts.init(ReactDom.findDOMNode(this));
    this.updateChart(this.props);
  };

  updateChart = nextProps => {
    const options = nextProps.options;
    if (!options) {
      return null;
    }
    this.chart.setOption(options);
  };

  componentDidMount = () => {
    this.createEchart();
  };

  componentWillUnmount = () => {
    if (this.echarts) {
      this.chart.dispose();
    }
  };

  componentWillReceiveProps = nextProps => {
    this.updateChart(nextProps);
  };

  render() {
    return (
      <div style={{ height: this.props.height, width: this.props.width }} />
    );
  }
}
