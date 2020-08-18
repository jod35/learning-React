import React from 'react'


function Punchline(props){
    return(
        <div>
            <p className="punchline" style={{color: props.punchline ? "" : "green"}}>
                Answer: <b>{props.punchline}</b>
            </p>
        </div>
    )
}

export default Punchline