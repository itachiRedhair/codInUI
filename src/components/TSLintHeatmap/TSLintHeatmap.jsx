import React, { Component } from "react";
import moment from "moment";

// Components imports
import EchartCard from "./../../components/EchartCard";
import { getCPI } from "./../../utilities/cpi";
import { getChartOptions, TYPE_HEATMAP } from "./../../utilities/chartOptions";

const _ = require('lodash');


export default class TSLintHeatmap extends Component {
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
        const alias = this.props.reportList;
        if (alias.length > 0) {
            for (let i = 0; i < alias.length - 1; i++) {
                const ms = alias[i].meta.submitted_at;
                const d = new Date(ms);
                const e = d.getDate().toString();
                const toGetDayNo = new Date(d);
                const dayName = days[toGetDayNo.getDay()];
                const totalErrors = alias[i].summary.lint.totalErrors;
                data.push([days.indexOf(dayName), dayNo.indexOf(e), totalErrors]);
            }
        }
        data = data.map((item) => [item[1], item[0], item[2]]);
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
                    data,
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
            title="Error Heatmap"
            options={tempOptions}
            height="350px"
            autoSize
          />
        );
    }
}








