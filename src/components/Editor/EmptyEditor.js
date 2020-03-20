import React from 'react'
import {connect} from 'react-redux'
import {EmptyEditorWrapper,TextArea} from "./EmptyEditor.sc";
import {addNote} from "../../redux/notelist/action";

class EmptyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.saveNote = this.saveNote.bind(this)
    }

    handleTextChange (event) {
        this.setState({ text: event.target.value });
    }

    saveNote() {
       //console.log(this.props)
        this.props.addNote(this.state.text)
         this.setState({text: ''})
        console.log(this.state.text)
    }
    render() {
        return (
            <EmptyEditorWrapper>
                <h5>NOTAL</h5>
                <TextArea
                    onChange={this.handleTextChange}
                    value={this.state.text}
                />
                <button onClick={this.saveNote}>SAVE</button>
            </EmptyEditorWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
     addNote,
    dispatch
})



export default connect(null,mapDispatchToProps())(EmptyEditor)