import React from 'react'
import EmptyEditor from '../components/Editor/EmptyEditor'

class App extends React.Component{
    render() {
        //height:'100vh'
        //flex-direction:'row'
       return (
           <div style={{width:'100%',
               height:'500px',
               display:'flex',
               flexDirection:'column'
           }}>
            <h1>My React App</h1>
            <EmptyEditor/>
        </div>
       )
    }
}

export default App