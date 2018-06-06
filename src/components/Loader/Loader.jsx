import React from 'react';
import PropTypes from 'prop-types';

import './Loader.scss';

const Loader = ({ isLoading }) =>
  isLoading ? (
    <div className="loader-container">
      <div className="loader" />
    </div>
  ) : null;

export default Loader;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
