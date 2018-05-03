import Profile from "./Profile.jsx";
import { connect } from "react-redux";

//action creators
import { actions } from "./../../../../modules/auth";

const mapDispatchToProps = dispatch => {
  return {
    userLogOut: () => dispatch(actions.userLogOut())
  };
};

export default connect(null, mapDispatchToProps)(Profile);
