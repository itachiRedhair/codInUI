import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import ProgressBarComponent from "../../../commonui/ProgressBar";

// Ag-Grid Implementation

import { AgGridReact, AgGridColumn } from "ag-grid-react";

// Components imports
import CoverageComponentTable from "../../../components/CoverageComponentTable";
import CoverageComponentPie from "../../../components/CoverageComponentPie";

// Syles imports
import "./Coverage.scss";

const data = [
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
      functions: { total: 7, covered: 3, skipped: 0, pct: 100 },
      statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
      branches: { total: 1, covered: 1, skipped: 0, pct: 100 }
    },
    "/button.ts": {
      lines: { total: 4, covered: 3, skipped: 0, pct: 100 },
      functions: { total: 6, covered: 3, skipped: 0, pct: 100 },
      statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
      branches: { total: 7, covered: 5, skipped: 0, pct: 100 }
    },
    "/component.ts": {
      lines: { total: 2, covered: 2, skipped: 0, pct: 100 },
      functions: { total: 12, covered: 8, skipped: 0, pct: 100 },
      statements: { total: 2, covered: 2, skipped: 0, pct: 100 },
      branches: { total: 11, covered: 9, skipped: 0, pct: 100 }
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
      rowData: [],
      hData: []
    };
  }
  componentDidMount() {
    const keyData = Object.keys(data[0]);
    const valueData = Object.values(data[0]);
    let coverageData = {};
    const wholeData = {};
    const column = {};
    const row = [];
    const piePrefix = data[0].total;

    const headData = [
      {
        name: "lines",
        value: piePrefix.lines.covered / piePrefix.lines.total * 100
      },
      {
        name: "branches",
        value: piePrefix.branches.covered / piePrefix.branches.total * 100
      },
      {
        name: "functions",
        value: piePrefix.functions.covered / piePrefix.functions.total * 100
      },
      {
        name: "statements",
        value: piePrefix.statements.covered / piePrefix.statements.total * 100
      }
    ];
    this.setState({
        hData: headData
    })

    for (let i = 1; i < valueData.length; i++) {
      coverageData = {
        name: keyData[i],
        progress: (
          valueData[i].statements.covered /
          valueData[i].statements.total *
          100
        ).toFixed(2),
        lines:
          `${(valueData[i].lines.covered / valueData[i].lines.total * 100).toFixed(
            2
          )  }${"%"}`,
        branches:
          `${(
            valueData[i].branches.covered /
            valueData[i].branches.total *
            100
          ).toFixed(2)  }${"%"}`,
        functions:
          `${(
            valueData[i].functions.covered /
            valueData[i].functions.total *
            100
          ).toFixed(2)  }${"%"}`,
        statements:
          `${(
            valueData[i].statements.covered /
            valueData[i].statements.total *
            100
          ).toFixed(2)  }${"%"}`
      };
      row.push(coverageData);
    }
    this.setState({
      rowData: row
    });
  }

  render() {
    const tableStyle = {
      color: "white"
    };
    return (
      <React.Fragment>
        <Row className="coverage-row-group col-container">
          <Col md={12} className="coverage-col">
            <CoverageComponentPie headData={this.state.hData} />
          </Col>
        </Row>
        <Row className="coverage-row-group col-container">
          <Col md={12} className="coverage-col">
            <CoverageComponentTable rowD={this.state.rowData} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
