import React from 'react'
import Joke from './Joke'
import Punchline from './Punchline'



function App(){
    return(
        <div className="jokes">
            <h1>Joke Time</h1>
            <div className="container">
                <li>
                    <Joke />
                    <Punchline punchline="She was afraid"/>
                </li>
                <li>
                    <Joke joke="Why did the Teacher runout of class?"/>
                    <Punchline punchline="She was afraid"/>
                </li>

                <li>
                    <Joke joke="Why was the math test so sad?"/>
                    <Punchline punchline="She had a lot of problems."/>
                </li>

                <li>
                    <Joke joke="Why do you bathe at night?"/>
                    <Punchline punchline="I am afraid of the sun"/>
                </li>

                <li>
                    <Joke joke="Why did the Teacher runout of class?"/>
                    <Punchline punchline="She was afraid"/>
                </li>

                <li>
                    <Joke joke="Why did the Teacher runout of class?"/>
                    <Punchline punchline="She was afraid"/>
                </li>
            </div>
        </div>
    )
}

export default App