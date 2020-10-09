import React from 'react'

function Joke(props){
    return(
        <div className="joke">
            <h3 style={{display: props.joke ? "block" :"none"}}>Question: {props.joke}</h3>
        </div>
    )
}


export default Joke