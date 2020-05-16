export const SELECT_NOTE = 'SELECT NOTE'
export const UPDATE_SELECTED_NOTE = 'UPDATE SELECTED NOTE'

export const selectNote = (selectedNote) => {
  return {
    type: SELECT_NOTE,
    payload: selectedNote,
  }
}

export const updateSelectedNote = (updatedNote) => {
  return {
    type: UPDATE_SELECTED_NOTE,
    payload: updatedNote,
  }
}
