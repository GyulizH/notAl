import React from 'react'
import { connect } from 'react-redux'
import { selectNote } from '../../redux/selectedNote/action'
import { selectedNoteReducer as selectedNote } from '../../redux/selectedNote/reducer'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.selectNote = this.selectNote.bind(this)
  }
  componentDidMount() {}

  selectNote(id) {
    const selectedNote = this.props.notes.find((note) => note.id === id)
    this.props.selectNote(selectedNote)
    return selectedNote
  }
  renderList() {
    return this.props.notes.map((object, index) => {
      return (
        <li key={object.id} onClick={() => this.selectNote(object.id)}>
          {object.noteTitle}
        </li>
      )
    })
  }
  render() {
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes }
}
const mapDispatchToProps = (dispatch) => ({
  selectNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteList)
