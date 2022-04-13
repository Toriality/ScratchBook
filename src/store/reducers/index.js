import { combineReducers } from "redux";
import notesReducers from "./notesReducers";

export default combineReducers({
  notes: notesReducers,
});
