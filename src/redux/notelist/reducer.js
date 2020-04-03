import { ADD_NOTE } from './action'

let fromMemory = " ";

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
  return state
}
