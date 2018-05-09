import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalHeader,
  MenuItem,
  ModalFooter
} from "react-bootstrap";
import { Typeahead, AsyncTypeahead } from "react-bootstrap-typeahead";
//Component imports
import ModalComponent from "../../../../commonui/Modal";
import Button from "../../../../commonui/Button";
import Input from "../../../../commonui/Input";

//Styles imports
import "./CollaboratorComponent.scss";
import "../../../../styles/_theme.scss";

export default class Collaborator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showModal: true,
      isLoading: false,
      options: [],
      contributorID: "",
      collaboratorName: "",
      projectID: ""
    };
  }

  componentDidMount = () => {
    this.props.getCollaborators(this.props.projectIdState);
  };

  hideProjectModal = () => {
    // this.setState({
    //   showModal: false
    // });
    this.props.setModalState(false);
  };

  _handleSearch = query => {
    this.setState({ isLoading: true });
    this.props.userSuggestions(query);
    var options = this.props.names;
    this.setState({
      isLoading: false,
      options
    });
  };

  _getCollaboratorId = e => {
    this.setState({
      contributorID: e.target.getAttribute("value"),
      collaboratorName: e.target.getAttribute("user"),
      projectID: e.target.getAttribute("pid")
    });
  };

  _addCollaborator = () => {
    this.props.registerCollaborator({
      name: this.state.collaboratorName,
      contributorID: this.state.contributorID,
      projectID: this.state.projectID
    });
  };

  render() {
    console.log(
      "--------this.props.projectIdState---------",
      this.props.projectIdState
    );
    const setHeight = {
      height: "1.5em"
    };
    let contribUsers = [];
    if (this.props.contributors.length != 0) {
      this.props.contributors.map(user => {
        if (typeof user !== "object") {
          contribUsers.push(
            <ul>
              <div key={user} style={setHeight}>
                {user}
              </div>
            </ul>
          );
        } else {
          contribUsers.push(
            <ul>
              <div key={user.name} style={setHeight}>
                {user.name}
              </div>
            </ul>
          );
        }
      });
    }
    return (
      <ModalComponent
        show={this.props.showModal}
        onHide={this.hideProjectModal}
      >
        <ModalHeader>
          <i className="fa fa-close" onClick={this.hideProjectModal} />
        </ModalHeader>
        <ModalBody>
          <div className="contributor-display">
            Contributors of this project
          </div>
          {contribUsers}
          <AsyncTypeahead
            {...this.state}
            labelKey="email"
            minLength={2}
            onSearch={this._handleSearch}
            placeholder="Search for a Codin user..."
            renderMenuItemChildren={(option, props) => (
              <ul>
                <li
                  onClick={this._getCollaboratorId}
                  key={option._id}
                  value={option._id}
                  user={option.email}
                  pid={this.props.projectIdState}
                >
                  {option.email}
                </li>
              </ul>
            )}
          />
          Collaborator id: {this.state.contributorID}
          Project id: {this.props.projectIdState}
        </ModalBody>
        <ModalFooter>
          <Button bsStyle="primary" onClick={this._addCollaborator}>
            Add Collaborator
          </Button>
        </ModalFooter>
      </ModalComponent>
    );
  }
}
