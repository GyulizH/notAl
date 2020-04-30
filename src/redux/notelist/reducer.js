import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, SELECT_NOTE } from './action'

let fromMemory = ''
try {
  fromMemory = JSON.parse(localStorage.state).notes
} catch (err) {
  console.log('error')
}

const initialState = [...fromMemory]

export const noteReducers = (state = initialState, action) => {
  if (action.type === ADD_NOTE) {
    return [...state, action.payload]
  }
  if (action.type === DELETE_NOTE) {
    let newState = state.filter((item, index) => index !== action.payload)
    return [...newState]
  }
  if (action.type === UPDATE_NOTE) {
    return action.payload
  }
  if(action.type === SELECT_NOTE) {
    console.log(action.payload,"SELECTEDNOTE")
    return action.payload
  }
  return state
}
