import { ADD_NOTE, CHANGE_NOTE, DELETE_NOTE } from "../types"

const initialState = {
    notes: []
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return{
                ...state,
                notes: [...state.notes, action.payload]
            }
        case CHANGE_NOTE:
            return{
                ...state,
                notes: [...state.notes.filter(el => el.id !== action.payload.id), action.payload]
            }
        case DELETE_NOTE:
            return{
                ...state,
                notes: [...state.notes.filter(el => el.id !== action.payload)]
            }
        default:
            return state
    }
}