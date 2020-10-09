import React,{Component} from 'react'
import products from '../data'
import ProductList from './productlist'



class App extends Component{
    super(){
        this.state={
            product_data:products
        }
    }

    render(){
      

        return (
            <div className="main">
                <h1 className="heading">Products</h1>
                <ProductList/>
            </div>
        )
    }
}

export default App