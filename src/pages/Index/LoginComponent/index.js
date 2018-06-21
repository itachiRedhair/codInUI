import { connect } from 'react-redux';
import LoginComponent from './LoginForm.jsx';

// action creators
import { actions } from './../../../modules/auth';

const mapDispatchToProps = (dispatch) => ({
  userLogIn: (username, password) => dispatch(actions.userLogIn(username, password)),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginComponent);
