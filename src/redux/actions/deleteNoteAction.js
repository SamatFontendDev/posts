import { DELETE_NOTE } from "../types";

export const deleteNoteAction = id => ({
    type: DELETE_NOTE,
    payload: id
})