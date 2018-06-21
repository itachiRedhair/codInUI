import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Card from './../../commonui/Card';

// Styles imports
import './CodeQuality.scss';

const CodeQuality = (props) => {
  let maintainability = 0;
  const len = props.reportList.length;
  if (len > 0) {
    if (props.submittedAt === 'Recent') {
      maintainability = props.reportList[len - 1].summary.quality.averageMaintainability.toFixed(1);
    } else {
      const result = props.reportList.filter((obj) => {
        return obj.meta.submitted_at === parseInt(props.submittedAt, 0);
      });
      const obj = result[0];
      maintainability = obj ? obj.summary.quality.averageMaintainability.toFixed(1) : '';
    }
  }

  return len === 0 ? null : (
    <Card title="Code Quality">
      <div className="tslint-summary-container">
        <div className="error-content">
          <div className="digit">
            <div className="error-number">{maintainability}</div>
            <div>Maintainability</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CodeQuality;

CodeQuality.propTypes = {
  submittedAt: PropTypes.string.isRequired,
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
