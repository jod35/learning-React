import React,{Component} from 'react'

class Product extends Component{
    showId(){
        console.log(this)
    }
    render(){
        return(
            <div className="product">
                <h3>{this.props.name}</h3>
                <p>{this.props.price}</p>
                <p>{this.props.description}</p>
                <br></br>
                <button id="order" className="order" onClick={this.showId(this.props.id)}>Order</button>
            </div>
        )
    }
}

export default Product