import React from 'react';
import { Button } from 'react-bootstrap';

// Styles
import './NotFound.scss';

const NotFound = ({ history }) => (
  <React.Fragment>
    <div className="not-found-container">
      <div className="not-found-number">404</div>
      <Button
        className="not-found-button"
        onClick={() => {
          history.replace('/landing');
        }}>
        I am lost. Take me home.
      </Button>
    </div>
  </React.Fragment>
);

export default NotFound;
