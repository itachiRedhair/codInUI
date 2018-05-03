import SignupComponent from "./Signup.jsx";
import { connect } from "react-redux";

//action creators
import { actions } from "./../../../modules/auth";

const mapDispatchToProps = dispatch => {
  return {
    userSignUp: (username, password, confirm) =>
      dispatch(actions.userSignUp(username, password, confirm))
  };
};

export default connect(null, mapDispatchToProps)(SignupComponent);
