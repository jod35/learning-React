import React from 'react'



class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    
    componentDidMount(){
        this.timerID=setTimeout(
            ()=>this.tick(),1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState(
            {date: new Date()}
        )
    }
    render() {
        return(
            <div className="clock">
                 <p className="time">{this.state.date.toLocaleString()}</p>
            </div>
        )
    }
}

export default Clock