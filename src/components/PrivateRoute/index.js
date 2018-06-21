import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute.jsx';

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
