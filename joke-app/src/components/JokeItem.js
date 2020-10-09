import React from 'react'
import Joke from './Joke'
import PunchLine from'./Punchline'

function JokeItem(){
    return(
        <div className="joke-item">
            <Joke/>
            <Punchline/>
            <hr></hr>
        </div>
    )
}

export default JokeItem