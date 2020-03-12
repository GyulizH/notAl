import { combineReducers } from 'redux'
import {noteReducers as notes} from "./notelist/reducer";

export default combineReducers({
 notes
})