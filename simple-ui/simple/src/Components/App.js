import React,{Component} from 'react'
import ProductList from './ProductList'


class App extends Component{
    render(){
        return(
            <div className="main">
                <h1 className="heading">My Products App</h1>
                <ProductList/>

            </div>
        )
    }
}

export default App