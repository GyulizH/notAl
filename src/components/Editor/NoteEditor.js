import React from 'react'
import { connect } from 'react-redux'
import {
  EditorWrapper,
  TextArea,
  EditorInput,
  EditorHeader,
} from './NoteEditor.sc'
import Button from '../Button'
import { addNote } from '../../redux/notelist/action'
import { deleteNote } from '../../redux/notelist/action'
import { updateNote } from '../../redux/notelist/action'
import { updateSelectedNote } from '../../redux/selectedNote/action'
import { selectNote } from '../../redux/notelist/action'

class NoteEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      noteText: '',
      id: null,
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveNote = this.saveNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.addNewNote = this.addNewNote.bind(this)
  }

  //amacim sayfayi yeniledigimde kaldigim yerden sectigom nottan devam etmesi idi ama hicbir ise yaramiyor
  // componentDidMount() {
  //   console.log(selectedNote,"componentdidupdate")
  // //   this.setState({
  // //     noteTitle: this.props.selectedNote.noteTitle,
  // //     noteText: this.props.selectedNote.noteText,
  // //     id: this.props.selectedNote.id,
  // //   })
  // //   console.log(this.state.id,"componentdidmount")
  // }

  componentDidUpdate() {
    const { selectedNote } = this.props
    const { id } = this.state
    if (selectedNote && id !== selectedNote.id) {
      this.setState({
        noteTitle: selectedNote.noteTitle,
        noteText: selectedNote.noteText,
        id: selectedNote.id,
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
    const newNote = {
      noteText: '',
      noteTitle: '',
      id: Date.now(),
    }
    this.setState({ ...newNote })
    this.props.selectNote(null)
  }

  saveNote(){
    const { selectedNote } = this.props
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
      id: this.state.id,
    }
    if(selectedNote){
      this.props.updateNote(note)
    } else {
      this.setState({ id: Date.now() }, () => {
        this.props.addNote(this.state)
      })
    }
  }

  //belki de bu olmamali
  enterPressed(event) {
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
      id: Date.now(),
    }
    let code = event.keyCode || event.which
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
    let selectedNoteId = notesArr.find(
      (note) => note.id === this.props.selectedNote.id
    )
    this.props.deleteNote(selectedNoteId.id)
    this.props.selectNote(null)
    //bu kisim yuzunden deletenote u tasiyamiyorum
    this.setState({
      noteTitle: '',
      noteText: '',
      id: null,
    })
  }

  render() {
    const { noteTitle, noteText } = this.state
    return (
      <EditorWrapper>
        <EditorHeader>
          <EditorInput
            placeholder="Note title..."
            value={noteTitle}
            onChange={this.handleInputChange}
          />

          <Button onClick={this.saveNote} appliedStyle="default">
            SAVE
          </Button>
          <Button onClick={this.deleteNote} appliedStyle="danger" danger>
            DELETE
          </Button>
          <Button onClick={this.addNewNote}> NEW </Button>
        </EditorHeader>
        <TextArea
          onChange={(e) => this.handleTextChange(e.target.value)}
          value={noteText}
          onKeyPress={this.enterPressed.bind(this)}
          tabindex="0"
        />
      </EditorWrapper>
    )
  }
}

const mapStateToProps = ({ notes }) => {
  return {
    selectedNote: notes.find((n) => n.isSelected) || null,
    notes,
  }
}
const mapDispatchToProps = (dispatch) => ({
  addNote,
  deleteNote,
  updateNote,
  updateSelectedNote,
  selectNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteEditor)
