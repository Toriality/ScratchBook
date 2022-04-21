import axios from "axios";
import * as type from "../types/usersTypes";

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: type.USER_LOADING });

  axios
    .get(process.env.REACT_APP_URL + "auth", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: type.USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: type.AUTH_ERROR,
      });
    });
};

// Register user
export const register =
  ({ username, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ username, password });

    axios
      .post(process.env.REACT_APP_URL + "users", body, config)
      .then((res) => {
        dispatch({
          type: type.REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: type.REGISTER_FAIL,
        });
      });
  };

// Login user
export const login =
  ({ username, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ username, password });

    axios
      .post(process.env.REACT_APP_URL + "auth", body, config)
      .then((res) => {
        dispatch({
          type: type.LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: type.LOGIN_FAIL,
        });
      });
  };

// Logout user
export const logout = () => {
  return {
    type: type.LOGOUT_SUCCESS,
  };
};

// Set config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localStorage
  const token = getState().users.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token exists, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
