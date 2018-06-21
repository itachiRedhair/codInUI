import React, { Component } from 'react';
import ReduxToastr, { toastr } from 'react-redux-toastr';
import PropTypes from 'prop-types';
import constants from './../../constants';
import './Toaster.scss';

class Toaster extends Component {
  componentDidUpdate() {
    const { toaster } = this.props;
    const { TYPE_SUCCESS, TYPE_ERROR, TYPE_WARN } = constants.toaster;
    if (toaster) {
      switch (toaster.type) {
        case TYPE_SUCCESS: {
          toastr.success('Success', toaster.msg);
          break;
        }
        case TYPE_ERROR: {
          toastr.error('Error', toaster.msg);
          break;
        }
        case TYPE_WARN: {
          toastr.warning('Warning', toaster.msg);
          break;
        }
        default: {
          toastr.warning('Warning', 'Something went wrong');
          break;
        }
      }
    }
  }

  render() {
    const { toaster } = this.props;
    const toast = (
      <ReduxToastr
        timeOut={1500}
        newestOnTop={false}
        preventDuplicatesa
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    );
    return !toaster ? null : toast;
  }
}

export default Toaster;

Toaster.defaultProps = {
  toaster: {
    type: constants.toaster.TYPE_WARN,
    msg: 'Something unexpected happened',
  },
};

Toaster.propTypes = {
  toaster: PropTypes.shape({
    type: PropTypes.string,
    msg: PropTypes.string,
  }),
};
