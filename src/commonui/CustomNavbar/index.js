import { connect } from 'react-redux';
import CustomNavbar from './CustomNavbar.jsx';

// action creators
import { userLogOut,  } from '../../modules/auth';
import { setChangePasswordModalState } from '../../modules/modalState';


const mapDispatchToProps = {
  userLogOut,
  setChangePasswordModalState
};
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  showChangePasswordModal: state.modalReducer.showChangePasswordModal,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNavbar);
