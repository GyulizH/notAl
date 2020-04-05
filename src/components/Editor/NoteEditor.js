import React from 'react'
import { connect } from 'react-redux'
import {
  EditorWrapper,
  TextArea,
  EditorForm,
  EditorInput,
  EditorHeader,
  EditorButton,
} from './NoteEditor.sc'
import Button from '../Button/index.jsx'
import { addNote } from '../../redux/notelist/action'

class NoteEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      noteText: '',
      id: null,
      selectedNote: {},
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveNote = this.saveNote.bind(this)
  }

  handleTextChange(event) {
    this.setState({ noteText: event.target.value })
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
    if (code === 13 && note.noteText !== '') {
      this.props.addNote(note)
      this.setState({ noteText: '' })
      this.setState({ noteTitle: '' })
      this.setState({ id: null })
    }
  }

  render() {
    return (
      <EditorWrapper>
        <EditorHeader>
          NOTAL
          <Button onClick={this.saveNote}>SAVE</Button>
          <Button onClick={this.saveNote} danger>
            DELETE
          </Button>
        </EditorHeader>
        <EditorForm>
          <EditorInput
            placeholder="Note title..."
            value={
              this.props.selectedNote.noteTitle
                ? this.props.selectedNote.noteTitle
                : this.state.noteTitle
            }
            onChange={this.handleInputChange}
          />
          <TextArea
            onChange={this.handleTextChange}
            value={
              this.props.selectedNote.noteText
                ? this.props.selectedNote.noteText
                : this.state.noteText
            }
            onKeyPress={this.enterPressed.bind(this)}
          />
        </EditorForm>
      </EditorWrapper>
    )
  }
}
const mapStateToProps = ({ selectedNote }) => {
  return { selectedNote }
}
const mapDispatchToProps = dispatch => ({
  addNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteEditor)
