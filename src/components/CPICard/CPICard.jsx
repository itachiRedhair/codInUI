import React from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

//Styles imports
import "./CPICard.scss";

const tempOptions = {
  series: [
    {
      type: "gauge",
      data: [{ value: 83 }]
    }
  ]
};

export default () => (
  <EchartCard title="CPI" height="300px" options={tempOptions} autoSize />
);
