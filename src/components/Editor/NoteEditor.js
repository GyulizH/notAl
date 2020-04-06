import React from 'react'
import { connect } from 'react-redux'
import {
  EditorWrapper,
  TextArea,
  EditorForm,
  EditorInput,
} from './NoteEditor.sc'
import Button from '../Button'
import { addNote } from '../../redux/notelist/action'
import { deleteNote} from "../../redux/notelist/action";

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
  }

  componentDidMount() {
    this.setState({
      noteTitle: this.props.selectedNote.noteTitle,
      noteText: this.props.selectedNote.noteText,
      id: this.props.selectedNote.id
    });
  }

  componentDidUpdate() {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        noteTitle: this.props.selectedNote.noteTitle,
        noteText: this.props.selectedNote.noteText,
        id: this.props.selectedNote.id
      });
    }
  }

  handleTextChange(txt) {
    this.setState({ noteText: txt })
  }

  handleInputChange(event) {
    this.setState({ noteTitle: event.target.value })
  }

  saveNote() {
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
      id: Date.now(),
    }
    this.props.addNote(note)
    this.setState({ noteText: '' })
    this.setState({ noteTitle: '' })
    this.setState({ id: null })
  }

  enterPressed(event) {
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
      id: Date.now(),
    }
    let code = event.keyCode || event.which
    if (code === 13 && note.noteText !== '' && note.noteTitle !== '') {
      this.props.addNote(note)
      this.setState({ noteText: '' })
      this.setState({ noteTitle: '' })
      this.setState({ id: null })
    }
  }

  deleteNote(e){
    let notesArr = [...this.props.notes]
    let selectedNoteIndex = notesArr.findIndex(note => note.id === this.props.selectedNote.id)
    if(selectedNoteIndex !== -1){
     this.props.deleteNote(selectedNoteIndex)
    }
  }

  render() {
    return (
      <EditorWrapper>
        <EditorHeader>
          NOTAL
          <Button onClick={this.saveNote}>SAVE</Button>
          <Button onClick={this.deleteNote} danger>
            DELETE
          </Button>
        </EditorHeader>
        <EditorForm>
          <EditorInput
            placeholder="Note title..."
            value={
              this.state.noteTitle ? this.state.noteTitle : ''
            }
            onChange={this.handleInputChange}
          />
          <TextArea
            onChange={(e) => this.handleTextChange(e.target.value)}
            value={
              this.state.noteText ? this.state.noteText : ''
            }
          />
        </EditorForm>
        <button onClick={this.saveNote}>SAVE</button>
      </EditorWrapper>
    )
  }
}
const mapStateToProps = ({ selectedNote , notes }) => {
  return { selectedNote, notes }
}
const mapDispatchToProps = (dispatch) => ({
  addNote,
  deleteNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteEditor)
