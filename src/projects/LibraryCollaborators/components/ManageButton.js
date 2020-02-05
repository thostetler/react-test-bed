import React from "react";
import PropTypes from "prop-types";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { Permissions } from "../constants";

const ManageButton = ({ permission, onChange, ...otherProps }) => {
  return (
    <DropdownButton
      bsStyle="default"
      bsSize="sm"
      {...otherProps}
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
              title={item.description}
            >
              {item.label}
            </MenuItem>
          );
        }

        return null;
      })}
    </DropdownButton>
  );
};

ManageButton.defaultProps = {
  permission: Permissions.READ,
  onChange: () => {}
};

ManageButton.propTypes = {
  permission: PropTypes.object,
  onChange: PropTypes.func
};

export default ManageButton;
