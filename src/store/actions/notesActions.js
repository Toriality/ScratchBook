import * as type from "../types/notesTypes";
import axios from "axios";

// Get notes from the database
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

// View a specific note
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

// Create a new note and post it into the database
export const postNote = (note) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/notes", note);
    dispatch({
      type: type.POST_NOTE,
      payload: res.data,
    });
    dispatch(getNotes());
  } catch (e) {
    dispatch({
      type: type.POST_NOTE_ERROR,
      payload: console.log(e),
    });
  }
};
