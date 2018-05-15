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
    }
  }

  componentDidMount() {
    console.log('componentDidMount: called', this.state.projectId);
    getUserProject().then(response => {
      this.setState({
        projectId: response[1]._id
      });
      if (this.state.projectId) {
        this.props.listTslintReport(this.state.projectId, "week").then(response => {
          let tsLintData = [];
          let tsLintDays = [];
          for (let i = 0; i < response.length; i++) {
            if (response[i].summary) {
              tsLintData.push(response[i].summary.total);
              tsLintDays.push(new Date(response[i].meta.submitted_at).toDateString());
            }
          }
          this.setState({
            chartData: tsLintData,
            chartDays: tsLintDays,
            reportData: response
          })
        });

      }
    });

  }


  render() {
    console.log('[OverviewGraph.jsx] render: called')
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
        data: this.state.chartDays
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
          data: this.state.chartData
        }
      ]
    };
    if (this.state.chartData.length === 0) {
      return (
        <div>Echarts should be here</div>
      );
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
