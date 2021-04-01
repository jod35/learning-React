import React from 'react';
import Form from './Form'
import todos from '.././data'
import Task from './Task'
import Clock from './Clock'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todos
        }
    }

  

    render() {
        
        

        const tasks = this.state.todos.map((task) => {
            return <Task name={task.name} description={task.description} />
        });


        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                    <small>
                        <Clock />
                    </small>
                </header>
                <Form onSubmit={this.handleClick} />
                <div className="todos">
                    {tasks}
                </div>
            </div>
        )
    }
}

export default Main