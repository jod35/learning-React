import React,{Component} from 'react'

import Product from '../components/products'
import products from '../data'


class ProductList extends Component{
   constructor(){
    super()
        this.state={
            product_data:products
        }
   }

    render(){
        let product_components=this.state.product_data.map((product)=>(
            <Product
                name={product.name}
                price={product.price}
                description={product.description}
            />
        ))

        return(
            <div className="products">
                {product_components}
            </div>
        )
    }


}

export default ProductList