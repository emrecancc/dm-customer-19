// src/utils.js

export const transformUsers = (users) => {
  return users.map((x) => ({
    id: x.id,
    name: x.name,
    email: x.email,
  }));
};
