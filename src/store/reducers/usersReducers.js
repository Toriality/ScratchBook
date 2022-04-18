import * as type from "../types/usersTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export default function usersReducers(state = initialState, action) {
  switch (action.type) {
    case type.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case type.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case type.LOGIN_SUCCESS:
    case type.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case type.AUTH_ERROR:
    case type.LOGIN_FAIL:
    case type.LOGOUT_SUCCESS:
    case type.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
