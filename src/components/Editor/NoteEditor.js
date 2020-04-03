import React from 'react'
import { connect } from 'react-redux'
import {
  EditorWrapper,
  TextArea,
  EditorForm,
  EditorInput,
} from './NoteEditor.sc'
import { addNote } from '../../redux/notelist/action'

class NoteEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      noteText: '',
      id: null,
      selectedNote : {}
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

  render() {
    return (
      <EditorWrapper>
        <h5>NOTAL</h5>
        <EditorForm>
          <EditorInput
            placeholder="Note title..."
            value={
              this.props.selectedNote.noteTitle ? this.props.selectedNote.noteTitle : this.state.noteTitle
            }
            onChange={this.handleInputChange}
          />
          <TextArea
            onChange={this.handleTextChange}
            value={
              this.props.selectedNote.noteText? this.props.selectedNote.noteText : this.state.noteText
            }
          />
        </EditorForm>
        <button onClick={this.saveNote}>SAVE</button>
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
