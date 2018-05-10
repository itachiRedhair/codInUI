import OverviewHeatmap from "./OverviewHeatmap.jsx";
import { connect } from "react-redux";
import { showOverViewHeatMap } from "../../modules/overviewHeatMap";

const mapDispatchToProps = {
    showOverViewHeatMap
}

const mapStateToProps = state => {
   return {
    overviewHeatMapdata: state.overviewHeatMapReducer.overviewHeatMapdata
   } 
}
export default connect(mapStateToProps, mapDispatchToProps) (OverviewHeatmap);
