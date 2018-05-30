import CustomNavbar from './CustomNavbar.jsx';
import { connect } from 'react-redux';

// action creators
import { actions } from '../../modules/auth';

const mapDispatchToProps = dispatch => ({
  userLogOut: () => dispatch(actions.userLogOut()),
});

export default connect(null, mapDispatchToProps)(CustomNavbar);