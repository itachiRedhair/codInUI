import LoginComponent from './LoginForm.jsx';
import { connect } from 'react-redux';

// action creators
import { actions } from './../../../modules/auth';

const mapDispatchToProps = (dispatch) => ({
  userLogIn: (username, password) => dispatch(actions.userLogIn(username, password))
});

const mapStateToProps = (state) => {
  return {
    test: 'test'
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
