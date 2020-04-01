import React from 'react'
import {connect} from 'react-redux'
import {EditorWrapper,TextArea, EditorForm,EditorInput} from "./NoteEditor.sc";
import {addNote} from "../../redux/notelist/action";

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                noteTitle: '',
                noteText:'',
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.saveNote = this.saveNote.bind(this)
    }

  handleTextChange(event) {
    //let textValue = event.target.value
    this.setState({ noteText: event.target.value });
    //use spread operator
    // this.setState(state => ({note: Object.assign({}, state.note, {noteText: textValue})}));
  }

  handleInputChange(event) {
    // let inputValue = event.target.value
    this.setState({ noteTitle: event.target.value });
    //use spread operator
    //this.setState(state => ({note: Object.assign({}, state.note, {noteTitle: inputValue})}));
  }

  saveNote() {
    let note = {
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText
    };
        this.props.addNote(note)
         this.setState({noteText: ''})
        this.setState({noteTitle: ''})
    }
    render() {
        return (
            <EditorWrapper>
                <h5>NOTAL</h5>
                <EditorForm>
                    <EditorInput
                        placeholder='Note title...'
                        value={this.state.noteTitle ? this.state.noteTitle : ''}
                        onChange={this.handleInputChange}
                    />
                <TextArea
                    onChange={this.handleTextChange}
                    value={this.state.noteText}
                />
                </EditorForm>
                  <button onClick={this.saveNote}>SAVE</button>
            </EditorWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  addNote,
  dispatch
});

export default connect(null, mapDispatchToProps())(NoteEditor);
