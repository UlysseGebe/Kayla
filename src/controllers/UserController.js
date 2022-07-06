import { saveUser, createUser, deleteUser } from "../redux/actions/UserActions";
import axios from "axios";

/**
 * if you have an instance of Strapi running on your local
 * machine:
 *
 * 1. Run `adb reverse tcp:8163 tcp:8163` (only on android)
 *
 * 2. You have to change the access IP from localhost
 * to the IP of the machine Strapi is running on.
 */
const url = "https://kayla-project.herokuapp.com";

/**
 * @param {UserModel} user
 */
export const login = async (user) => {
  const requestConfig = {
    identifier: user.identifier,
    password: user.password,
  };

  try {
    const response = await axios.post(`${url}/api/auth/local`, requestConfig);
    const json = await response.data;

    if (json.error) {
      return false;
    }

    saveUser(json.jwt, json.user);

    return true;
  } catch (err) {
    // alert(err);
    return false;
  }
};

/**
 * @param {UserModel} user
 */
export const register = async (user) => {
  const requestConfig = {
    email: user.identifier,
    username: user.identifier,
    last_name: user.last_name,
    name: user.name,
    zip_code: user.zip_code,
    password: user.password,
    selectedChild: user.selectedChild || [],
    child3to5: user.child3to5 || 0,
    child6to8: user.child6to8 || 0,
    child9to: user.child9to || 0,
  };

  try {
    const response = await axios.post(
      `${url}/api/auth/local/register`,
      requestConfig
    );
    const json = await response.data;

    if (json.error) {
      return false;
    }

    createUser(json.jwt, json.user);

    return true;
  } catch (err) {
    alert(err);
    return false;
  }
};

/**
 * @param {UserModel} user
 */
export const logout = () => {
  deleteUser();
  return true;
};
