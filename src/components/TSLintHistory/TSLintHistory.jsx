import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";
import { getChartOptions, TYPE_LINE } from "./../../utilities/chartOptions";

//Api imports
import { getUserProject } from "../../utilities/api";

class TSLintHistory extends Component {
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
        // this.props.listTslintReport(this.props.projectId, "week");
    }

    render() {
        let tsLintErrorData = [];
        let tsLintWarningData = [];
        let tsLintDays = [];
        for (let i = 0; i < this.props.reportList.length; i++) {
            if (this.props.reportList[i].summary) {
                tsLintErrorData.push(this.props.reportList[i].summary.lint.totalErrors);
                tsLintWarningData.push(this.props.reportList[i].summary.lint.totalWarnings);                                    
                tsLintDays.push(new Date(this.props.reportList[i].meta.submitted_at).toDateString());
            }
        }
        const options = {
            legend: {
                data: [{name: "TSLint Errors", textStyle: { color: "#ff3232"}}, {name: "Warnings", textStyle: { color: "#fd822f"}}]
            },
            xAxis: {
                data: tsLintDays
            },
            series: [
                {
                    name: "TSLint Errors",
                    type: "line",
                    smooth: true,                    
                    lineStyle: {
                        color: "#ff3232"
                    },
                    data: tsLintErrorData
                },
                {
                    name: "Warnings",
                    type: "line",
                    smooth: true,                    
                    lineStyle: {
                        color: "#fd822f"
                    },
                    data: tsLintWarningData
                }
            ]
        };
        
        const tempOptions = getChartOptions(TYPE_LINE, options)
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

export default TSLintHistory;
