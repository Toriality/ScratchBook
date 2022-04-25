import * as type from "../types/notesTypes";

const initialState = {
  list: [], // List all existing notes (from getNotes())
  selected: [], // View selected note (from viewNote())
  loading: true, // True: display loading circle; False: display note(s)
};

export default function notesReducer(state = initialState, action) {
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
    case type.POST_NOTE:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: true,
      };
    case type.DELETE_NOTE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
