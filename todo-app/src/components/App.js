import React from 'react'
import Header from './Header'
import TodoItem from './Todo'

function App(){
    return(
        <div className="app">
            <Header/>
            <div className="todo-items">
              <TodoItem item="Have A bath"/>
              <TodoItem item="Eat Lunch"/>
              <TodoItem item="Learn React"/>
              <TodoItem item="Go to Bed"/>
            </div>
        </div>
    )

}

export default App