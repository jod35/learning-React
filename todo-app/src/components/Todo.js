import React from 'react'

function TodoItem(props){
    console.log(props);
    return(
        <div className="todo-item">
                <p className="item">{props.item}</p>
                <input type="checkbox"></input>
                <hr></hr>

        </div >
    )
}

export default TodoItem