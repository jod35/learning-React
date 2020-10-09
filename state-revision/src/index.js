import React,{Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component{
    constructor(){
        super()
        this.state={
            "age":12,
            "name":"Ssali Jonathan"
        }
    }
    render(){
        
        return(
            <div>
                <h1>hello, I am {this.state.name}</h1>
                <h2>And  i am {this.state.age} years old.</h2>
                <Child/>
            </div>
        )
    }
}

class Child extends Component{
    constructor(){
        super()

        this.state={
            "IsLoggedIn":false
        }

    }

    render(){
        let wordDisplay

        if (this.state.IsLoggedIn === true){
            wordDisplay="in"
        }
        else{
            wordDisplay="out"
        }
        return(
            <div>
                <h1>You are logged {wordDisplay}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))             