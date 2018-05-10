import SignupComponent from "./Signup.jsx";
import { connect } from "react-redux";

//action creators
import { actions } from "./../../../modules/auth";

const mapDispatchToProps = dispatch => {
  return {
    userSignUp: (name, email, password, confirm) => dispatch(actions.userSignUp(name, email, password, confirm))
  };
};

const mapStateToProps = state => {
    return {
        signedUp: state.authReducer.signedUp
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
