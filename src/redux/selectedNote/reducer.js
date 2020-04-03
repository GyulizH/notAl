import { SELECT_NOTE } from './action'

const initialState = {
  selectedNote: {},
}
export const selectedNoteReducer = (state = initialState, action) => {
  if (action.type === SELECT_NOTE) {
    return {
      ...state,
      selectedNote: action.payload,
    }
  }
  return state
}
