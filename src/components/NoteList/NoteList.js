import React from 'react'
import {connect} from 'react-redux'

class NoteList extends React.Component{
    componentDidMount() {
        console.log(this.props)
    }

    renderList(){
        return this.props.notes.notes.map(note => {
            return(
                <p>{note}</p>

            )
        })
    }
    render() {
        return (
            <div>
            {this.renderList()}
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(NoteList)