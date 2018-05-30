import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

//Function Imports
import { getCPI }  from "./../../utilities/cpi";

//Styles imports  
import "./CPICard.scss";
 
export default class CPICard extends Component {
  componentDidMount() {
    // this.props.listTslintReport(this.props.projectId, "week");
  }

  render() {
    let cpiScore = 0;
    let totalErrors = 0;
    // let cyclomatic = 0;
    let maintainability = 0;
    let len = this.props.reportList.length;
    if (this.props.reportList.length > 0) {
      totalErrors = this.props.reportList[len - 1].summary.lint.totalErrors;
    //   cyclomatic = this.props.reportList[len - 1].summary.quality.cyclomatic;
      maintainability = this.props.reportList[len - 1].summary.quality
        .averageMaintainability;
        cpiScore = getCPI(totalErrors,maintainability);
    //   const max = Math.max(totalErrors, cyclomatic, maintainability);
    //   const Es = totalErrors * 100 / max;
    //   const Ms = (max - maintainability) * 100 / max;
    //   const Cs = cyclomatic * 100 / max;
    //   const We = 0.5;
    //   const Wm = 0.3;
    //   const Wc = 0.2;
    //   const weighted = We*Es+Wm*Ms+Wc*Cs;
    //   const AvgWtd = weighted/3;
    //   cpiScore = (100-AvgWtd).toFixed(1);
    }
    const tempOptions = {
      series: [
        {
          type: "gauge",
          radius: "90%",
          axisLine: {
            lineStyle: {
              color: [
                [0.25, "#ff3232"],
                [0.5, "#fd822f"],
                [0.75, "#fdaf1b"],
                [1.0, "#0fc373"]
              ],
              width: 3,
              shadowColor: "#fff",
              shadowBlur: 10
            }
          },
          data: [{ value: cpiScore }]
        }
      ]
    };
    return (
      <EchartCard title="CPI" height="300px" options={tempOptions} autoSize />
    );
  }
}

const tempOptions = {
  series: [
    {
      type: "gauge",
      data: [{ value: 83 }]
    }
  ]
};
