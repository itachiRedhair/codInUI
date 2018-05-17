import React, { Component } from "react";
import { Tabs, Tab, TabContainer, TabContent, TabPane } from "react-bootstrap";
import "./Landing.scss";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <div class="newsfeed-placeholder p-5">
          <h3 className="h2 lh-condensed mb-2">
            Discover interesting projects and people to populate your personal
            news feed.
          </h3>
          <p className="f4">
            Your news feed helps you keep up with recent activity on
            repositories you and people you
          </p>
          <a className="btn btn-outline mt-2">Explore Codin</a>
        </div>
        <div className="tab-container">
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Your Projects">
              Your Projects
            </Tab>
            <Tab eventKey={2} title="As Contributor">
              As Contributor
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
