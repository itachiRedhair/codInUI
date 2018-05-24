import Overview from "./Overview.jsx";
import { connect } from "react-redux";

//action creators
import { listTslintReport } from "../../../modules/report";

const mapDispatchToProps = {
    listTslintReport
};

const mapStateToProps = state => {
    return {
        isLoading: state.loaderReducer.isLoading,
        reportList: state.reportReducer.reportList,
        isFetching: state.reportReducer.isFetching,        
        projectId: state.projectReducer.projectId
    };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
    pure: false
})(Overview);
