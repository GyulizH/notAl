import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, SELECT_NOTE } from './action'

let fromMemory = ''
try {
  fromMemory = JSON.parse(localStorage.state).notes
  fromMemory.forEach(function (v) {
    delete v.isSelected
  })
} catch (err) {
  console.log('error')
}

const initialState = [...fromMemory]

export const noteReducers = (state = initialState, action) => {
  if (action.type === ADD_NOTE) {
    return [...state, action.payload]
  }
  if (action.type === DELETE_NOTE) {
    let newState = state.filter((note) => note.id !== action.payload)
    return [...newState]
  }
  if (action.type === UPDATE_NOTE) {
    return action.payload
  }
  if (action.type === SELECT_NOTE) {
    return state.map((note) => {
      if (note.id === action.payload) {
        return { ...note, isSelected: true }
      } else {
        return { ...note, isSelected: false }
      }
    })
    console.log(state, 'actionnnnn')
  }
  return state
}
