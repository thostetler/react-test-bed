import React from "react";
import PropTypes from "prop-types";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { Permissions } from "../constants";

const ManageButton = ({ permission, onChange, ...otherProps }) => {
  return (
    <div>
      <span className="sr-only" id="role-selected">
        {permission.label} role selected
      </span>
      <DropdownButton
        bsStyle="default"
        bsSize="sm"
        {...otherProps}
        title={permission.label}
        key={permission.id}
        id={`manage-permission-${permission.id}`}
        aria-labelledby="role-selected"
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
    </div>
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
