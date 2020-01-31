import React, { Component } from "react";
import { Button, Alert } from "react-bootstrap";
import PermissionsList from "./PermissionList";

const initialState = {
  pendingPermissionChange: false
};
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onRevokeAccess = this.onRevokeAccess.bind(this);
    this.onChangePermission = this.onChangePermission.bind(this);
  }

  onRevokeAccess(id) {
    console.log("revoking", id);
  }

  onChangePermission(id, change) {
    console.log("updating", id, "to have", change);
    this.setState({ pendingPermissionChange: true });
    this.props.permissionsChange(id, change);
  }

  componentWillReceiveProps() {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <Button bsSize="lg">
            <i className="fa fa-user-plus fa-fw" aria-hidden="true" /> Add
            Collaborator
          </Button>
        </div>
        <div className="row">
          <PermissionsList
            permissions={this.props.permissions}
            onRevokeAccess={this.onRevokeAccess}
            onChangePermission={this.onChangePermission}
          />
        </div>
        <div className="row text-center">
          {this.state.pendingPermissionChange && (
            <Alert bsStyle="info">
              <strong>
                <i className="fa fa-spinner fa-spin" aria-hidden="true" />
              </strong>{" "}
              Updating Permissions, one moment...
            </Alert>
          )}
        </div>
      </div>
    );
  }
}
