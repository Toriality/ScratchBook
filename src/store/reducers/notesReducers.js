import * as type from "../types/notesTypes";

const initialState = {
  list: [], // List all existing notes (from getNotes())
  selected: [], // View selected note (from viewNote())
  user_note: [], // Note created by the user (from postNote())
  loading: true, // True: display loading circle; False: display note(s)
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
    case type.POST_NOTE:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: true,
      };
    default:
      return state;
  }
}
