import React,{Component} from 'react'
import data from '../data'
import Product from './Product'

class ProductList extends Component{
    constructor(){
        super()
        this.state={
            items:data
        }
    }
    sayHi(){
        console.log("Hi");
    }
    render(){
       
       let products= this.state.items.map((product)=>(
            <Product 
                key={'id-' + product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                sayHi={this.sayHi}
            />
       ))
        
       return(
           <div className="products">
               {products}
           </div>
       )


    }

}

export default ProductList