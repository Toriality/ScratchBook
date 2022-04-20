import { combineReducers } from "redux";
import notesReducers from "./notesReducers";
import usersReducers from "./usersReducers";

export default combineReducers({
  notes: notesReducers,
  users: usersReducers,
});
