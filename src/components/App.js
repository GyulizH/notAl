import React from 'react'
import EmptyEditor from '../components/Editor/EmptyEditor'
import NoteList from "./NoteList/NoteList";

class App extends React.Component{
    render() {
       return (
           <div style={{width:'100%',
               height:'1000px',
               display:'flex',
               flexDirection:'column'
           }}>
            <h1>My React App</h1>
            <EmptyEditor/>
            <div>
                <NoteList/>
            </div>
        </div>
       )
    }
}

export default App