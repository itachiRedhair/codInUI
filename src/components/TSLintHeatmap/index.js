import TSLintHeatmap from "./TSLintHeatmap.jsx";
import { connect } from "react-redux";
import { showTsLintHeatmap } from "../../modules/tsLintHeatMap";

const mapDispatchToProps = {
    showTsLintHeatmap
}
const mapStateToProps = state => {
    tsLintHeatmapData: state.tsLintHeatMapReducer.tsLintHeatmapData
}

export default connect(mapStateToProps, mapDispatchToProps)(TSLintHeatmap);
