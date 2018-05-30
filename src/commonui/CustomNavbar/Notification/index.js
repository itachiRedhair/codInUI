import Notification from './Notification.jsx';
import { connect } from 'react-redux';

// action creators
import { fetchUnseenNotifications } from '../../../modules/notification';

const mapDispatchToProps = {
    fetchUnseenNotifications,
};

const mapStateToProps = state => ({
    unseenNotifications: state.notificationReducer.unseenNotifications,
    notificationIds: state.notificationReducer.notificationIds
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Notification);
