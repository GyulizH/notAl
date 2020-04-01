import { combineReducers } from "redux";
import { noteReducers as notes } from "./notelist/reducer";
import {selectedNoteReducer as selectedNote} from "./selectedNote/reducer";

export default combineReducers({
  notes,
  selectedNote
});
