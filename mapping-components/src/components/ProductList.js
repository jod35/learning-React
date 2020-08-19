import React from 'react'
import Product from './Product'
import products from '../data'

function ProductList(){
    const productlist=products.map((product)=>(
        <Product
        
        id={product.id}
        name={product.name}
        description={product.description}
   />
    ))
    return(
        <div className="product-list">
           {productlist}
        </div>
    )
}

export default ProductList