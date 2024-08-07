import {combineReducers} from "redux";
import addNoteReducers from "../store/reducers.jsx";

const rootReducer = combineReducers({
    addNoteReducers,
})
export default rootReducer;