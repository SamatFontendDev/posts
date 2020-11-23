import { CHANGE_NOTE } from "../types";

export const changeNoteAction = note => ({
    type: CHANGE_NOTE,
    payload: {
        id: note.id,
        title: note.title,
        type: note.type,
        text: note.text
    }
})