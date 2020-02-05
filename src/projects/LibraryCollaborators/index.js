import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import { Permissions } from "./constants";
import { uniqueId } from "lodash";

const permissions = {
  11: {
    id: 11,
    email: "suscipit.est.ac@semperdui.com",
    permission: Permissions.ADMIN
  },
  12: {
    id: 12,
    email: "odio.vel.est@eratvel.com",
    permission: Permissions.READ
  },
  13: {
    id: 13,
    email: "aliquam@magnisdis.org",
    permission: Permissions.WRITE
  },
  14: {
    id: 14,
    email: "imperdiet.nec@Namtempordiam.net",
    permission: Permissions.ADMIN
  }
};
export default class LibraryCollaborators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions: permissions
    };
  }

  render() {
    return (
      <section className="container">
        <Dashboard
          permissions={this.state.permissions}
          changePermission={(id, change) => {
            setTimeout(() => {
              this.setState({
                permissions: {
                  ...this.state.permissions,
                  [id]: {
                    ...this.state.permissions[id],
                    permission: change
                  }
                }
              });
            }, 1000);
          }}
          revokeAccess={id => {
            setTimeout(() => {
              delete this.state.permissions[id];
              this.setState({
                permissions: permissions
              });
            }, 1000);
          }}
          addCollaborator={({ email, permission }) => {
            setTimeout(() => {
              const id = parseInt(uniqueId());
              this.setState({
                permissions: {
                  ...this.state.permissions,
                  [id]: {
                    id: id,
                    email,
                    permission
                  }
                }
              });
            }, 1000);
          }}
        />
      </section>
    );
  }
}
