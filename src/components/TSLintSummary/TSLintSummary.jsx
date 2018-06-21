import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { map } from 'lodash';

// Components imports
import Echart from './../../components/Echart';
import Card from './../../commonui/Card';
import { getChartOptions, TYPE_BAR } from './../../utilities/chartOptions';

// Styles imports
import './TSLintSummary.scss';

// TODO
// Top 5 errors have been implemented
// Need to find better logic

const sortData = (obj) => {
  const sortable = [];
  /* eslint-disable */
  for (const value in obj) {
    if (obj.hasOwnProperty(value)) {
      sortable.push([value, obj[value]]);
    }
  }
  /* eslint-enable */
  sortable.sort((a, b) => b[1] - a[1]);
  let sortableData = {};
  /* eslint-disable */

  sortableData = sortable.map((element) => {
    sortableData[element[0]] = element[1];
    return sortableData;
  });
  /* eslint-enable */

  return sortableData[0];
};

const TSLintSummary = (props) => {
  const len = props.reportList.length;
  let errorCountData = [];
  let xAxisData = [];
  const yAxisData = [];
  let errCount = 0;
  let count = 0;
  let recentData;
  if (len > 0) {
    if (props.submittedAt === 'Recent') {
      recentData = props.reportList[len - 1].summary.lint.errorCounts; // changed, previosly it was summary.lint.errorcounts
    } else {
      const result = props.reportList.filter((obj) => {
        return obj.meta.submitted_at === parseInt(props.submittedAt, 0);
      });
      const obj = result[0];
      recentData = obj ? obj.summary.lint.errorCounts : '';
    }

    let sortedArray;
    if (Object.keys(recentData).length > 0) {
      sortedArray = sortData(recentData);
    } else {
      sortedArray = recentData;
    }
    errorCountData = map(sortedArray, (value, key) => {
      count += 1;
      const xData = {
        value: key,
      };
      xAxisData.push(xData);
      const yData = {
        value,
      };
      yAxisData.push(yData);
      if (count <= 5) errCount += value;

      return {
        value,
        name: key,
      };
    });

    const keys = Object.keys(sortedArray);
    const errLen = Math.min(5, keys.length);
    errorCountData = errorCountData.slice(0, errLen);
    xAxisData = xAxisData.splice(0, errLen);
  }

  const options = {
    grid: {
      show: false,
    },
    xAxis: {
      name: 'Errors',
      type: 'category',
      axisLabel: {
        rotate: -15,
        color: 'white',
      },
      data: xAxisData,
    },
    yAxis: {
      name: 'Counts',
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
    },
    series: [
      {
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
          color: 'red',
        },
        data: errorCountData,
        barWidth: '10px',
        barCategoryGap: '10',
      },
    ],
  };

  const tempOptions = getChartOptions(TYPE_BAR, options);

  const emptyRecentActivity = (
    <Card title="TSLint Summary">
      <div className="empty-recent-activity-container text-muted">
        <span>
          <i className="fas fa-info-circle text-info" />
        </span>
        <span>Your report does not contain any errors.</span>
      </div>
    </Card>
  );

  return errorCountData.length === 0 ? (
    emptyRecentActivity
  ) : (
    <Card title="TSLint Summary">
      <div className="tslint-summary-container">
        <Row className="tslint-summary">
          <Col md={4} className="error-number-container">
            <div className="digit">
              <div className="error-number">{errCount}</div>
              <div>Errors</div>
            </div>
          </Col>
          <Col md={8}>
            <Echart width="550px" height="300px" options={tempOptions} />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default TSLintSummary;

TSLintSummary.propTypes = {
  submittedAt: PropTypes.string.isRequired,
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
