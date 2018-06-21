import path from 'path';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import ProgressBarComponent from '../../commonui/ProgressBar';

// Ag-Grid Implementation

// Components imports
import Card from './../../commonui/Card';

// Syles imports
import './CoverageComponentTable.scss';

class CoverageComponentTable extends Component {
  componentDidMount() {}

  prepareFieldData = () => {
    const { tableData } = this.props;
    const dataToReturn = tableData.map((anEntry) => ({
      name: path.basename(anEntry.name),
      branches: anEntry.output[0].coverage.branches.covered,
      functions: anEntry.output[0].coverage.functions.covered,
      lines: anEntry.output[0].coverage.lines.covered,
      statements: anEntry.output[0].coverage.statements.covered,
      progress: anEntry.output[0].coverage.statements.pct,
    }));
    return dataToReturn;
  };

  render() {
    const fieldData = this.prepareFieldData();
    return (
      <Card title="Coverage Details">
        <div className="ag-theme-balham">
          <AgGridReact
            rowData={fieldData}
            suppressRowClickSelection
            rowSelection="multiple"
            enableColResize
            enableSorting
            enableFilter
            groupHeaders>
            <AgGridColumn field="name" width={240} />
            <AgGridColumn
              field="progress"
              width={195}
              enableValue
              cellRendererFramework={ProgressBarComponent}
            />
            <AgGridColumn field="lines" width={100} />
            <AgGridColumn field="branches" width={100} />
            <AgGridColumn field="functions" width={100} />
            <AgGridColumn field="statements" width={104} />
          </AgGridReact>
        </div>
      </Card>
    );
  }
}

export default CoverageComponentTable;
CoverageComponentTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
