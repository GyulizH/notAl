import React from 'react'
import NoteList from './NoteList/NoteList'
import NoteEditor from './Editor/NoteEditor'

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '1000px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
          <NoteList />
        <NoteEditor />
      </div>
    )
  }
}

export default App
