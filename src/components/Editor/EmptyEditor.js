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
        this.props.addNote(this.state.text)
        this.setState({text: ''})
    }
    render() {
        return (
            <EmptyEditorWrapper>
                <h5>NOTAL</h5>
                <TextArea
                    onChange={this.handleTextChange}
                />
                <button onClick={this.saveNote}>SAVE</button>
            </EmptyEditorWrapper>
        )
    }
}

const mapDispatchToProps = {
    addNote
}

export default connect(null,mapDispatchToProps)(EmptyEditor)