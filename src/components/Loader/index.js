import Loader from "./Loader.jsx";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { isLoading: state.loaderReducer.isLoading };
};

export default connect(mapStateToProps)(Loader);
