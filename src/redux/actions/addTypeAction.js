import { ADD_TYPE } from "../types";

export const addTypeAction = item => {
    return{
        type: ADD_TYPE,
        payload: item
    }
}