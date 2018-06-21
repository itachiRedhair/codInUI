import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { range } from 'lodash';
// Components imports
import EchartCard from './../../components/EchartCard';
import { getChartOptions, TYPE_HEATMAP } from './../../utilities/chartOptions';

const TSLintHeatmap = (props) => {
  const idayNo = range(1, moment().daysInMonth() + 1, 1);
  const dayNo = idayNo.map(String);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let data = props.reportList.map((report) => {
    const ms = report.meta.submitted_at;
    const d = new Date(ms);
    const e = d.getDate().toString();
    const toGetDayNo = new Date(d);
    const dayName = days[toGetDayNo.getDay()];
    const errors = report.summary.lint.totalErrors;
    return [days.indexOf(dayName), dayNo.indexOf(e), errors];
  });

  data = data.map((item) => [item[1], item[0], item[2]]);

  const formatter = (params) => {
    return `<div>
                      <div>Errors: ${params.data[2]}</div>
                  </div>`;
  };

  const options = {
    xAxis: {
      data: dayNo,
    },
    yAxis: {
      data: days,
    },
    tooltip: {
      position: 'top',
      formatter,
    },
    series: [
      {
        name: 'CPI',
        type: 'heatmap',
        data,
        label: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  const tempOptions = getChartOptions(TYPE_HEATMAP, options);
  return <EchartCard title="Error Heatmap" options={tempOptions} height="350px" autoSize />;
};

export default TSLintHeatmap;

TSLintHeatmap.propTypes = {
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
