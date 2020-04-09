import React from 'react'
import EmptyEditor from './Editor/NoteEditor'
import NoteList from './NoteList/NoteList'

//flexDirection: 'column',
class App extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '1000px',
          display: 'flex',
          margin: '0px',
        }}
      >
        <div>
          <NoteList />
        </div>
        <EmptyEditor />
      </div>
    )
  }
}

export default App
