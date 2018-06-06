import React, { Component } from 'react';
import ReduxToastr, { toastr } from 'react-redux-toastr';
import constants from './../../constants';
import './Toaster.scss';

class Toaster extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    const { toaster } = this.props;
    const { TYPE_SUCCESS, TYPE_ERROR, TYPE_WARN } = constants.toaster;
    if (toaster) {
      switch (toaster.type) {
        case TYPE_SUCCESS: {
          toastr.success(toaster.msg);
          break;
        }
        case TYPE_ERROR: {
          toastr.error(toaster.msg);
          break;
        }
        case TYPE_WARN: {
          toastr.warning(toaster.msg);
          break;
        }
      }
    }
  }


  render() {
    const { toaster } = this.props;
    const toast = (<ReduxToastr
      timeOut={1500}
      newestOnTop={false}
      preventDuplicatesa
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />)
    return !toaster ? null : toast;
  }
}

export default Toaster;

