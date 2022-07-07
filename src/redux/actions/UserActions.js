import { store } from "../Store";

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
export const saveUser = (jwt, user) => {
  store.dispatch({
    type: "USER_SAVE",
    payload: {
      jwt,
      user,
    },
  });
};

export const createUser = (jwt, user) => {
  store.dispatch({
    type: "USER_CREATE",
    payload: {
      jwt,
      user,
    },
  });
};

export const updateUser = (jwt, user) => {
  store.dispatch({
    type: "USER_UPDATE",
    payload: {
      jwt,
      user,
    },
  });
};

export const deleteUser = () => {
  store.dispatch({ type: "USER_DELETE" });
};