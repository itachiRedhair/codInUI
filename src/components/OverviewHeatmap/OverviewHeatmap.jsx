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
        let counts = {};        
        const idayNo = _.range(1, moment().daysInMonth()+1, 1);
        const dayNo = idayNo.map(String)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let alias = this.props.reportList;
        if (alias.length > 0) {
            for (let i = 0; i < alias.length ; i++) {
                let ms = alias[i].meta.submitted_at;
                let d = new Date(ms);
                let e = d.getDate().toString();
                let toGetDayNo = new Date(d);
                let dayName = days[toGetDayNo.getDay()];
                let cpiTime = new Date(ms).toString();
                let cpi = getCPI(alias[i].summary.lint.totalErrors,  alias[i].summary.quality.averageMaintainability);
                data.push([days.indexOf(dayName), dayNo.indexOf(e), cpi, cpiTime]);
            }
            for (var i = 0; i < data.length; i++) {
                var num = data[i][1];
                counts[num] = counts[num] ? counts[num] + 1 : 1;
              }
        }

        data = data.map(function (item) {
            return [item[1], item[0], item[2]];
        });
        const _mapColor = (params) => {
            if(params.data[2]>0 && params.data[2]<= 25){
                return "#ff3232";
            }
            else if(params.data[2]>25 && params.data[2]<= 50) {
                return "#ff8c0a";
            }
            else if(params.data[2]>50 && params.data[2]<= 75) {
                return "#fad22d";
            }
            else {
                return "#0fc373";
            }
        }

        const _formatter = (params, ticket) => {
            const totalCPI = params.data[2];
            const submissions = counts[params.data[0]];
            return `<div>
                        <div>CPI</div>
                        <div>Submissions: ${submissions}</div>
                        <div>Latest Score: ${totalCPI}</div>
                    </div>`
        }

        const options = {
            tooltip: {
                position: "top",
                formatter: _formatter
            },
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
                        color: _mapColor,
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








