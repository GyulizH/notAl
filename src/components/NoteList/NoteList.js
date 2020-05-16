import React from 'react'
import { connect } from 'react-redux'
import { selectNote } from '../../redux/notelist/action'
import {
  NoteListHeader,
  NoteListWrapper,
  NoteListElement,
  NoteListStar,
} from './NoteList.sc'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNote: {},
    }
    this.selectNote = this.selectNote.bind(this)
  }

  selectNote(id) {
    const selectedNote = this.props.notes.find((note) => note.id === id)
    this.props.selectNote(selectedNote.id)
    this.setState({ selectedNote: selectedNote })
    return selectedNote
  }
  renderList() {
    return this.props.notes.map((object, index) => {
      return (
        <NoteListElement
          isSelected={object.isSelected}
          key={object.id}
          onClick={() => this.selectNote(object.id)}
        >
          {object.isSelected && <NoteListStar size="20" />}
          {object.noteTitle}
        </NoteListElement>
      )
    })
  }
  render() {
    return (
      <NoteListWrapper>
        <NoteListHeader>NOTE LIST</NoteListHeader>
        <div>{this.renderList()}</div>
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
