
import CPICard from './CPICard.jsx';
import { connect } from 'react-redux';

// action creators
import { listTslintReport } from '../../modules/report';

const mapDispatchToProps = {
  listTslintReport,
};

const mapStateToProps = state => ({
  projectId: state.projectReducer.projectId,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(CPICard);
