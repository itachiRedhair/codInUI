import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { range } from 'lodash';

// Components imports
import EchartCard from './../../components/EchartCard';
import { getCPI } from './../../utilities/cpi';
import { getChartOptions, TYPE_HEATMAP } from './../../utilities/chartOptions';

class OverviewHeatmap extends Component {
  componentDidMount() {}

  render() {
    let data = [];
    const counts = {};
    const idayNo = range(1, moment().daysInMonth() + 1, 1);
    const dayNo = idayNo.map(String);
    /* eslint-disable no-plusplus */
    const cpiRangeData = [];
    for (let i = 0; i < 10; i++) {
      cpiRangeData.push({
        low: i * 10 + 1,
        high: i * 10 + 10,
      });
    }
    const cpiRangeAxis = [];
    for (let i = 0; i < 10; i++) {
      cpiRangeAxis.push(`${cpiRangeData[i].low} - ${cpiRangeData[i].high}`);
    }
    /* eslint-enable no-plusplus */

    const alias = this.props.reportList;

    const findDataRangeIndex = (x) => {
      const result = (x - (x % 10)) / 10;
      const whole = result - 1;
      if (x % 10 === 0) {
        return whole;
      }
      return result;
    };

    data = alias.map((item) => {
      const ms = item.meta.submitted_at;
      const d = new Date(ms);
      const e = d.getDate().toString();
      const cpiTime = new Date(ms).toString();
      const cpi = getCPI(
        item.summary.lint.totalErrors,
        item.summary.quality.averageMaintainability
      );
      const cpiRound = Math.round(cpi);
      return [findDataRangeIndex(cpiRound), dayNo.indexOf(e), cpi, cpiTime];
    });

    data.forEach((item) => {
      const num = item[1];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    });

    data = data.map((item) => [item[1], item[0], item[2]]);
    const mapColor = (params) => {
      if (params.data[2] > 0 && params.data[2] <= 25) {
        return '#ff3232';
      } else if (params.data[2] > 25 && params.data[2] <= 50) {
        return '#ff8c0a';
      } else if (params.data[2] > 50 && params.data[2] <= 75) {
        return '#fecc3870';
      }

      return '#0fc373';
    };

    const formatter = (params) => {
      const totalCPI = params.data[2];
      const submissions = counts[params.data[0]];
      return `<div>
                        <div>CPI</div>
                        <div>Submissions: ${submissions}</div>
                        <div>Latest Score: ${totalCPI}</div>
                    </div>`;
    };

    const options = {
      grid: {
        show: false,
        top: '5%',
        bottom: '15%',
        left: '12%',
        right: '5%',
      },
      tooltip: {
        position: 'top',
        formatter,
      },
      xAxis: {
        data: dayNo,
        name: 'Days',
        nameLocation: 'center',
        nameGap: 28,
        nameTextStyle: {
          color: '#9a9a9a',
          fontFamily: 'FiraCode',
        },
      },
      yAxis: {
        data: cpiRangeAxis,
        name: 'CPI Range',
        nameLocation: 'center',
        nameGap: 68,
        nameTextStyle: {
          color: '#9a9a9a',
          fontFamily: 'FiraCode',
        },
      },
      series: [
        {
          name: 'CPI',
          type: 'heatmap',
          data,
          label: {
            normal: {
              // show: true,
            },
          },
          itemStyle: {
            color: mapColor,
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    const tempOptions = getChartOptions(TYPE_HEATMAP, options);
    return <EchartCard title="CPI Heatmap" options={tempOptions} height="350px" autoSize />;
  }
}

export default OverviewHeatmap;

OverviewHeatmap.propTypes = {
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
