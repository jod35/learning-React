import React from 'react'

class Form extends React.Component {
    handleClick(){
        alert("Yo")
    }
    render(){
    
    return(
        <div className="form">
            <form onSubmit={this.handleClick}>
                <input type="text" name="task"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
}

export default Form