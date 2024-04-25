
import { FaHeart } from "react-icons/fa";

import './index.css'

const ProductItem = props =>{
    const {productData,onchangeButton,isClick} = props
    const { id,image,title,price} = productData
    const slicedText =title.length>20? title.slice(0, 20)+"...":title.slice(0, 20)
    const button = isClick? 'color':''

   const onClickButton = () =>{
      onchangeButton(id)
    }

    return(
      <li className='li-container'>
        <img src={image} alt='product' className='product-image' />
        <hr/>
        <h1 className='title'>{slicedText}</h1>
        <div className='itens-container'>
            <h2 className="price">{price}</h2>
            <button type="button" className="button-heart" onClick={onClickButton}><FaHeart className={button}/></button> 
        </div>
      </li>
    )
}

export default ProductItem