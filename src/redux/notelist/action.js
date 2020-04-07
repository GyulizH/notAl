export const ADD_NOTE = 'ADD NOTE'
export const DELETE_NOTE = 'DELETE NOTE'

export const addNote = (newNote, action) => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  }
}

export const deleteNote = (index) => {
  return {
    type: DELETE_NOTE,
    payload: index,
  }
}
