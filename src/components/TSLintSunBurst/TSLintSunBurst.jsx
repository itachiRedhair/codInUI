import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";

var data = [
  {
    name: "50",
    value: 50,
    itemStyle: {
      color: "#da0d68"
    },
    children: [
      {
        name: "Errors",
        value: 30,
        itemStyle: {
          color: "#be0027"
        },
        children: [
          {
            name: "semicolon",
            value: 15,
            itemStyle: {
              color: "#f99e1c"
            },
            children: [
              {
                name: "appComponent.ts",
                value: 10,
                itemStyle: {
                  color: "#30c39e"
                }
              },
              {
                name: "index.js",
                value: 5,
                itemStyle: {
                  color: "#fd5c63"
                }
              }
            ]
          },
          {
            name: "eofLine",
            value: 15,
            itemStyle: {
              color: "#00aeff"
            },
            children: [
                {
                  name: "homeComponent.ts",
                  value: 10,
                  itemStyle: {
                    color: "#ed1b2e"
                  }
                },
                {
                  name: "index.html",
                  value: 5,
                  itemStyle: {
                    color: "#ed1b2e"
                  }
                }
              ]
          },
        ]
      },
      {
        name: "Warning",
        itemStyle: {
          color: "#fbb034"
        },
        children: [
          {
            name: "Rule 1",
            value: 10,
            itemStyle: {
              color: "#f99e1c"
            }
          },
          {
            name: "Rule 2",
            value: 10,
            itemStyle: {
              color: "#f99e1c"
            }
          }
        ]
      },
      {
        name: "Information",
        itemStyle: {
          color: "#ffdd00"
        },
        children: [
          {
            name: "Rule 1",
            value: 2,
            itemStyle: {
              color: "#f99e1c"
            }
          },
          {
            name: "Rule 2",
            value: 3,
            itemStyle: {
              color: "#ef5a78"
            }
          },
          {
            name: "Jasmine",
            value: 1,
            itemStyle: {
              color: "#f7f1bd"
            }
          }
        ]
      }
    ]
  }
];

const tempOptions = {
  title: {
    text: "",
    subtext: "",
    textStyle: {
      fontSize: 14,
      align: "center"
    },
    subtextStyle: {
      align: "center"
    }
  },
  series: {
    type: "sunburst",
    highlightPolicy: "ancestor",
    data: data,
    radius: [0, "60%"],
    sort: null,
    levels: [
      {},
      {
        r0: "15%",
        r: "35%",
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: "tangential"
        }
      },
      {
        r0: "35%",
        r: "50%",
        label: {
          align: "right"
        }
      },
      {
        r0: "70%",
        r: "50%",
        label: {
          position: "outside",
          padding: 3,
          silent: false
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};

class TSLintSunBurst extends Component {
  render() {
    return (
      <EchartCard
        title="TSLint SunBurst"
        // options={tempOptions}
        height="300px"
        autoSize
      />
    );
  }
}

export default TSLintSunBurst;
