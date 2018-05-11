import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
// import Page from "./coverage/index.html";
import Iframe from "react-iframe";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// var htmlDoc = { __html: Page };

//Components imports

//Syles imports
import "./Coverage.scss";

let data = [
  {
    total: {
      lines: { total: 1041, covered: 412, skipped: 0, pct: 39.58 },
      statements: { total: 1176, covered: 492, skipped: 0, pct: 41.84 },
      functions: { total: 259, covered: 47, skipped: 0, pct: 18.15 },
      branches: { total: 213, covered: 4, skipped: 0, pct: 1.88 }
    },
    "/polyfills.ts": {
      lines: { total: 2, covered: 2, skipped: 0, pct: 100 },
      functions: { total: 0, covered: 0, skipped: 0, pct: 100 },
      statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
      branches: { total: 0, covered: 0, skipped: 0, pct: 100 }
    },
    "/app.ts": {
        lines: { total: 2, covered: 2, skipped: 0, pct: 100 },
        functions: { total: 0, covered: 0, skipped: 0, pct: 100 },
        statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
        branches: { total: 0, covered: 0, skipped: 0, pct: 100 }
      },
      "/button.ts": {
        lines: { total: 2, covered: 2, skipped: 0, pct: 100 },
        functions: { total: 0, covered: 0, skipped: 0, pct: 100 },
        statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
        branches: { total: 0, covered: 0, skipped: 0, pct: 100 }
      },
      "/component.ts": {
        lines: { total: 2, covered: 2, skipped: 0, pct: 100 },
        functions: { total: 0, covered: 0, skipped: 0, pct: 100 },
        statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
        branches: { total: 0, covered: 0, skipped: 0, pct: 100 }
      }
  }
];

export default class TSLintReport extends Component {
    constructor(props) {
        super();
        this.setState = {
            products: []
        }
    }
  componentDidMount() {
    console.log(
      "-----------data in data table--------",
      Object.values(data[0])
    );

    let keyData = Object.keys(data[0]);
    console.log("keys", keyData);
    let valueData = Object.values(data[0]);
    let coverageData = {};
    let productData = [];
    for (let i = 1; i < valueData.length; i++) {
      coverageData = {
        name: keyData[i],
        lines: valueData[i].lines.covered / valueData[i].lines.total * 100,
        branches: valueData[i].lines.covered / valueData[i].lines.total * 100,
        functions: valueData[i].lines.covered / valueData[i].lines.total * 100,
        statements: valueData[i].lines.covered / valueData[i].lines.total * 100
      };
      productData.push(coverageData);
    }
    // this.setState({
    //     products: productData
    // })
    // console.log("covergae data", product);
  }

  render() {
    return <div>hello</div>;

      <BootstrapTable ref="table" data={productData}>
        <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>
          Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="lines" dataSort={true}>
          Lines
        </TableHeaderColumn>
        <TableHeaderColumn dataField="branches">Branches</TableHeaderColumn>
        <TableHeaderColumn dataField="functions">Functions</TableHeaderColumn>
        <TableHeaderColumn dataField="price">statements</TableHeaderColumn>
      </BootstrapTable>
  }
}
