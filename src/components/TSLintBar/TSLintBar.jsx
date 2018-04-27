import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

//Styles import
import "./TSLintBar.scss";

const data = [
  "appComponent.ts",
  "index.js",
  "homeComponent.ts",
  "index.html",
  "config.js",
  "routerModule.ts",
  "env.ts",
  "config.js",
  "routerModule.ts",
  "env.ts"
];

const tempOptions = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["Errors", "Warnings", "Information"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "",
    show: false
  },
  yAxis: {
    type: "category",
    data: data
  },
  series: [
    {
      name: "Errors",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [320, 302, 301, 334, 390, 330, 320, 310, 230, 400]
    },
    {
      name: "Warnings",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210, 301, 334, 390]
    },
    {
      name: "Information",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310, 132, 101, 134]
    }
  ]
};

class TSLintBar extends Component {
  render() {
    return (
      <div className="tslint-bar-container">
        <EchartCard
          title="TSLint Bar Graph"
          options={tempOptions}
          height={25 * (data.length < 5 ? 5 : data.length - 5) + 300}
          autoSize
        />
      </div>
    );
  }
}

export default TSLintBar;
