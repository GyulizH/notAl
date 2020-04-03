export const ADD_NOTE = 'ADD NOTE'

export const addNote = (newNote, action) => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  }
}
