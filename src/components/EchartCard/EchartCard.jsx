import React, { Component } from "react";

//Components imports
import Echart from "./../Echart";
import Card from "./../../commonui/Card";

//Styles imports
import "./EchartCard.scss";

class EchartCards extends Component {
  constructor(props) {
    super(props);
    this.containerElement = React.createRef();
    this.state = {
      child: null,
      echartWidth: null
    };
  }

  componentDidMount() {
    // let { echartWidth, title, ...echartProps } = this.props;
    // if (this.props.autoSize) {
    //   const width = this.containerElement.current.clientWidth;
    //   echartWidth = `${width * 0.95}px`;
    //   this.setState({
    //     echartWidth
    //   })
    // }
  }

  render() {
    let { echartWidth, title, ...echartProps } = this.props;
    const child = <Echart {...echartProps} />;
    return (
      <div ref={this.containerElement} className="echart-card-container">
        <Card
          {...this.props}
          title={this.props.title ? this.props.title : "Card Title"}
        >
          {child}
        </Card>
      </div>
    );
  }
}

export default EchartCards;
