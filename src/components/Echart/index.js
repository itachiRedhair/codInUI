import React from "react";
import Echart from "./Echart.jsx";

import "./Echart.scss";

export default props => (
  <div className="echarts-container">
    <Echart {...props} />
  </div>
);

// import React, { Component } from "react";


// import Echart from "./Echart.jsx";

// import "./Echart.scss";

// class EchartContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.containerElement = React.createRef();
//     if (this.props.autoSize) {
//       this.state = {
//         height: 0,
//         width: 0
//       };
//     }
//   }

//   componentDidMount() {
//     if (this.props.autoSize) {
//       const height = this.containerElement.current.clientHeight;
//       const width = this.containerElement.current.clientWidth;
//       this.setState({ height, width });
//       console.log("in overview graph", this.containerElement);
//     }
//   }

//   render() {
//     let echartsProps = this.props;

//     if (this.props.autoSize) {
//       echartsProps = {
//         ...echartsProps,
//         width: this.state.width,
//         height: this.state.height
//       };
//     }
//     return (
//       <div ref={this.containerElement}>
//         <div className="echarts-container">
//           <Echart {...echartsProps} />
//         </div>
//       </div>
//     );
//   }
// }

// export default EchartContainer;
