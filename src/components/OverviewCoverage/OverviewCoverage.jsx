import React from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";

//Syltes import
import "./OverviewCoverage.scss";

const tempOptions = {
  series: [
    {
      type: "liquidFill",
      data: [0.6],
      radius: "50%",
      amplitude: "8%",
      label: {
        show: true,
        color: '#294D99',
        insideColor: '#fff',
        fontSize: 15,
        align: 'center',
        baseline: 'middle',
        position: 'inside'
    },
    }
  ]
};

export default () => (
  <Card className="overview-coverage">
    <Echart width="130px" height="130px" options={tempOptions} />
  </Card>
);
