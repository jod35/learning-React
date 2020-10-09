import React from 'react'


class Product extends React.Component{
    render(){
        return(
            <div className="product">
                <h3 className="name">
                    {this.props.name}
                </h3>
                <p className="description">
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default Product