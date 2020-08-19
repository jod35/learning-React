import React from 'react'
function Product(props){
    return(
        <div className="product">
            <p>Product     {props.id}</p>
            <hr></hr>
            <img src="{props.imageUrl}" alt="product"></img>
            <h3 className="prod-name">{props.name}</h3>
            <p className="prod-descr">
                {props.description}
            </p>
            <small className="category">
                {props.category}
            </small>
        </div>
    )
}
export default Product