/**
 * User model as defined in Strapi
 */

import { login, register, logout } from "../controllers/UserController";

class UserModel {
  constructor(
    identifier,
    password,
    name,
    last_name,
    zip_code,
    selectedChild,
    child3to5,
    child6to8,
    child9to
  ) {
    this.identifier = identifier;
    this.password = password;
    this.name = name;
    this.last_name = last_name;
    this.zip_code = zip_code;
    this.selectedChild = selectedChild;
    this.child3to5 = child3to5;
    this.child6to8 = child6to8;
    this.child9t = child9to;
  }

  async login() {
    const result = await login(this);

    if (!result) {
      throw new Error("Unable to login user.");
    }

    return true;
  }

  async register() {
    const result = await register(this);

    if (!result) {
      throw new Error("Unable to register user.");
    }

    return true;
  }

  async logout() {
    const result = await logout(this);

    if (!result) {
      throw new Error("Unable to logout user.");
    }

    return true;
  }
}

export default UserModel;
