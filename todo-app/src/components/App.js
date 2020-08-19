import React from 'react'
import Header from './Header'
import TodoItem from './Todo'
import todoItems from '../data'

function App(){
    const todos= todoItems.map((todo)=>(
        <TodoItem item={todo.text} completed={todo.completed}/>
    ))
    return(
        <div className="app">
            <Header/>
            <div className="todo-items">
                {todos}
            </div>
        </div>
    )

}

export default App