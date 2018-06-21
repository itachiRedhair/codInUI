import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Components imports
import EchartCard from './../../components/EchartCard';
import { getChartOptions, TYPE_LINE } from './../../utilities/chartOptions';

class OverviewGraph extends Component {
  render() {
    const tsLintErrorData = [];
    const tsLintWarningData = [];
    const maintainability = [];
    const tsLintDays = [];
    this.props.reportList.forEach((report) => {
      if (report.summary) {
        tsLintErrorData.push(report.summary.lint.totalErrors);
        tsLintWarningData.push(report.summary.lint.totalWarnings);
        maintainability.push(report.summary.quality.averageMaintainability.toFixed(2));
        tsLintDays.push(moment(report.meta.submitted_at).format('DD/MM/YYYY'));
      }
    });

    const categoryLineOptionsFormatter = (params) => {
      const error = params[0];
      const warning = params[1];
      const maintainabilityFormatter = params[2];

      const errorText = `<span class="text-danger"><i class="fa fa-times"></i> ${
        error.data
      }</span>`;
      const warningText = `<span class="text-warning"><i class="fa fa-exclamation-triangle"></i> ${
        warning.data
      }</span>`;
      const maintainabilityText = `<span class="text-info"><i class="fa fa-area-chart"></i> ${
        maintainabilityFormatter.data
      }</span>`;

      return `${errorText} | ${warningText} | ${maintainabilityText}`;
    };

    const options = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#121212',
        textStyle: {
          color: '#9a9a9a',
          fontFamily: 'FiraCode',
        },
        formatter: categoryLineOptionsFormatter,
      },
      legend: {
        data: [
          { name: 'Lint Errors', textStyle: { color: '#a94442' } },
          { name: 'Lint Warnings', textStyle: { color: '#8a6d3b' } },
          { name: 'Maintainability', textStyle: { color: '#31708f' } },
        ],
      },
      xAxis: {
        data: tsLintDays,
      },
      series: [
        {
          name: 'Lint Errors',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#a94442',
          },
          data: tsLintErrorData,
          symbol: 'roundRect',
          symbolSize: 6,
          itemStyle: {
            color: '#a94442',
          },
        },
        {
          name: 'Lint Warnings',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#8a6d3b',
          },
          data: tsLintWarningData,
          symbol: 'roundRect',
          symbolSize: 6,
          itemStyle: {
            color: '#8a6d3b',
          },
        },
        {
          name: 'Maintainability',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#31708f',
          },
          data: maintainability,
          symbol: 'roundRect',
          symbolSize: 6,
          itemStyle: {
            color: '#31708f',
          },
        },
      ],
    };

    const tempOptions = getChartOptions(TYPE_LINE, options);

    const chart = (
      <EchartCard
        title="History of Code Linting & Maintainability"
        options={tempOptions}
        height="60vh"
        autoSize
      />
    );

    return tsLintDays.length === 0 ? null : chart;
  }
}

export default OverviewGraph;

OverviewGraph.propTypes = {
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
