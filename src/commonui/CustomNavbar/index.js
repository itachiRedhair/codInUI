import CustomNavbar from './CustomNavbar.jsx';
import { connect } from 'react-redux';

// action creators
import { actions } from '../../modules/auth';

const mapDispatchToProps = dispatch => ({
  userLogOut: () => dispatch(actions.userLogOut()),
});

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
