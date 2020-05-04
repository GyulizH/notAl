import React from 'react'
import { connect } from 'react-redux'
import {
  EditorWrapper,
  TextArea,
  EditorForm,
  EditorInput,
  EditorHeader,
} from './NoteEditor.sc'
import Button from '../Button'
import { addNote } from '../../redux/notelist/action'
import { deleteNote } from '../../redux/notelist/action'
import { updateNote } from '../../redux/notelist/action'
import { updateSelectedNote } from '../../redux/selectedNote/action'

class NoteEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      noteText: '',
      id: null,
      selectedNote: this.props.selectedNote ? this.props.selectedNote : {},
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveNote = this.saveNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.addNewNote = this.addNewNote.bind(this)
  }
  handleTextChange(txt) {
    this.setState({ noteText: txt })
  }

  handleInputChange(event) {
    this.setState({ noteTitle: event.target.value })
  }

  addNewNote() {
    const newNote = {
      noteText: '',
      noteTitle: '',
      id: Date.now(),
    }
    this.setState({ ...newNote })
  }

  saveNote() {
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
      id: this.props.selectedNote.id ? this.props.selectedNote.id : Date.now(),
      isSelected: this.props.selectedNote.isSelected
        ? this.props.selectedNote.isSelected
        : false,
    }
    if (
      note.id !== this.props.selectedNote.id &&
      note.noteTitle !== '' &&
      note.noteText !== ''
    ) {
      this.props.addNote(note)
      this.setState({
        noteTitle: '',
        noteText: '',
        id: null,
      })
    } else if (note.id === this.props.selectedNote.id) {
      this.props.updateNote(note)
    }
  }

  enterPressed(event) {
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
      id: Date.now(),
    }
    let code = event.keyCode || event.which
    //title varken ve text yokken enter a basinca sayfayi yeniliyor??
    if (code === 13 && note.noteText !== '' && note.noteTitle !== '') {
      this.props.addNote(note)
      this.setState({
        noteTitle: '',
        noteText: '',
        id: null,
      })
    }
  }

  deleteNote() {
    let notesArr = [...this.props.notes]
    let selectedNoteIndex = notesArr.findIndex(
      note => note.id === this.props.selectedNote.id
    )
    if (selectedNoteIndex !== -1) {
      this.props.deleteNote(selectedNoteIndex)
      this.props.selectedNote.noteTitle = ''
      this.props.selectedNote.noteText = ' '
      this.setState({
        noteTitle: '',
        noteText: '',
        id: null,
      })
    }
  }

  render() {
    const { selectedNote } = this.props
    const { noteTitle, noteText } = this.state

    return (
      <EditorWrapper>
        <EditorHeader>
          <EditorForm>
            <EditorInput
              placeholder="Note title..."
              value={selectedNote ? selectedNote.noteTitle : noteTitle}
              onChange={this.handleInputChange}
            />
          </EditorForm>
          <Button onClick={this.saveNote} appliedStyle="default">
            SAVE
          </Button>
          <Button onClick={this.deleteNote} appliedStyle="danger" danger>
            DELETE
          </Button>
          <Button onClick={this.addNewNote}> ADD </Button>
        </EditorHeader>
        <TextArea
          onChange={e => this.handleTextChange(e.target.value)}
          value={selectedNote ? selectedNote.noteText : noteText}
          onKeyPress={this.enterPressed.bind(this)}
        />
      </EditorWrapper>
    )
  }
}

const mapStateToProps = ({ notes }) => {
  return {
    selectedNote: notes.find(n => n.isSelected) || null,
    notes,
  }
}
const mapDispatchToProps = dispatch => ({
  addNote,
  deleteNote,
  updateNote,
  updateSelectedNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteEditor)
