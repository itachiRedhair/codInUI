import { connect } from 'react-redux';
import Coverage from './Coverage.jsx';

// action creators

const mapStateToProps = (state) => ({
    coverageDetails: state.activeProjectReducer.coverageList,
    coverageOTList: state.activeProjectReducer.coverageOTList,
});

export default connect(
  mapStateToProps,
  null
)(Coverage);
