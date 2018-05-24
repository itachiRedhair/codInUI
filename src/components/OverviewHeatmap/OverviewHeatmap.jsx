import React, { Component } from "react";
import moment from "moment";
var _ = require('lodash');

//Components imports
import EchartCard from "./../../components/EchartCard";
import { getCPI } from "./../../utilities/cpi";
import { getChartOptions, TYPE_HEATMAP } from "./../../utilities/chartOptions";


export default class OverviewHeatmap extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let data = [];
        const idayNo = _.range(1, moment().daysInMonth()+1, 1);
        const dayNo = idayNo.map(String)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let alias = this.props.reportList;
        if (alias.length > 0) {
            for (let i = 0; i < alias.length - 1; i++) {
                let ms = alias[i].meta.submitted_at;
                let d = new Date(ms);
                let e = d.getDate().toString();
                let toGetDayNo = new Date(d);
                let dayName = days[toGetDayNo.getDay()];
                let cpi = getCPI(alias[i].summary.lint.totalErrors, alias[i].summary.quality.cyclomatic,  alias[i].summary.quality.maintainability);
                data.push([days.indexOf(dayName), dayNo.indexOf(e), cpi]);
            }
        }

        data = data.map(function (item) {
            return [item[1], item[0], item[2]];
        });

        const options = {
            xAxis: {
                data: dayNo
            },
            yAxis: {
                data: days
            },
            series: [
                {
                    name: "CPI",
                    type: "heatmap",
                    data: data,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        };
        const tempOptions = getChartOptions(TYPE_HEATMAP, options);
        return (
            <EchartCard
                title="CPI Heatmap"
                options={tempOptions}
                height="350px"
                autoSize
            />
        );
    }
}








