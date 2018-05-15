import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import ProgressBarComponent from "../../commonui/ProgressBar";

// Ag-Grid Implementation

import { AgGridReact, AgGridColumn } from "ag-grid-react";

//Components imports
import Card from "./../../commonui/Card";

//Syles imports
import "./CoverageComponentTable.scss";

export default class CoverageComponentTable extends Component {
  componentDidMount() {}

  render() {
    console.log("--------props in coverage table component-------", this.props);
    return (
      <Card title="Coverage Details">
        <div
          className="ag-theme-balham"
          style={{
            height: "100%",
            width: "100.5%",
            overflowY: "scroll"
          }}
        >
          <AgGridReact
            rowData={this.props.rowD}
            suppressRowClickSelection
            rowSelection="multiple"
            enableColResize
            enableSorting
            enableFilter
            groupHeaders
          >
            <AgGridColumn field="name" width={195} />
            <AgGridColumn
              field="progress"
              width={195}
              enableValue
              cellRendererFramework={ProgressBarComponent}
            />
            <AgGridColumn field="lines" width={195} />
            <AgGridColumn field="branches" width={195} />
            <AgGridColumn field="functions" width={195} />
            <AgGridColumn field="statements" width={195} />
          </AgGridReact>
        </div>
      </Card>
    );
  }
}
