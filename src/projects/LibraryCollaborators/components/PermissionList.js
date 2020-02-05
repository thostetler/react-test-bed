import React from "react";
import { Table } from "react-bootstrap";
import PermissionEntry from "./PermissionEntry";
import PropTypes from "prop-types";

const initialState = {};
export default class PermissionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Email</th>
            <th id="table-title-role">Role</th>
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

PermissionList.defaultProps = {
  permissions: {},
  onRevokeAccess: () => {},
  onChangePermission: () => {}
};

PermissionList.propTypes = {
  permissions: PropTypes.object,
  onRevokeAccess: PropTypes.func,
  onChangePermission: PropTypes.func
};
