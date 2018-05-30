import React, { Component } from 'react';

//Styles imports
import './FirstRender.scss';

export default class FirstRender extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-container">
          <h1>Happy Coding</h1>
        </div>
      </React.Fragment>
    );
  }
}

