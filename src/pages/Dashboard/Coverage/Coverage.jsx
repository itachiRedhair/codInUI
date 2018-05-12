import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import  ProgressBarComponent  from "../../../commonui/ProgressBar"

// Ag-Grid Implementation

import { AgGridReact, AgGridColumn } from "ag-grid-react";

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
      lines: { total: 4, covered: 2, skipped: 0, pct: 100 },
      functions: { total: 8, covered: 3, skipped: 0, pct: 100 },
      statements: { total: 5, covered: 1, skipped: 0, pct: 100 },
      branches: { total: 4, covered: 2, skipped: 0, pct: 100 }
    },
    "/app.ts": {
      lines: { total: 7, covered: 2, skipped: 0, pct: 100 },
      functions: { total: 0, covered: 0, skipped: 0, pct: 100 },
      statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
      branches: { total: 0, covered: 0, skipped: 0, pct: 100 }
    },
    "/button.ts": {
      lines: { total: 4, covered: 3, skipped: 0, pct: 100 },
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
    this.state = {
      products: [],
      columnDefs: [
        { headerName: "File", field: "name" },
        { headerName: "Progress", field: "progress" },
        { headerName: "Lines", field: "lines" },        
        { headerName: "Branches", field: "branches" },
        { headerName: "Functions", field: "functions" },
        { headerName: "Statements", field: "statements" }
      ],
      rowData: []
    };
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
    let column = {};
    let row = [];
    for (let i = 1; i < valueData.length; i++) {
      coverageData = {
        name: keyData[i],
        progress: valueData[i].statements.covered / valueData[i].statements.total * 100,
        lines: valueData[i].lines.covered / valueData[i].lines.total * 100,
        branches: valueData[i].branches.covered / valueData[i].branches.total * 100,
        functions: valueData[i].functions.covered / valueData[i].functions.total * 100,
        statements: valueData[i].statements.covered / valueData[i].statements.total * 100
      };
      row.push(coverageData);
    }
    this.setState({
      rowData: row
    });
  }

  pBar = () => {
    return (
      <div>
        <ProgressBarComponent data={this.state.rowData} />
      </div>
    );
  };

  render() {
    const tableStyle = {
      color: "white"
    };
    return (
      // <div>hello</div>
      //   <div style={tableStyle}>
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "90%"
        }}
      >
        <AgGridReact
          rowData={this.state.rowData}
          suppressRowClickSelection
          rowSelection="multiple"
          enableColResize
          enableSorting
          enableFilter
          groupHeaders
        >
          <AgGridColumn field="name" width={135} />
          <AgGridColumn field="progress" width={135} enableValue cellRendererFramework={ProgressBarComponent} />          
          <AgGridColumn field="lines" width={135} />
          <AgGridColumn field="branches" width={135} />
          <AgGridColumn field="functions" width={135} />
          <AgGridColumn field="statements" width={135} />
        </AgGridReact>
      </div>
      //   </div>
    );
  }
}
