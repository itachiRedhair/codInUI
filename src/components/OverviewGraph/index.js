import OverviewGraph from "./OverviewGraph.jsx";
import { connect } from 'react-redux';
import { showOverviewData } from '../../modules/overviewData';

const mapDispatchToProps = {
    showOverviewData
}
const mapStateToProps = state => {
    // console.log('overview data state', state.overviewDataReducer);
    return {
        overviewData: state.overviewDataReducer.overviewData
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewGraph);
