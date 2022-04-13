import * as type from "../types";

const initialState = {
  list: [],
  selected: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.GET_NOTES:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case type.VIEW_NOTE:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}