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
      filteredNotes: [],
      isModalOpen: true,
    }
    this.selectNote = this.selectNote.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      filteredNotes: this.props.notes,
    })
    this.state.filteredNotes.forEach(function (element) {
      element.Active = false
    })
  }

  // static getDerivedStateFromProps(nextProps,prevState){
  //   if(nextProps.notes !== prevState.filteredNotes ){
  //     console.log("GETDERIVED")
  //     return {
  //       filteredNotes: nextProps.notes
  //     }
  //   }
  //   return null
  // }
  //will be replaced with getDerivedStateFromProps
  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredNotes: nextProps.notes,
    })
  }

  handleChange(e) {
    let currentList = []
    let newList = []

    if (e.target.value !== '') {
      currentList = this.props.notes
      newList = currentList.filter((item) => {
        const lc = item.noteTitle.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes(filter)
      })
    } else {
      newList = this.props.notes
    }

    this.setState({
      filteredNotes: newList,
    })
  }

  selectNote(id) {
    const selectedNote = this.props.notes.find((note) => note.id === id)
    this.props.selectNote(selectedNote.id)
    this.setState({ selectedNote: selectedNote })
    return selectedNote
  }

  //modal pozisyonu calismiyor sebep yaptigim islemin re-render tetiklememesi
  //list elemanlari problemli
  renderList() {
    return this.state.filteredNotes.map((object, index) => {
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
            onClick={(e) => {
              object.Active = !object.Active
              let myDiv = document.getElementById(object.id)
              myDiv.style.left = e.clientX + 'px'
              myDiv.style.top = e.clientY + 'px'
            }}
          >
            <NoteListDots size="20" />
          </NoteListButton>
          {object.Active && (
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
            onChange={this.handleChange}
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
const mapDispatchToProps = (dispatch) => ({
  selectNote,
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps())(NoteList)
