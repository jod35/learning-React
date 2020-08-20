import React from 'react'
import Header from './Header'
import TodoItem from './Todo'
import todoItems from '../data'

class App extends React.Component{
   constructor(){
        super()
        this.state={
            todos:todoItems
        }
   }
   render(){
    const todos= this.state.todos.map((todo)=>(
        <TodoItem key={todo.id} item={todo.text} completed={todo.completed}/>
    ))
    return(
        <div className="app">
            <Header/>
            <div className="todo-items" onMouseOver={()=>{console.log("Hllo ")}}>
                {todos}
            </div>
        </div>
    )

   }
}

export default App