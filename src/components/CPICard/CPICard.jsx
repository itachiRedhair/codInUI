import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components imports
import EchartCard from './../../components/EchartCard';

// Function Imports
import { getCPI } from './../../utilities/cpi';

// Styles imports
import './CPICard.scss';

class CPICard extends Component {
  componentDidMount() {}

  render() {
    let cpiScore = 0;
    let errors = 0;
    let maintainability = 0;

    const len = this.props.reportList.length;
    if (this.props.reportList.length > 0) {
      if(this.props.submittedAt === 'Recent') {
        errors = this.props.reportList[len - 1].summary.lint.totalErrors;
        maintainability = this.props.reportList[len - 1].summary.quality.averageMaintainability;
      }
      else {
         const result = this.props.reportList.filter(( obj ) => {
          return obj.meta.submitted_at === parseInt(this.props.submittedAt,0);
        });
        const obj = result[0];
        errors = obj ? obj.summary.lint.totalErrors : '';
        maintainability =  obj ? obj.summary.quality.averageMaintainability : '';
      }
      cpiScore = getCPI(errors, maintainability);
    }
    const tempOptions = {
      series: [
        {
          type: 'gauge',
          radius: '90%',
          axisLine: {
            lineStyle: {
              color: [[0.25, '#ff3232'], [0.5, '#fd822f'], [0.75, '#fdaf1b'], [1.0, '#0fc373']],
              width: 3,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          data: [{ value: cpiScore }]
        }
      ]
    };

    return <EchartCard title="CPI" height="300px" options={tempOptions} autoSize />;
  }
}

export default CPICard;

CPICard.propTypes = {
  submittedAt: PropTypes.string.isRequired,
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired
};
