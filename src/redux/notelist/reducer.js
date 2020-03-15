import {ADD_NOTE} from "./action";

const initialState = {
    notes : ['notes']
}

export const noteReducers = (state = initialState,action) => {
    if(action.type === ADD_NOTE){
        return {...state, notes: [...state.notes,action.payload]}
    }
    return state
}