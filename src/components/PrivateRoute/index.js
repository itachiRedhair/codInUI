import PrivateRoute from "./PrivateRoute.jsx";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(mapStateToProps)(PrivateRoute);
