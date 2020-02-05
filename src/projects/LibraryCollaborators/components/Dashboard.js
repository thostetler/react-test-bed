import React, { Component } from "react";
import { Button, Alert } from "react-bootstrap";
import AddCollaboratorModal from "./AddCollaboratorModal";
import PermissionsList from "./PermissionList";
import PropTypes from "prop-types";

const initialState = {
  pendingPermissionChange: false,
  showAddCollaboratorModal: false,
  pendingAddCollaborator: false
};
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onRevokeAccess = this.onRevokeAccess.bind(this);
    this.onChangePermission = this.onChangePermission.bind(this);
    this.onAddCollaborator = this.onAddCollaborator.bind(this);
  }

  onRevokeAccess(id) {
    this.setState({ pendingPermissionChange: true });
    this.props.revokeAccess(id);
  }

  onChangePermission(id, change) {
    this.setState({ pendingPermissionChange: true });
    this.props.changePermission(id, change);
  }

  onAddCollaborator({ email, permission }) {
    this.setState({
      showAddCollaboratorModal: false,
      pendingAddCollaborator: true
    });
    this.props.addCollaborator({ email, permission });
  }

  componentWillReceiveProps() {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <Button
            bsSize="lg"
            onClick={() => this.setState({ showAddCollaboratorModal: true })}
          >
            <i className="fa fa-user-plus fa-fw" aria-hidden="true" /> Add
            Collaborator
          </Button>
        </div>
        {Object.keys(this.props.permissions).length ? (
          <div className="row">
            <PermissionsList
              permissions={this.props.permissions}
              onRevokeAccess={this.onRevokeAccess}
              onChangePermission={this.onChangePermission}
            />
          </div>
        ) : (
          <div className="row text-center">
            You have no collaborators, yet. Please add one above
          </div>
        )}
        <div className="row text-center">
          {this.state.pendingPermissionChange && (
            <Alert bsStyle="info">
              <strong>
                <i className="fa fa-spinner fa-spin" aria-hidden="true" />
              </strong>{" "}
              Updating permissions, one moment...
            </Alert>
          )}
        </div>
        <div className="row text-center">
          {this.state.pendingAddCollaborator && (
            <Alert bsStyle="info">
              <strong>
                <i className="fa fa-spinner fa-spin" aria-hidden="true" />
              </strong>{" "}
              Creating new collaborator, one moment...
            </Alert>
          )}
        </div>
        <AddCollaboratorModal
          show={this.state.showAddCollaboratorModal}
          onHide={() => this.setState({ showAddCollaboratorModal: false })}
          onSubmit={this.onAddCollaborator}
        />
      </div>
    );
  }
}

Dashboard.defaultProps = {
  permissions: {},
  addCollaborator: () => {},
  changePermission: () => {},
  revokeAccess: () => {}
};

Dashboard.propTypes = {
  permissions: PropTypes.object,
  addCollaborator: PropTypes.func,
  changePermission: PropTypes.func,
  revokeAccess: PropTypes.func
};
