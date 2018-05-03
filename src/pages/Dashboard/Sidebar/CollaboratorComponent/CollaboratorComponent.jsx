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
      options: []
    };
  }

  componentDidMount = () => {};

  hideProjectModal = () => {
    // this.setState({
    //   showModal: false
    // });
    this.props.setModalState(false);
    console.log("=============props============",this.props);

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

  render() {
    return (
      <ModalComponent
        show={this.props.showModal}
        onHide={this.hideProjectModal}
      >
        <ModalHeader>
          <i className="fa fa-close" onClick={this.hideProjectModal} />
        </ModalHeader>
        <ModalBody>
          <AsyncTypeahead
            {...this.state}
            labelKey="email"
            minLength={2}
            onSearch={this._handleSearch}
            placeholder="Search for a Codin user..."
            renderMenuItemChildren={(option, props) => (
              <ul>
                <li key={option._id} user={option.email}>
                  {option.email}
                </li>
              </ul>
            )}
          />
          <Button bsStyle="primary" onClick={this.addCollaborator}>
            Add Collaborator
          </Button>
        </ModalBody>
        <ModalFooter />
      </ModalComponent>
    );
  }
}
