import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Components imports
import Sidebar from './Sidebar';
import Content from './Content';
import CustomNavbar from '../../commonui/CustomNavbar';
import './DashboardComponent.scss';

class DashboardComponent extends Component {
  componentWillMount() {
  }
  componentDidMount() {
    const { projectId, submittedAt } = this.props.match.params;
    this.props.fetchProjectInfo(projectId);
    this.props.setSubmittedAt(submittedAt);
  }

  render() {
    return (
      <React.Fragment>
        <CustomNavbar />
        <div className="dashboard-container container">
          <Row className="dashboard-row-container">
            <Col md={3} className="sidebar-container responsive reset-col-padding">
              <Sidebar match={this.props.match} />
            </Col>
            <Col md={9} className="dashboard-content-container  reset-col-padding">
              <Content />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardComponent;

DashboardComponent.propTypes = {
  setSubmittedAt: PropTypes.func.isRequired,
  // location: PropTypes.shape({
  //   state: PropTypes.shape({
  //     submittedAt: PropTypes.string,
  //   }),
  // }).isRequired,
  fetchProjectInfo: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};
