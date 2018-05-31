import Notification from './Notification.jsx';
import { connect } from 'react-redux';

// action creators
import { fetchUnseenNotifications, fetchAllNotifications } from '../../../modules/notification';
import { respondInvitation } from '../../../modules/invitation';
const mapDispatchToProps = {
    fetchUnseenNotifications,
    fetchAllNotifications,
    respondInvitation
};

const mapStateToProps = state => ({
    unseenNotifications: state.notificationReducer.unseenNotifications,
    allNotifications: state.notificationReducer.allNotifications,
    notificationIds: state.notificationReducer.notificationIds
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Notification);
