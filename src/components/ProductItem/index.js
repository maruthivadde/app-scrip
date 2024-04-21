import { CiHeart } from "react-icons/ci";

import './index.css'

const ProductItem = props =>{
    const {productData} = props
    const {image,title,price} = productData
    return(
      <li className='li-container'>
        <img src={image} alt='product' className='product-image' />
        <hr/>
        <h1 className='title'>{title}</h1>
        <div className='itens-container'>
            <h2 className="price">{price}</h2>
            <CiHeart/>
        </div>
      </li>
    )
}

export default ProductItem