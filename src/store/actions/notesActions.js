import * as type from "../types";
import axios from "axios";

export const getNotes = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/notes");
    dispatch({
      type: type.GET_NOTES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: type.NOTES_ERROR,
      payload: console.log(e),
    });
  }
};

export const viewNote = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/notes/id/${id}`);
    dispatch({
      type: type.VIEW_NOTE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: type.VIEW_NOTE_ERROR,
      payload: console.log(e),
    });
  }
};
