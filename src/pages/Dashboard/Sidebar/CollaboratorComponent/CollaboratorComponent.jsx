import React, { Component } from 'react';
import { ModalBody, ModalHeader, ModalFooter, Button } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

// Component imports
import ModalComponent from '../../../../commonui/Modal';

// Styles imports
import './CollaboratorComponent.scss';
import '../../../../styles/_theme.scss';

/* eslint-disable react/prop-types, no-underscore-dangle */
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

  onCollaboratorSelect = (selectedCollaborators) => {
    this.setState({
      collaborators: selectedCollaborators
    });
  };
  hideModal = () => {
    this.props.setModalState(false);
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

  render() {
    // TODO:
    // The creator of the projet is contributor as well
    // The icon for him should be fa fa-user
    // Handle it better
    const contributors = (
      <ul className="list-group">
        {this.props.contributors.map((user, index) => (
          <li className="list-group-item" key={user.name}>
            <i className={`fa ${index === 0 ? 'fa-user' : 'fa-user-o'}`} /> | {user.name}
          </li>
        ))}
      </ul>
    );
    return (
      <ModalComponent show={this.props.showModal} onHide={this.hideModal}>
        <ModalHeader className="add-contributor-modal-header">
          <span className="h4">Invite a new contributor</span>
        </ModalHeader>
        <ModalBody className="add-contributor-modal-body">
          <div className="contributor-list-container">
            <div>Current Contributors</div>
            <div>{contributors}</div>
          </div>
          <div className="add-contributor-form-container">
            <div className="add-contributor-form">
              <label>
                Email of the user to be invited
                <AsyncTypeahead
                  {...this.state.asyncTypeaheadState}
                  labelKey="email"
                  minLength={3}
                  autoFocus
                  selectHintOnEnter
                  onSearch={this._handleSearch}
                  placeholder="someone@example.com"
                  ref={(ref) => {
                    this._typeahead = ref;
                  }}
                  onChange={(selected) => {
                    this.onCollaboratorSelect(selected);
                  }}
                  renderMenuItemChildren={(option) => (
                    <span>
                      <i className="fa fa-user-o" /> {option.email}
                    </span>
                  )}
                />
              </label>
              <span className="text-muted info">
                *The invited user will receive a notification. Once the invitation is accepted, the
                user will be able to access the project information and invite more contributors.
              </span>
            </div>
          </div>

          {/* <div className="contributor-display">Contributors of this project</div> */}

          {/* <span>Collaborator:{this.state.collaborators[0] && this.state.collaborators[0]._id}</span> */}
        </ModalBody>
        <ModalFooter className="add-contributor-modal-footer">
          <Button bsStyle="default" onClick={this.hideModal}>
            Cancel
          </Button>
          <Button bsStyle="success" onClick={this._addCollaborator}>
            Invite
          </Button>
        </ModalFooter>
      </ModalComponent>
    );
  }
}
