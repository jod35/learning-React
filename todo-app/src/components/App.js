import React from 'react'
import Header from './Header'
import TodoItem from './Todo'

function App(){
    return(
        <div className="app">
            <Header/>
            <div className="todo-items">
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>
            </div>
        </div>
    )

}

export default App