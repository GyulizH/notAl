export const SELECT_NOTE = 'SELECT NOTE'

export const selectNote = (selectedNote,action) => {
    return {
        type: SELECT_NOTE,
        payload: selectedNote
    }
}