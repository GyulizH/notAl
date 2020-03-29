import React from 'react'
import {connect} from 'react-redux'
import {EditorWrapper,TextArea, EditorFrom,EditorInput} from "./EmptyEditor.sc";
import {addNote} from "../../redux/notelist/action";

class EmptyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteText:''
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.saveNote = this.saveNote.bind(this)
    }

    handleTextChange (event) {
        this.setState({ noteText: event.target.value });
    }

    handleInputChange(event){
        console.log(this.state)
        this.setState({ noteTitle: event.target.value })
        console.log(this.state.noteTitle);
    }

    saveNote() {
        console.log("hey")
        this.props.addNote(this.state.noteText)
         this.setState({noteText: ''})
    }
    render() {
        return (
            <EditorWrapper>
                <h5>NOTAL</h5>
                <EditorFrom>
                    <EditorInput
                        placeholder='Note title...'
                        value={this.state.noteTitle ? this.state.noteTitle : ''}
                        onChange={this.handleInputChange}
                    />
                <TextArea
                    onChange={this.handleTextChange}
                    value={this.state.noteText}
                />
                </EditorFrom>
                  <button onClick={this.saveNote}>SAVE</button>
            </EditorWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
     addNote,
    dispatch
})



export default connect(null,mapDispatchToProps())(EmptyEditor)