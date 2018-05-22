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
            reportList: [],
            chartData: [],
            chartDays: [],
            tOptions: {}
        };
    }

    componentDidMount() {
        this.props.listTslintReport(this.props.projectId, "week");
    }

    render() {
        let tsLintErrorData = [];
        let tsLintWarningData = [];
        let cyclomatic = [];
        let maintainability = [];
        let tsLintDays = [];
        for (let i = 0; i < this.props.reportList.length; i++) {
            if (this.props.reportList[i].summary) {
                let errArray = Object.values(this.props.reportList[i].summary.lint.errorCounts);
                let topErrArray = errArray.sort().splice(0,5);
                console.log("--- error array----", errArray.reverse());
                tsLintErrorData.push(this.props.reportList[i].summary.lint.totalErrors);
                tsLintWarningData.push(this.props.reportList[i].summary.lint.totalWarnings); 
                cyclomatic.push(this.props.reportList[i].summary.quality.cyclomatic);                
                maintainability.push(this.props.reportList[i].summary.quality.maintainability);                                               
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
                data: ["TSLint Errors", "Warnings", "Cyclomatic", "Maintainability"]
            },
            grid: {
                show: false
            },
            xAxis: {
                type: "category",
                boundaryGap: true,
                minInterval: 3600 * 1000 * 24,

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
                splitLine: {
                    show: false
                },
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
                    lineStyle: {
                        color: "#ff3232"
                    },
                    data: tsLintErrorData
                },
                {
                    name: "Warnings",
                    type: "line",
                    lineStyle: {
                        color: "#fd822f"
                    },
                    data: tsLintWarningData
                },
                {
                    name: "Cyclomatic",
                    type: "line",
                    lineStyle: {
                        color: "#0082f0"
                    },
                    data: cyclomatic
                },
                {
                    name: "Maintainability",
                    type: "line",
                    lineStyle: {
                        color: "#ffff99"
                    },
                    data: maintainability
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
