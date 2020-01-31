import React, { Component } from "react";
import { Table } from "react-bootstrap";
import PermissionEntry from "./PermissionEntry";

export default class PermissionList extends Component {
  render() {
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.permissions).map(id => (
            <PermissionEntry
              data={this.props.permissions[id]}
              key={id}
              onRevokeAccess={() => this.props.onRevokeAccess(id)}
              onChangePermission={change =>
                this.props.onChangePermission(id, change)
              }
              pendingPermissionChange={true}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}
