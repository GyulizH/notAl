export const ADD_NOTE = 'ADD NOTE'
export const DELETE_NOTE = 'DELETE NOTE'
export const UPDATE_NOTE = 'UPDATE NOTE'

export const updateNote = (newNote, action) => (dispatch, getState) => {
  const { notes } = getState()
  const editedNoteArray = notes.map(note => {
    if (note.id == newNote.id) {
      return newNote
    }
    return note
  })
  dispatch({
    type: UPDATE_NOTE,
    payload: editedNoteArray,
  })
}
export const addNote = (newNote, action) => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  }
}

export const deleteNote = index => {
  return {
    type: DELETE_NOTE,
    payload: index,
  }
}
