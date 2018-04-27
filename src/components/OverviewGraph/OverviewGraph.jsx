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
    data: ["TSLint Errors", "Coverage", "Code Duplicacy"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["1", "2", "3", "4", "5", "6", "7"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "TSLint Errors",
      type: "line",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Coverage",
      type: "line",
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "Code Duplicacy",
      type: "line",
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
};

class OverviewGraph extends Component {
  render() {
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

// import React, { Component } from "react";

// //Components imports
// import Echart from "./../Echart";
// import Card from "./../../commonui/Card";

// //Styles imports
// import "./OverviewGraph.scss";

// const tempOptions = {
//   title: {
//     text: "折线图堆叠"
//   },
//   tooltip: {
//     trigger: "axis"
//   },
//   legend: {
//     data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
//   },
//   grid: {
//     left: "3%",
//     right: "4%",
//     bottom: "3%",
//     containLabel: true
//   },
//   toolbox: {
//     feature: {
//       saveAsImage: {}
//     }
//   },
//   xAxis: {
//     type: "category",
//     boundaryGap: false,
//     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
//   },
//   yAxis: {
//     type: "value"
//   },
//   series: [
//     {
//       name: "邮件营销",
//       type: "line",
//       stack: "总量",
//       data: [120, 132, 101, 134, 90, 230, 210]
//     },
//     {
//       name: "联盟广告",
//       type: "line",
//       stack: "总量",
//       data: [220, 182, 191, 234, 290, 330, 310]
//     },
//     {
//       name: "视频广告",
//       type: "line",
//       stack: "总量",
//       data: [150, 232, 201, 154, 190, 330, 410]
//     },
//     {
//       name: "直接访问",
//       type: "line",
//       stack: "总量",
//       data: [320, 332, 301, 334, 390, 330, 320]
//     },
//     {
//       name: "搜索引擎",
//       type: "line",
//       stack: "总量",
//       data: [820, 932, 901, 934, 1290, 1330, 1320]
//     }
//   ]
// };

// class OverviewGraph extends Component {
//   render() {
//     return (
//       <Card title="Trend Graph" >
//         <Echart options={tempOptions} width="400px" height="200px" />
//       </Card>
//     );
//   }
// }

// export default OverviewGraph;
