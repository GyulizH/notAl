import React from 'react'
import { connect } from 'react-redux'
import { selectNote } from '../../redux/selectedNote/action'
import { NoteListWrapper, NoteListHeader, NoteListElement } from './NoteList.sc'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNote: {},
    }
    this.selectNote = this.selectNote.bind(this)
  }

  componentDidMount() {}

  selectNote(id) {
    const selectedNote = this.props.notes.find((note) => note.id === id)
    this.setState({ selectedNote: selectedNote })
    this.props.selectNote(selectedNote)
    return selectedNote
  }

  renderList() {
    return this.props.notes.map((object, index) => {
      return (
        <NoteListElement
          isSelected={this.state.selectedNote.id === object.id}
          key={object.id}
          onClick={() => this.selectNote(object.id)}
        >
          {object.noteTitle}
        </NoteListElement>
      )
    })
  }

  render() {
    console.log(this.props.notes, "the note list")
    return (
      <NoteListWrapper>
        <NoteListHeader>NOTE LIST</NoteListHeader>
        {this.renderList()}
      </NoteListWrapper>
    )
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
