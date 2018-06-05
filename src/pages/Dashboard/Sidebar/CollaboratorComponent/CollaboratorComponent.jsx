import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

//Component imports
import ModalComponent from '../../../../commonui/Modal';
import Input from '../../../../commonui/Input';

//Styles imports
import './CollaboratorComponent.scss';
import '../../../../styles/_theme.scss';

export default class Collaborator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asyncTypeaheadState: {
        isLoading: false,
        options: []
      },
      collaborators: []
    };
  }

  componentDidMount = () => {
    this.props.getCollaborators(this.props.projectId);
  };

  hideProjectModal = () => {
    this.props.setModalState(false);
  };

  _handleSearch = (query) => {
    if (query.trim()) {
      this.setState({
        asyncTypeaheadState: {
          isLoading: true
        }
      });

      this.props.userSuggestions(query).then((options) => {
        this.setState({
          asyncTypeaheadState: {
            isLoading: false,
            options
          }
        });
      });
    }
  };

  onCollaboratorSelect = (selectedCollaborators) => {
    this.setState({
      collaborators: selectedCollaborators
    });
  };

  _addCollaborator = () => {
    if (this.state.collaborators.length !== 0) {
      const { _id } = this.state.collaborators[0];
      this.props.sendInvitation({
        invitedUserID: _id,
        projectID: this.props.projectId
      });
    }
  };

  render() {
    let contribUsers = [];
    if (this.props.contributors.length != 0) {
      contribUsers = this.props.contributors.map((user) => <div key={user.name}>{user.name}</div>);
    }
    return (
      <ModalComponent show={this.props.showModal} onHide={this.hideProjectModal}>
        <ModalHeader>
          <i className="fa fa-close" onClick={this.hideProjectModal} />
        </ModalHeader>
        <ModalBody>
          <div className="contributor-display">Contributors of this project</div>
          {contribUsers}
          <AsyncTypeahead
            {...this.state.asyncTypeaheadState}
            labelKey="email"
            minLength={3}
            selectHintOnEnter={true}
            onSearch={this._handleSearch}
            placeholder="Search for a Codin user..."
            ref={(ref) => (this._typeahead = ref)}
            onChange={(selected) => {
              this.onCollaboratorSelect(selected);
            }}
            renderMenuItemChildren={(option, props) => <span>{option.email}</span>}
          />
        </ModalBody>
        <span>Collaborator:{this.state.collaborators[0] && this.state.collaborators[0]._id}</span>
        <ModalFooter>
          <Button bsStyle="primary" onClick={this._addCollaborator}>
            Add Collaborator
          </Button>
        </ModalFooter>
      </ModalComponent>
    );
  }
}
