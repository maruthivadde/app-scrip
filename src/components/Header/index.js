import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

import './index.css'

const Header = () =>(
    <nav className="nav-container">
     <div className="logo-container">
        <img src="https://res.cloudinary.com/manimar/image/upload/v1713605702/logo_pfmgrl.jpg" alt='logo'  className='logo'/>
        <h1 className="logo-name">LOGO</h1>
        <div className="icons-container">
        <CiSearch className="icon"/>
        <CiHeart className="icon"/>
        <BsHandbag className="icon"/>
        <IoPersonOutline className="icon"/>
        <h2 className="eng">ENG <FaAngleDown className="icon-down"/></h2>
        </div>
     </div>
     <div className="names-container">
        <h2 className="name">SHOP</h2>
        <h2 className="name">SKILLS</h2>
        <h2 className="name">STORIES</h2>
        <h2 className="name">ABOUT</h2>
        <h2 className="name">CONTACT US</h2>
     </div>
    </nav>
)

export default Header