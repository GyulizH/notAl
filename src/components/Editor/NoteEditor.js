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

  componentDidMount() {
    this.setState({
      noteTitle: this.props.selectedNote.noteTitle,
      noteText: this.props.selectedNote.noteText,
      id: this.props.selectedNote.id,
    })
  }

  componentDidUpdate() {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        noteTitle: this.props.selectedNote.noteTitle,
        noteText: this.props.selectedNote.noteText,
        id: this.props.selectedNote.id,
      })
    }
  }

  handleTextChange(txt) {
    this.setState({ noteText: txt })
  }

  handleInputChange(event) {
    this.setState({ noteTitle: event.target.value })
  }

  addNewNote() {
    //this.set neden calismiyor state degisikligi oldugu icin otomatik re-render yapmasi gerekmiyor mu?
    this.setState({ noteText: '' })
    this.setState({ noteTitle: '' })
    this.setState({ id: Date.now() })
  }

  saveNote() {
    //note text ve title girilmemis olsa bile id ile bos not yaratiyor ??
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
      id: this.props.selectedNote.id ? this.props.selectedNote.id : Date.now(),
    }
    if (
      note.id !== this.props.selectedNote.id &&
      note.noteTitle !== '' &&
      note.noteText !== ''
    ) {
      this.props.addNote(note)
      this.setState({ noteText: '' })
      this.setState({ noteTitle: '' })
      this.setState({ id: null })
    }else if(note.id === this.props.selectedNote.id){
     this.props.updateSelectedNote(note)
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
      this.setState({ noteText: '' })
      this.setState({ noteTitle: '' })
      this.setState({ id: null })
    }
  }

  deleteNote() {
    let notesArr = [...this.props.notes]
    let selectedNoteIndex = notesArr.findIndex(
      (note) => note.id === this.props.selectedNote.id
    )
    if (selectedNoteIndex !== -1) {
      this.props.deleteNote(selectedNoteIndex)
      //bu iki satiri yazmazsam neden olmuyor ben bunu zaten sistemden siliyorum
      this.props.selectedNote.noteTitle = ''
      this.props.selectedNote.noteText = ' '
      this.setState({ noteText: '' })
      this.setState({ noteTitle: '' })
      this.setState({ id: null })
    }
  }

  render() {
    return (
      <EditorWrapper>
        <EditorHeader>
          <EditorForm>
            <EditorInput
              placeholder="Note title..."
              value={this.state.noteTitle ? this.state.noteTitle : ''}
              onChange={this.handleInputChange}
            />
          </EditorForm>
          <Button onClick={this.saveNote}>SAVE</Button>
          <Button onClick={this.deleteNote} appliedStyle="danger" danger>
            DELETE
          </Button>
          <Button onClick={this.addNewNote}> ADD </Button>
        </EditorHeader>
        <TextArea
          onChange={(e) => this.handleTextChange(e.target.value)}
          value={this.state.noteText ? this.state.noteText : ''}
          onKeyPress={this.enterPressed.bind(this)}
        />
      </EditorWrapper>
    )
  }
}

const mapStateToProps = ({ selectedNote, notes }) => {
  return { selectedNote, notes }
}
const mapDispatchToProps = (dispatch) => ({
  addNote,
  deleteNote,
  updateSelectedNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteEditor)
