export const SELECT_NOTE = 'SELECT NOTE'
export const UPDATE_SELECTED_NOTE = 'UPDATE SELECTED NOTE'

export const selectNote = (selectedNote, action) => {
  return {
    type: SELECT_NOTE,
    payload: selectedNote,
  }
}

//duzgun calismiyor
export const updateSelectedNote = (updatedNote, action) => {
  return {
    type: UPDATE_SELECTED_NOTE,
    payload:updatedNote
  }
}
