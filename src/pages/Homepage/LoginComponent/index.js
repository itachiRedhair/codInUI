import LoginComponent from "./LoginForm.jsx";
import { connect } from "react-redux";

//action creators
import { actions } from "./../../../modules/auth";

const mapDispatchToProps = dispatch => {
  return {
    userLogIn: (username, password) =>
      dispatch(actions.userLogIn(username, password))
  };
};

export default connect(null, mapDispatchToProps)(LoginComponent);
