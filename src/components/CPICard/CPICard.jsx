import React from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";

const tempOptions = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      name: "业务指标",
      type: "gauge",
      detail: { formatter: "{value}%" },
      data: [{ value: 97, name: "完成率" }]
    }
  ]
};

export default () => (
  <Card>
    <Echart width="200px" height="300px" options={tempOptions} />
  </Card>
);
