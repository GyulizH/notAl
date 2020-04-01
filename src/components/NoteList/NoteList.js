import React from "react";
import { connect } from "react-redux";

class NoteList extends React.Component {
  componentDidMount() {}

  renderList() {
    let noteTitles = [];
    for (let note of this.props.notes) {
      noteTitles.push(note.noteTitle);
    }
    return noteTitles.map(note => {
      return <p>{note}</p>;
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps)(NoteList);
