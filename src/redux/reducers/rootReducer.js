import { combineReducers } from "redux";
import { addTypeReducer } from "./addTypeReducer";
import { notesReducer } from "./notesReducers";

export const rootReducer = combineReducers({
    types: addTypeReducer,
    notes: notesReducer,
})