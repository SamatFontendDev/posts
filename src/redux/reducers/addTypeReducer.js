const { ADD_TYPE } = require("../types")

const initialState = {
    types: []
}

export const addTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TYPE:
            return{
                ...state,
                types: [...state.types, action.payload]
            }
        default:
            return state
    }
}