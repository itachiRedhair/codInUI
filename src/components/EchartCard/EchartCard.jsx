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
      child: null
    };
  }

  componentDidMount() {
    let { echartWidth, title, ...echartProps } = this.props;

    if (this.props.autoSize) {
      const height = this.containerElement.current.clientHeight;
      const width = this.containerElement.current.clientWidth;
      echartWidth = `${width * 0.95}px`;
    }

    const child = <Echart {...echartProps} width={echartWidth} />;

    this.setState({ child });
  }

  render() {
    return (
      <div ref={this.containerElement} className="echart-card-container">
        <Card title={this.props.title ? this.props.title : "Card Title"}>
          {this.state.child}
        </Card>
      </div>
    );
  }
}

export default EchartCards;
