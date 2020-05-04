export const ADD_NOTE = 'ADD NOTE'
export const DELETE_NOTE = 'DELETE NOTE'
export const UPDATE_NOTE = 'UPDATE NOTE'
export const SELECT_NOTE = 'SELECT NOTE'
export const UNSELECT_NOTE = 'UNSELECT NOTE'

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

export const selectNote =(selectedNote, action) => (dispatch,getState) => {
  let {notes} = getState()
  notes = notes.map((note) => ({...note, isSelected: selectedNote.id === note.id}))

  dispatch({
    type: SELECT_NOTE,
    payload: notes,
  })
}
export const unselectNote = (noteToUnselect, action) => (dispatch, getState) => {
  let { notes } = getState()
  notes = notes.map((note) => ({...note, isSelected: !(noteToUnselect.id === note.id) }))
  console.log(notes)
  dispatch( {
    type: UNSELECT_NOTE,
    payload:notes,
  })
}



