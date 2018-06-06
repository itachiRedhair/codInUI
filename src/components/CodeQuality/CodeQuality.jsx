import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Card from './../../commonui/Card';

// Styles imports
import './CodeQuality.scss';

const CodeQuality = (props) => {
  // let cyclomatic = 0;
  let maintainability = 0;
  const len = props.reportList.length;
  if (len > 0) {
    // cyclomatic = this.props.reportList[len - 1].summary.quality.cyclomatic.toFixed(1);
    maintainability = props.reportList[len - 1].summary.quality.averageMaintainability.toFixed(1);
  }

  if (len === 0) {
    return <div>Cards should be here</div>;
  }

  return (
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
  reportList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
