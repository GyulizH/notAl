export const SELECT_NOTE = 'SELECT NOTE'
export const DELETE_NOTE = 'DELETE NOTE'

export const selectNote = (selectedNote, action) => {
  return {
    type: SELECT_NOTE,
    payload: selectedNote,
  }
}
