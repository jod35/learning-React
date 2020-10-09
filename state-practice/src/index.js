import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            "age":12,
            "name":"Jonathan"
        }
    }
    render(){
        return(
            <div className="main">
             <h1>Hi {this.state.name}</h1>
             <LoggedIn/>
            </div>
        )
    }
}

class LoggedIn extends React.Component{
    constructor(){
        super()
        this.state={
            "isLoggedIn":false,
        }
    }

    render(){
        let word
        if (this.state.isLoggedIn){
            word="In"
        }
        else{
            word="Out"
        }
        return(
        <h1>Your are logged {word}</h1>        
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('root'))