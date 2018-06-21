import { connect } from 'react-redux';
import Notification from './Notification.jsx';

// action creators
import { fetchAllNotifications } from '../../../modules/notification';
import { respondInvitation } from '../../../modules/invitation';

const mapDispatchToProps = {
  fetchAllNotifications,
  respondInvitation,
};

const mapStateToProps = (state) => ({
  allNotifications: state.notificationReducer.allNotifications,
  notificationIds: state.notificationReducer.notificationIds,
  unseenNotifications: state.notificationReducer.unseenNotifications
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
