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
