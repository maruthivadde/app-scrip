import { Component } from "react";
import ProductItem from '../ProductItem'
import Discretion from '../Discretion'
import Header from '../Header'
import About from '../About'

import { CiSearch } from "react-icons/ci";


import './index.css'

class Products extends Component{
    state = {
        productsList: [],
        inputValue:'',
        active: false,
        activeCategoryId:'',
        count:0
      };

      onchangeInput = event =>{
        this.setState({inputValue:event.target.value})
      }
     
      onchangeButton=(id)=>{
        const {productsList} = this.state
        this.setState(prevState => ({active:!prevState.active,count:prevState.count+1,activeCategoryId:productsList[id].id}))
    
      }
    
   
    
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
        const {productsList,count,inputValue,activeCategoryId} = this.state
       const filterProductsList = productsList.filter(eachUser =>
        eachUser.title.includes(inputValue)
      )
      
     
        return(
            <>
            <Header count={count}/>
            <div className="div-container">
              <Discretion />
              <div className="mm-container">
              <input type="text" className="input-value" placeholder="enter text" value={inputValue} 
              onChange={this.onchangeInput}
              />
              <CiSearch className="icon"/>
              </div>
              
              <ul className="ul-container">
              {filterProductsList.map((eachItem)=>(
                    <ProductItem key={eachItem.id} productData={eachItem} 
                    isClick = {activeCategoryId === eachItem.id}
                    onchangeButton={this.onchangeButton}/>
                ))}
              </ul>
              <About/>
                </div>
            </>
          
                
        )
    }

}

export default Products