import React from 'react';
import PropTypes from 'prop-types';

import { ProgressBar } from 'react-bootstrap';

// styles
import './ProgressBar.scss';

const ProgressBarComponent = (props) => {
  let backGround;
  if (props.value <= 20) {
    backGround = 'danger';
  } else if (props.value <= 60) {
    backGround = 'warning';
  } else {
    backGround = 'success';
  }
  const label = <span className="progress-bar-percent">{props.value} %</span>;
  return (
    <div>
      <ProgressBar bsStyle={backGround} label={label} now={props.value} />
    </div>
  );
};
export default ProgressBarComponent;
ProgressBarComponent.propTypes = {
  value: PropTypes.number.isRequired,
};
