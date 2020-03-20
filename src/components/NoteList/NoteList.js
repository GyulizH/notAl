import React from 'react'
import {connect} from 'react-redux'

class NoteList extends React.Component{
    componentDidMount() {

    }

    renderList(){
        return this.props.notes.map(note => {
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

const mapStateToProps = ({notes}) => {
    return {notes}
}

export default connect(mapStateToProps)(NoteList)
