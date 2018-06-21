import React, { Component } from 'react';
import { ModalBody, ModalHeader, ModalFooter, Button } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

// Component imports
import ModalComponent from '../../../../commonui/Modal';

// Styles imports
import './CollaboratorComponent.scss';
import '../../../../styles/_theme.scss';

/* eslint-disable react/prop-types, no-underscore-dangle */
export default class ContributorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asyncTypeaheadState: {
        isLoading: false,
        options: [],
      },
      contributors: [],
    };
  }

  onCollaboratorSelect = (selectedCollaborators) => {
    this.setState({
      contributors: selectedCollaborators,
    });
  };
  hideModal = () => {
    this.props.setModalState(false);
  };

  _addCollaborator = () => {
    if (this.state.contributors.length !== 0) {
      const { _id } = this.state.contributors[0];
      this.props.sendInvitation({
        invitedUserID: _id,
        projectID: this.props.projectId,
      }).then(() => {
        this.props.setModalState(false);
      })
    }
  };

  _handleSearch = (query) => {
    if (query.trim()) {
      this.setState({
        asyncTypeaheadState: {
          isLoading: true,
        },
      });

      this.props.userSuggestions(query).then((options) => {
        this.setState({
          asyncTypeaheadState: {
            isLoading: false,
            options,
          },
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
            <i className={`${index === 0 ? 'fa fa-user' : 'far fa-user'}`} /> | {user.name}
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
              <label htmlFor="email">
                Email of the user to be invited
                <AsyncTypeahead
                  {...this.state.asyncTypeaheadState}
                  id="email"
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
