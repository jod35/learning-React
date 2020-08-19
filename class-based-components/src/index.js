import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    render(){

        return (
           <div>
                <Header/>
                <Welcome username="Jojo"/>
           </div>
        )

        }
}



class Header extends React.Component{
    render(){

        return(
            <div className="header">
                this is the header.
            </div>
        )
    }
}

class Welcome extends React.Component{
    render(){

        return(
            <div className="welcome">
                <p>Hello, {this.props.username}</p>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));