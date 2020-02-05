export const Permissions = Object.freeze({
  READ: {
    id: "read",
    label: "Read Only",
    description: "will only be able to view library"
  },
  WRITE: {
    id: "write",
    label: "Read & Write",
    description:
      "will be able to read/write to library but not manage other users"
  },
  ADMIN: {
    id: "admin",
    label: "Admin",
    description: "can do everything an owner can do except delete the library"
  }
});
