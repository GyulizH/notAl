export const ADD_NOTE = 'ADD NOTE'

export const addNote = (dispatch,newNote) => {

    return {type: ADD_NOTE, payload: newNote}
}
