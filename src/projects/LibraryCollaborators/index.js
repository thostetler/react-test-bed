import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import { Permissions } from "./constants";

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
          permissions={permissions}
          permissionsChange={(id, change) => {
            setTimeout(() => {
              this.setState({
                permissions: {
                  ...permissions,
                  [id]: {
                    ...permissions[id],
                    permission: change
                  }
                }
              });
            }, 1000);
          }}
          revokeAccess={id => {
            setTimeout(() => {
              delete permissions[id];
              this.setState({
                permissions: permissions
              });
            }, 1000);
          }}
        />
      </section>
    );
  }
}
