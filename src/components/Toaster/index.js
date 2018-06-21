import { connect } from 'react-redux';

import Toaster from './Toaster.jsx';

const mapStateToProps = (state) => ({
  toaster: state.toasterReducer.toasterConfig,
});

export default connect(mapStateToProps)(Toaster);
