import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

// Components imports
import Echart from './../../components/Echart';
import Card from './../../commonui/Card';

// Syles imports
import './CoverageComponentPie.scss';

class CoverageComponentPie extends Component {
  componentDidMount() {}

  getPIOptions = (_data, _name) => {
    const data = _data || [];
    const name = _name || '';
    return {
      title: {
        text: name,
        textStyle: {
          fontFamily: 'FiraCode',
          fontSize: 14,
          color: 'white',
          fontWeight: 'lighter',
        },
        left: 'center',
        top: 'middle',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} [ {d}% ]',
        textStyle: {
          fontFamily: 'FiraCode',
        },
        padding: [8, 12],
      },
      grid: {
        height: '100%',
        width: '100%',
      },
      series: [
        {
          type: 'pie',
          radius: ['55%', '70%'],
          center: ['50%', '50%'],
          data,
          label: {
            show: true,
            position: 'outside',
            fontFamily: 'FiraCode',
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
      color: [
        '#87D37C', // covered
        '#2f4554', // skipped
        '#424242', // uncovered
      ],
    };
  };

  preparePIData = () => {
    const _getUncovered = (obj) => obj.total - (obj.covered + obj.skipped);
    const _getDataArray = (obj) => {
      const uncovered = _getUncovered(obj);
      return [
        { name: `COVERED`, value: obj.covered },
        { name: `SKIPPED`, value: obj.skipped },
        { name: `UNCOVERED`, value: uncovered },
      ];
    };

    const { coverageSummary } = this.props;
    if (!coverageSummary) return [];
    const { branches, functions, lines, statements } = coverageSummary;
    const branchesData = _getDataArray(branches);
    const functionsData = _getDataArray(functions);
    const linesData = _getDataArray(lines);
    const statementsData = _getDataArray(statements);
    return { branchesData, functionsData, linesData, statementsData };
  };

  render() {
    const { branchesData, functionsData, linesData, statementsData } = this.preparePIData();
    const branchesOptions = this.getPIOptions(branchesData, 'BRANCHES');
    const functionsOptions = this.getPIOptions(functionsData, 'FUNCTIONS');
    const linesOptions = this.getPIOptions(linesData, 'LINES');
    const statementsOptions = this.getPIOptions(statementsData, 'STATEMENTS');

    return (
      <Card title="Coverage Summary">
        <Col md={6}>
          <Echart width="200px" height="200px" options={branchesOptions} />
        </Col>
        <Col md={6}>
          <Echart width="200px" height="200px" options={functionsOptions} />
        </Col>
        <Col md={6}>
          <Echart width="200px" height="200px" options={linesOptions} />
        </Col>
        <Col md={6}>
          <Echart width="200px" height="200px" options={statementsOptions} />
        </Col>
      </Card>
    );
  }
}

export default CoverageComponentPie;
CoverageComponentPie.propTypes = {
  coverageSummary: PropTypes.shape({}).isRequired,
};
