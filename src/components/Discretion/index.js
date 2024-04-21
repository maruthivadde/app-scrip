import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

import './index.css'

const Discretion = () =>(
    <>
     <div className='discretion-container'>
     <h1 className='discretion-heading'>DISCOVER OUR PRODUCTS</h1>
     <p className='discretion'>Lorem ipsum dolor sit amet, consectetur. It's fun to put on chocolate. The pain of the entire scalpel is important to me as an element of pain.</p>
    </div>
    <div className='recommended-container'>
        <div className="recommended-card">
        <h2 className='recommended-code'>3452 ITEMS</h2>
     <h2 className='recommended-name'> <GoChevronLeft/> HIDE FILTER</h2>
        </div>
       <h2 className='recommended'>RECOMMENDED <GoChevronDown/></h2>
    </div>
    </>
   
)

export default Discretion