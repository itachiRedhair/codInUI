import { connect } from 'react-redux';

import ChangePassword from './ChangePassword.jsx';
import { setChangePasswordModalState } from '../../modules/modalState';
import { changePassword, userLogOut } from '../../modules/auth';


const mapDispatchToProps = {
  changePassword,
  setChangePasswordModalState,
  userLogOut
};

const mapStateToProps = (state) => ({
  showChangePasswordModal: state.modalReducer.showChangePasswordModal,
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
