import React from "react";

// Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

// Syltes import
import "./CoverageSummary.scss";

const tempOptions = {
  series: [
    {
      type: "liquidFill",
      data: [0.6],
      color: ["#132639"],
      outline: {
        show: false
      },
      radius: "80%",
      amplitude: "8%",
      label: {
        show: true,
        color: "#294D99",
        insideColor: "#fff",
        fontSize: 15,
        align: "center",
        baseline: "middle",
        position: "inside"
      }
    }
  ]
};

export default () => (
  <EchartCard height="160px" title="Coverage" options={tempOptions} autoSize />
);
