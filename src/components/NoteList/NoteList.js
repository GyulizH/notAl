import React from 'react'
import { connect } from 'react-redux'
import { selectNote } from '../../redux/selectedNote/action'
import {
  NoteListHeader,
  NoteListWrapper,
  NoteListElement,
  NoteListStar,
} from './NoteList.sc'
import { selectedNoteReducer as selectedNote } from '../../redux/selectedNote/reducer'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNote: {},
      isSelected: false,
    }
    this.selectNote = this.selectNote.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  // }

  selectNote(id) {
    const selectedNote = this.props.notes.find((note) => note.id === id)
    this.props.selectNote(selectedNote)

    this.setState({ selectedNote: selectedNote })
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
          {this.state.selectedNote.id === object.id && (
            <NoteListStar size="20" />
          )}
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
