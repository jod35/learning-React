import React from 'react'


function Task(props){
    return(
        <div className="task">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Task