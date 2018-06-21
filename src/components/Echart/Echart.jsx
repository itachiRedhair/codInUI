import React, { Component } from 'react';
import echarts from 'echarts';
// import 'echarts-liquidfill';
import PropTypes from 'prop-types';

import './Echart.scss';

class EchartComponent extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chartNode = null;
  }

  componentDidMount = () => {
    this.createEchart();
  };

  componentWillReceiveProps = (nextProps) => {
    this.updateChart(nextProps);
  };

  componentWillUnmount = () => {
    if (this.echarts) {
      this.chart.dispose();
    }
  };

  // Removed ReactDom.findDOMNode because of lint error
  // Refer https://stackoverflow.com/questions/40499267/react-dnd-avoid-using-finddomnode
  createEchart = () => {
    // this.chart = echarts.init(ReactDom.findDOMNode(this));
    this.chart = echarts.init(this.chartNode);
    this.updateChart(this.props);
  };

  updateChart = (nextProps) => {
    const { options } = nextProps;
    if (options) {
      this.chart.setOption(options);
    }
  };

  render() {
    return (
      <div className="echarts-container">
        <div
          style={{ height: this.props.height }}
          ref={(node) => {
            this.chartNode = node;
          }}
        />
      </div>
    );
  }
}

export default EchartComponent;

// EchartComponent.defaultProps = {
//   width: 0,
// };

EchartComponent.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
