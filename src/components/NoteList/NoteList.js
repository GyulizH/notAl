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
} from './NoteList.sc'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNote: {},
      filteredNotes: []
    }
    this.selectNote = this.selectNote.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      filteredNotes: this.props.notes
    })
  }


  static getDerivedStateFromProps(nextProps,prevState){
    if(nextProps.notes !== prevState.filteredNotes ){
      console.log("GETDERIVED")
      return {
        filteredNotes: nextProps.notes
      }
    }
    return null
  }
  //will be replaced with getDerivedStateFromProps
  // componentWillReceiveProps(nextProps) {
  //     this.setState({
  //       filteredNotes: nextProps.notes
  //     })
  // }

  handleChange(e){
    let currentList = []
    let newList = []

    if(e.target.value !== ""){
      currentList = this.props.notes
      newList = currentList.filter(item => {
        const lc = item.noteTitle.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes(filter)
      })
      console.log(newList,"newlist")
    }else{
      newList = this.props.notes
    }

    this.setState({
      filteredNotes:newList
    })
    console.log(this.state.filteredNotes, "inside function")
  }

  selectNote(id) {
    const selectedNote = this.props.notes.find((note) => note.id === id)
    this.props.selectNote(selectedNote.id)
    this.setState({ selectedNote: selectedNote })
    return selectedNote
  }
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
          <NoteListButton onClick={() => {console.log("button")}}>
            <NoteListDots size="20"/>
          </NoteListButton>
        </NoteListElement>
      )
    })
  }
  render() {
    console.log(this.state.filteredNotes,"filterednotes")
    return (
      <NoteListWrapper>
        <NoteListHeader>
          <SearchInput type="text"
                 className="input"
                 placeholder="Search Notes..."
                 onChange={this.handleChange}
          />
        </NoteListHeader>
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
