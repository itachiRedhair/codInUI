import Toaster from "./Toaster.jsx";

import { connect } from 'react-redux';

// action creators
// import { submissionList } from '../../modules/project';
// import { listTslintReport } from '../../modules/report';

// const mapDispatchToProps = {
//   submissionList,
//   listTslintReport,
// };

const mapStateToProps = state => ({
  toaster: state.toasterReducer.toasterConfig
});

export default connect(mapStateToProps, null)(Toaster);
