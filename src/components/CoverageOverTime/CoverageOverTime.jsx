import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Components imports
import EchartCard from './../../components/EchartCard';

class CoverageOverTime extends Component {
  render() {
    const coverageLines = [];
    const coverageStatements = [];
    const coverageFunctions = [];
    const coverageBranches = [];
    const coverageTotalLines = [];
    const coverageTotalStatements = [];
    const coverageTotalFunctions = [];
    const coverageTotalBranches = [];
    const coverageReportDays = [];
    if (this.props.coverageOTList.length > 0) {
      this.props.coverageOTList[0].output.slice().reverse().forEach((report) => {
        coverageLines.push(report.summary.lines.covered);
        coverageStatements.push(report.summary.statements.covered);
        coverageFunctions.push(report.summary.functions.covered);
        coverageBranches.push(report.summary.branches.covered);
        coverageTotalLines.push(report.summary.lines.total);
        coverageTotalStatements.push(report.summary.statements.total);
        coverageTotalFunctions.push(report.summary.functions.total);
        coverageTotalBranches.push(report.summary.branches.total);
        coverageReportDays.push(moment(report.submitted_at).format('DD/MM/YYYY'));
      });
    }

    const option = {
      // grid: {
      //   left: '3%',
      //   right: '3%',
      //   bottom: '10%',
      //   top: '10%',
      //   containLabel: true,
      // },
      tooltip: {
        show: 'true',
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(112,112,112,0)',
          },
        },
        textStyle: {
          fontFamily: 'FiraCode',
        },
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: [8, 10],
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);',
      },
      legend: {
        textStyle: {
          color: 'white',
          fontFamily: 'FiraCode',
        },
        data: [
          { name: 'Lines Covered', textStyle: { color: '#1a9bfc' } },
          { name: 'Statements Covered', textStyle: { color: '#4C53D6' } },
          { name: 'Branches Covered', textStyle: { color: '#543930' } },
          { name: 'Functions Covered', textStyle: { color: '#663399' } },
        ],
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#9a9a9a',
              fontWeight: 'normal',
              fontSize: '12',
              fontFamily: 'FiraCode',
            },
          },
          data: coverageReportDays,
        },
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: coverageReportDays,
        },
      ],
      yAxis: {
        type: 'value',
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#9a9a9a',
            fontWeight: 'normal',
            fontSize: '12',
            fontFamily: 'FiraCode',
          },
        },
      },
      series: [
        {
          name: 'Lines Covered',
          type: 'bar',
          stack: 0,
          xAxisIndex: 0,
          data: coverageLines,
          label: 'Lines',
          barMaxWidth: 20,
          z: 1,
          color: '#1a9bfc',
        },
        {
          name: 'Statements Covered',
          type: 'bar',
          stack: 0,
          xAxisIndex: 0,
          data: coverageStatements,
          label: 'Statements',
          barMaxWidth: 20,
          z: 1,
          color: '#4C53D6',
        },
        {
          name: 'Branches Covered',
          type: 'bar',
          stack: 0,
          xAxisIndex: 0,
          data: coverageBranches,
          label: 'Branches',
          barMaxWidth: 20,
          z: 1,
          color: '#543930',
        },
        {
          name: 'Functions Covered',
          type: 'bar',
          stack: 0,
          xAxisIndex: 0,
          data: coverageFunctions,
          label: 'Functions',
          barMaxWidth: 20,
          z: 1,
          color: '#663399',
        },
        {
          name: 'Total Lines',
          type: 'bar',
          stack: 0,
          xAxisIndex: 1,
          data: coverageTotalLines,
          label: 'Total Lines',
          barMaxWidth: 20,
          z: 0,
          color: '#424242',
        },
        {
          name: 'Total Statements',
          type: 'bar',
          stack: 0,
          xAxisIndex: 1,
          data: coverageTotalStatements,
          label: 'Total Statements',
          barMaxWidth: 20,
          z: 0,
          color: '#424242',
        },
        {
          name: 'Total Branches',
          type: 'bar',
          stack: 0,
          xAxisIndex: 1,
          data: coverageTotalBranches,
          label: 'Total Branches',
          barMaxWidth: 20,
          z: 0,
          color: '#424242',
        },
        {
          name: 'Total Functions',
          type: 'bar',
          stack: 0,
          xAxisIndex: 1,
          data: coverageTotalFunctions,
          label: 'Total Functions',
          barMaxWidth: 20,
          z: 0,
          color: '#424242',
        },
      ],
    };

    // const tempOptions = getChartOptions(TYPE_BAR, options);

    const chart = (
      <EchartCard title="Over the time Coverage Reports" options={option} height="60vh" autoSize />
    );



    return coverageReportDays.length === 0 ? null : chart;
  }
}

export default CoverageOverTime;

CoverageOverTime.propTypes = {
  coverageOTList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
