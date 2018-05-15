import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

class OverviewGraph extends Component {
  constructor(props) {
    super();
  }


  componentDidMount() {
    this.props.listTslintReport(this.props.projectId, "week").then(response => {
        console.log("report in this case",response);
    });
  }


  render() {
    let tsLintData = [];
    let tsLintDays = [];
    if (this.props.reportList) {
      for (let i = 0; i < this.props.reportList.length; i++) {
        tsLintData.push(this.props.reportList[i].summary.total);
        tsLintDays.push(this.props.reportList[i].meta.submitted_at);
      }
      console.log("----report list for chart--------", tsLintData);
      console.log("----report list days for chart--------", tsLintDays);
      
    }
    let tempOptions = {
      tooltip: {
        trigger: "axis"
      },
      legend: {
        textStyle: {
          color: "white"
        },
        data: ["TSLint Errors"]
      },
      grid: {
        // containLabel: true
      },
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "white"
          }
        },
        boundaryGap: false,
        data: tsLintDays
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
          name: "TSLint Errors",
          type: "line",
          data: tsLintData
        }
      ]
    };

    return (
      <EchartCard
        title="Trend Graph"
        options={tempOptions}
        height="300px"
        autoSize
      />
    );
  }
}

export default OverviewGraph;
