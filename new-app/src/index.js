import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import sorted_products from './seed';


class Product extends Component{
    handleUpVote(){
        this.props.onVote(this.props.id)
    }
    render(){
       
        return(
            <div className="item">
               
                <div className="image">
                    <img src="{this.props.productImageUrl}" alt="Product"/>
                </div>

                <div className="middle aligned content">
                <div className="middle aligned content">
                        <div className="header">
                            <a   onClick={this.handleUpVote}>
                                <i className="large caret up icon"></i>
                            </a>
                            {this.props.votes}
                        </div>
                    </div>
                    <div className="description">
                        <a  >{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <img className="ui avatar image" alt="User"></img>
                    </div>
                  
                </div>
            </div>
        );
    }
}

class ProductList extends Component{
    handleProductUpVote(productId){
        console.log(productId +"was upvoted");
    }
    render(){
        const productComponents=sorted_products.map((product)=>(
            <Product
            id={'product.id -' +product.id}
            title={product.title}
            description={product.description}
            userSubmitted={product.productImageUrl}
            votes={product.handleProductUpVote}
        />
       
        ));
        return (
            <div className="ui unstackable items">
                <h1>Product Hunt</h1>
                 {productComponents}
               
            </div>
        )
    }
}

ReactDOM.render(<ProductList/>,document.querySelector('#root'));


