import { Component } from "react";
import ProductItem from '../ProductItem'

import './index.css'

class Products extends Component{
    state = {
        productsList: [],
      };
    
      componentDidMount() {
        this.getProducts();
      }
    
      getProducts = async () => {
        const apiUrl = "https://fakestoreapi.com/products";
        const response = await fetch(apiUrl);
        const data = await response.json();
        const fetchedData = data.map((eachProduct) =>({
            id: eachProduct.id,
            title:eachProduct.title,
            image:eachProduct.image,
            price:eachProduct.price
        }))
        this.setState({productsList:fetchedData})
      };
    

    render(){
        const {productsList} = this.state
        return(
            
                <ul className="ul-container">
                {productsList.map((eachItem)=>(
                    <ProductItem key={eachItem.id} productData={eachItem}/>
                ))}
                </ul>
                
        )
    }

}

export default Products