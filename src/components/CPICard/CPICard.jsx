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
      data: [{ value: 9, name: "CPI" }]
    }
  ]
};

export default () => (
  <EchartCard height="300px" options={tempOptions} autoSize />
);
