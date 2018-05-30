import React from 'react';
import Echart from './Echart.jsx';

import './Echart.scss';

export default props => (
  <div className="echarts-container">
    <Echart {...props} />
  </div>
);

