import { connect } from 'react-redux';
import Loader from './Loader.jsx';

const mapStateToProps = (state) => ({ isLoading: state.loaderReducer.isLoading });

export default connect(mapStateToProps)(Loader);
