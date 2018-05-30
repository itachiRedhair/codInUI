import React, { Component } from "react";
import path from "path";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";
import EchartCard from "./../../components/EchartCard";
import { getChartOptions, TYPE_BAR } from "./../../utilities/chartOptions";

//Styles import
import "./TSLintBar.scss";

export default class TSLintBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reportListDetails: []
        };
    }

    componentDidMount() {
        this.props
            .listTslintReportDetails(this.props.projectId, "recent")
            .then(response => {
                this.setState({
                    reportListDetails: response
                });
            });
    }

    render() {
        let fileNames = [];
        let errorCount = [];
        let warningCount = [];
        let filePath = "";
        console.log("checking for tslint bar graph", this.state.reportListDetails);
        if (this.state.reportListDetails.length > 0) {
            let dataLength = this.state.reportListDetails.length;
            let dataAlias = this.state.reportListDetails;

            for (let i = 0; i < dataLength; i++) {
                filePath = dataAlias[i].file.substring(
                    dataAlias[i].file.lastIndexOf("/") + 1,
                    dataAlias[i].file.length
                );
                for (let j = 0; j < dataAlias[i].output.length; j++) {
                    if (dataAlias[i].output[j].ruleSeverity === "ERROR") {
                        errorCount.push(dataAlias[i].output[j].count);
                    } else {
                        warningCount.push(dataAlias[i].output[j].count);
                    }
                }
                fileNames.push(filePath);
            }
        }

        const options = {
            legend: {
                data: ["Errors", "Warnings"]
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                show: false
            },
            yAxis: {
                type: "category",
                data: fileNames
            },
            series: [
                {
                    name: "Errors",
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: true,
                            itemStyle: {
                                color: "white"
                            },
                            position: "insideRight"
                        }
                    },
                    data: errorCount
                },
                {
                    name: "Warnings",
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: true,
                            position: "insideRight"
                        }
                    },
                    data: warningCount
                }
            ]
        };

        const tempOptions = getChartOptions(TYPE_BAR, options);
        if (this.state.reportListDetails.length === 0) {
            return <div>tslint bar graph should be there</div>;
        } else {
            return (
                <div className="tslint-bar-container">
                    <EchartCard
                        title="TSLint Bar Graph"
                        options={tempOptions}
                        height={
                            25 * (fileNames.length < 5 ? 5 : fileNames.length - 5) + 300
                        }
                        autoSize
                        contentScroll
                    />
                </div>
            );
        }
    }
}
