import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

const tempOptions = {
  tooltip: {
    trigger: "axis"
  },
  legend: { 
    textStyle: {
      color: "white"
    },
    data: ["Error", "Warning", "Info"]
  },

  xAxis: {
    type: "category",
    axisLine: {
      lineStyle: {
        color: "white"
      }
    },
    boundaryGap: false,
    data: ["1", "2", "3", "4", "5", "6", "7"]
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "white"
      }
    }
  },

  series: [
    {
      name: "Error",
      type: "line",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Warning",
      type: "line",
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "Info",
      type: "line",
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
};

class TSLintBar extends Component {
  render() {
    return (
      <EchartCard
        title="History"
        options={tempOptions}
        height="240px"
        autoSize
      />
    );
  }
}

export default TSLintBar;
