import SignupComponent from './Signup.jsx';
import { connect } from 'react-redux';

// action creators
import { actions } from './../../../modules/auth';

const mapDispatchToProps = dispatch => ({
  userSignUp: (name, email, password, confirm) => dispatch(actions.userSignUp(name, email, password, confirm)),
});

const mapStateToProps = state => ({
  signedUp: state.authReducer.signedUp,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
