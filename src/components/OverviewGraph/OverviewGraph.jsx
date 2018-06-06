import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Components imports
import EchartCard from './../../components/EchartCard';
import { getChartOptions, TYPE_LINE } from './../../utilities/chartOptions';

class OverviewGraph extends Component {
  cachedChart = null;

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
        tsLintDays.push(moment(report.meta.submitted_at).format('L'));
      }
    });

    const options = {
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
    if (tsLintDays.length === 0) {
      return <div>Echarts should be here</div>;
    }
    if (!this.cachedChart) {
      this.cachedChart = (
        <EchartCard
          title="History of Code Linting & Maintainability"
          options={tempOptions}
          height="60vh"
          autoSize
        />
      );
    } else {
      // console.log('using cached chart');
    }
    return this.cachedChart;
  }
}

export default OverviewGraph;

OverviewGraph.propTypes = {
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
