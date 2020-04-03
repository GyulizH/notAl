import React from 'react'
import { connect } from 'react-redux'
import {
  EditorWrapper,
  TextArea,
  EditorForm,
  EditorInput,
} from './NoteEditor.sc'
import { addNote } from '../../redux/notelist/action'
import { selectedNoteReducer as selectedNote } from '../../redux/selectedNote/reducer'

class NoteEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      noteText: '',
      id: null,
    }
    console.log('editor props', this.props.selectedNote)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveNote = this.saveNote.bind(this)
  }

  handleTextChange(event) {
    //let textValue = event.target.value
    this.setState({ noteText: event.target.value })
    //use spread operator
    // this.setState(state => ({note: Object.assign({}, state.note, {noteText: textValue})}));
  }

  handleInputChange(event) {
    // let inputValue = event.target.value
    this.setState({ noteTitle: event.target.value })
    //use spread operator
    //this.setState(state => ({note: Object.assign({}, state.note, {noteTitle: inputValue})}));
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
        {JSON.stringify(this.props.selectedNote, null, 2)}
        <EditorForm>
          <EditorInput
            placeholder="Note title..."
            value={
              this.props.selectedNote.selectedNote ? this.props.selectedNote.selectedNote.noteTitle : ''
            }
            onChange={this.handleInputChange}
          />
          <TextArea
            onChange={this.handleTextChange}
            value={
              this.props.selectedNote ? this.props.selectedNote.noteText : ''
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
