import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components imports

import EchartCard from './../../components/EchartCard';
import { getChartOptions, TYPE_BAR } from './../../utilities/chartOptions';

// Styles import
import './TSLintBar.scss';

class TSLintBar extends Component {
  componentDidMount() {}

  render() {
    const fileNames = [];
    const errorCount = [];
    const warningCount = [];
    this.props.reportListDetails.forEach((item) => {
      const filePath = item.file.substring(item.file.lastIndexOf('/') + 1, item.file.length);
      fileNames.push(filePath);

      const errors = item.output.filter(anElement => anElement.ruleSeverity === 'ERROR');
      if(errors.length > 0) {
        errorCount.push(errors[0].count);
      } else {
        errorCount.push(null);
      }

      const warnings = item.output.filter(anElement => anElement.ruleSeverity === 'WARNING');
      if(warnings.length > 0) {
        warningCount.push(warnings[0].count);
      } else {
        warningCount.push(null);
      }

    });
    const options = {
      legend: {
        data: ['Errors', 'Warnings'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        show: false,
      },
      yAxis: {
        type: 'category',
        data: fileNames,
        inverse: true,
      },
      series: [
        {
          name: 'Errors',
          type: 'bar',
          barMaxWidth: 30,
          stack: 'error-warning-stack',
          label: {
            position: 'insideRight',
            normal: {
              show: true,
              itemStyle: {
                color: 'white',
              },
            },
          },
          data: errorCount,
        },
        {
          name: 'Warnings',
          type: 'bar',
          barMaxWidth: 30,
          stack: 'error-warning-stack',
          label: {
            position: 'insideRight',
            normal: {
              show: true,
              itemStyle: {
                color: 'white',
              },
            },
          },
          data: warningCount,

        },
      ],
    };

    const tempOptions = getChartOptions(TYPE_BAR, options);

    const emptyRecentActivity = (
      <div className="empty-recent-activity-container text-muted">
        <span>
          <i className="fas fa-info-circle text-info" />
        </span>
        <span>Your report does not contain any errors.</span>
      </div>
    );

    return this.props.reportListDetails.length === 0 ? emptyRecentActivity : (
      <div className="tslint-bar-container">
        <EchartCard
          title="TSLint Bar Graph"
          options={tempOptions}
          height={25 * (fileNames.length < 5 ? 5 : fileNames.length - 5) + 300}
          autoSize
          contentScroll
        />
      </div>
    );
  }
}

export default TSLintBar;

TSLintBar.propTypes = {
  reportListDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
