import React from 'react'
import { connect } from 'react-redux'
import { selectNote } from '../../redux/notelist/action'
import {
  NoteListHeader,
  NoteListWrapper,
  NoteListElement,
  NoteListStar,
  SearchInput,
  SearchIcon,
  NoteListButton,
  NoteListDots,
  NoteListModal,
  ModalListElement,
  ModalGarbage,
} from './NoteList.sc'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNote: {},
      notes: [],
      isModalOpen: true,
      searchKeyword: '',
      toggledItemId: null
    }
    this.selectNote = this.selectNote.bind(this)
    this.setSearchKeyword = this.setSearchKeyword.bind(this)
    this.toggleListItem = this.toggleListItem.bind(this)
  }

  componentDidMount() {
    this.setState({
      notes: this.props.notes,
    })
  }

  setSearchKeyword(event) {
    const searchKeyword = event.target.value
    this.setState({
      searchKeyword
    })
  }
  filterNotes(notes) {
    const searchKeyword = this.state.searchKeyword.toLowerCase()
    return notes.filter(note => {
        return note.noteTitle.toLowerCase().includes(searchKeyword)
      })
  }

  selectNote(id) {
    const selectedNote = this.props.notes.find(note => note.id === id)
    this.props.selectNote(selectedNote.id)
    this.setState({ selectedNote: selectedNote })
    return selectedNote
  }
  toggleListItem(note, event) {
    event.stopPropagation()
    this.setState({
      toggledItemId: this.state.toggledItemId == note.id ? null : note.id,
    })
  }
  //modal pozisyonu calismiyor sebep yaptigim islemin re-render tetiklememesi
  //list elemanlari problemli
  renderList() {
    return this.filterNotes(this.props.notes).map((object, index) => {
      return (
        <NoteListElement
          isSelected={object.isSelected}
          key={object.id}
          onClick={() => this.selectNote(object.id)}
        >
          {object.isSelected && <NoteListStar size="20" />}
          {object.noteTitle}
          <NoteListButton
            id={object.id}
            onClick={(event) => this.toggleListItem(object,event)}
          >
            <NoteListDots size="20" />
          </NoteListButton>
          {object.id == this.state.toggledItemId && (
            <NoteListModal>
              <ModalListElement key="fav">
                <NoteListStar size="20" />
                Mark as Favourite
              </ModalListElement>
              <ModalListElement key="del">
                <ModalGarbage size="20" />
                Delete
              </ModalListElement>
            </NoteListModal>
          )}
        </NoteListElement>
      )
    })
  }
  render() {
    return (
      <NoteListWrapper>
        <NoteListHeader>
          <SearchInput
            type="text"
            className="input"
            placeholder="Search Notes..."
            onChange={this.setSearchKeyword}
          />
        </NoteListHeader>
        <div
          style={{
            overflowY: 'scroll',
          }}
        >
          {this.renderList()}
        </div>
      </NoteListWrapper>
    )
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes }
}
const mapDispatchToProps = dispatch => ({
  selectNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteList)
