import React from "react";
import {
  Modal,
  Button,
  FormControl,
  ControlLabel,
  FormGroup
} from "react-bootstrap";
import { Permissions } from "../constants";
import ManageButton from "./ManageButton";
import PropTypes from "prop-types";

const initialState = {
  permission: Permissions.READ,
  email: ""
};
class AddCollaboratorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
    this.onManagePermissions = this.onManagePermissions.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, permission } = this.state;
    this.props.onSubmit({ email, permission });
    this.reset();
  }

  onManagePermissions(permission) {
    this.setState({ permission });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value.trim() });
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="add-collaborator__title"
      >
        <Modal.Header>
          <Modal.Title id="collaborator__title">
            Add New Collaborator
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={this.onSubmit}>
          <Modal.Body>
            <FormGroup>
              <ControlLabel
                htmlFor={`manage-permission-${this.state.permission.id}`}
              >
                Role
              </ControlLabel>
              <div>
                <ManageButton
                  onChange={this.onManagePermissions}
                  permission={this.state.permission}
                  bsSize="lg"
                />
              </div>
            </FormGroup>
            <FormGroup>
              <ControlLabel htmlFor="new_collab_email">Email</ControlLabel>
              <FormControl
                type="email"
                id="new_collab_email"
                bsSize="lg"
                value={this.state.email}
                onChange={this.onChangeEmail}
                placeholder="collaborator@example.com"
                required
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button bsSize="lg" onClick={this.props.onHide}>
              Cancel
            </Button>
            <Button bsSize="lg" bsStyle="success" type="submit">
              Add Collaborator
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
AddCollaboratorModal.defaultProps = {
  onSubmit: () => {},
  show: false,
  onHide: () => {}
};
AddCollaboratorModal.propTypes = {
  onSubmit: PropTypes.func,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};

export default AddCollaboratorModal;
