import { ADD_NOTE } from "../types";

export const addNoteAction = note => ({
    type: ADD_NOTE,
    payload: note
})