import { combineReducers } from "redux";
import userReducer from "./userReducers";
import notesReducers from "./notesReducers";

export default combineReducers({
  users: userReducer,
  notes: notesReducers,
});
