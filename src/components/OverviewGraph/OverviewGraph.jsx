import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

//Api imports
import { getUserProject } from "../../utilities/api";

class OverviewGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
      reportData: [],
      chartData: [],
      chartDays: [],
      tOptions: {}
    };
  }

  componentDidMount() {    
    this.props.listTslintReport(this.props.projectId, "week");    
  }

  render() {
    let tsLintData = [];
    let tsLintDays = [];
    for (let i = 0; i < this.props.reportList.length; i++) {
      if (this.props.reportList[i].summary) {
        tsLintData.push(this.props.reportList[i].summary.total);
        tsLintDays.push(new Date(this.props.reportList[i].meta.submitted_at).toDateString());
      }
    }
    const tempOptions = {
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
    if (tsLintDays.length === 0) {
      return <div>Echarts should be here</div>;
    } else {
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
}

export default OverviewGraph;
