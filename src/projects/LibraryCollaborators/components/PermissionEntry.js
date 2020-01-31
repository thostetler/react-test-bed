import React, { Component } from "react";
import { Button, DropdownButton, MenuItem, Modal } from "react-bootstrap";
import { Permissions } from "../constants";

const ManageButton = ({ permission, onChange }) => {
  return (
    <DropdownButton
      bsStyle="default"
      bsSize="sm"
      title={permission.label}
      key={permission.id}
      id={`manage-permission-${permission.id}`}
    >
      {Object.keys(Permissions).map(key => {
        const item = Permissions[key];
        if (permission !== item) {
          return (
            <MenuItem
              key={item.id}
              eventKey={item.id}
              onClick={() => onChange(item)}
            >
              {item.label}
            </MenuItem>
          );
        }
        return null;
      })}
      {/* <MenuItem eventKey="2">Read Only</MenuItem>
      <MenuItem eventKey="3">Write Only</MenuItem>
      <MenuItem eventKey="4">Admin</MenuItem> */}
    </DropdownButton>
  );
};

const ConfirmModal = ({ show, onHide, onOk, children }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="revoke-access-confirm__title"
    >
      <Modal.Header>
        <Modal.Title id="revoke-access-confirm__title">
          Confirm Revoke Access
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button bsSize="lg" onClick={onHide}>
          Cancel
        </Button>
        <Button bsSize="lg" bsStyle="danger" onClick={onOk}>
          Revoke Access
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const initialState = {
  showConfirmRevokeModal: false,
  email: "",
  permission: Permissions.ADMIN
};
export default class PermissionList extends Component {
  constructor(props) {
    super(props);

    const { email, permission } = props.data;
    this.state = {
      initialState,
      email,
      permission
    };
    this.onManagePermissions = this.onManagePermissions.bind(this);
    this.openConfirmRevocationModal = this.openConfirmRevocationModal.bind(
      this
    );
    this.closeConfirmRevocationModal = this.closeConfirmRevocationModal.bind(
      this
    );
    this.doRevocation = this.doRevocation.bind(this);
  }

  onManagePermissions(permission) {
    this.setState({ permission });
    this.props.onChangePermission(permission);
  }

  openConfirmRevocationModal() {
    this.setState({ showConfirmRevokeModal: true });
  }

  doRevocation() {
    this.setState({ showConfirmRevokeModal: false });
    this.props.onRevokeAccess();
  }

  closeConfirmRevocationModal() {
    this.setState({ showConfirmRevokeModal: false });
  }

  render() {
    return (
      <tr>
        <td>
          <i className="fa fa-fw fa-user-circle" aria-hidden="true" />{" "}
          {this.state.email}
        </td>
        <td>
          <ManageButton
            permission={this.state.permission}
            onChange={this.onManagePermissions}
          />
        </td>
        <td style={{ display: "grid", justifyContent: "end" }}>
          <Button
            bsStyle="danger"
            bsSize="sm"
            onClick={this.openConfirmRevocationModal}
          >
            Revoke Access
          </Button>
        </td>
        <ConfirmModal
          show={this.state.showConfirmRevokeModal}
          onHide={this.closeConfirmRevocationModal}
          onOk={this.doRevocation}
        >
          <p>
            This will revoke all permissions for{" "}
            <strong>{this.state.email}</strong>.
          </p>
          <p>Are you sure?</p>
        </ConfirmModal>
      </tr>
    );
  }
}
