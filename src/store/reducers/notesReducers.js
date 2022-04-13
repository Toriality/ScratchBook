import * as type from "../types";

const initialState = {
  notes: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
