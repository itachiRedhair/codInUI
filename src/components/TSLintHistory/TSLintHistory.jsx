import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


// Components imports
import EchartCard from './../../components/EchartCard';
import { getChartOptions, TYPE_LINE } from './../../utilities/chartOptions';

const TSLintHistory = (props) => {
  const tsLintErrorData = [];
  const tsLintWarningData = [];
  const tsLintDays = [];

  props.reportList.forEach((report) => {
    if (report.summary) {
      tsLintErrorData.push(report.summary.lint.totalErrors);
      tsLintWarningData.push(report.summary.lint.totalWarnings);
      tsLintDays.push(moment(report.meta.submitted_at).format('DD/MM/YYYY'));
    }
  });

  const options = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#121212',
      textStyle: {
        fontFamily: 'FiraCode',
      },
    },
    legend: {
      data: [
        { name: 'TSLint Errors', textStyle: { color: '#ff3232' } },
        { name: 'Warnings', textStyle: { color: '#fd822f' } },
      ],
    },
    xAxis: {
      data: tsLintDays,
    },
    series: [
      {
        name: 'TSLint Errors',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#ff3232',
        },
        data: tsLintErrorData,
        color: '#ff3232'
      },
      {
        name: 'Warnings',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#fd822f',
        },
        data: tsLintWarningData,
        color: '#fd822f'
      },
    ],
  };

  const tempOptions = getChartOptions(TYPE_LINE, options);

  return tsLintDays.length === 0 ? null : (
    <EchartCard title="Trend Graph" options={tempOptions} height="60vh" autoSize />
  );
};

export default TSLintHistory;

TSLintHistory.propTypes = {
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
