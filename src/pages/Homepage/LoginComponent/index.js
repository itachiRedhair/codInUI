import LoginComponent from "./LoginForm.jsx";
import { connect } from "react-redux";

//action creators
import { userLogIn } from "./../../../modules/auth";

const mapDispatchToProps = dispatch => {
  return {
    userLogIn: (username, password) => dispatch(userLogIn(username, password))
  };
};

export default connect(null, mapDispatchToProps)(LoginComponent);
