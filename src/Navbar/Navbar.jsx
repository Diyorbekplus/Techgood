import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Style/css/Navbar.css"
import { useGlobalContext } from '../Components/context';
import { MdHomeRepairService, MdLaptopMac, MdOutlineSearch } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { FaTv, FaHeadphonesAlt, FaUserAlt, FaHeadphones } from "react-icons/fa";
import { HiShoppingCart, HiOutlineMenuAlt1,  } from "react-icons/hi";

import { FiHeart, FiRefreshCcw } from "react-icons/fi";

const Navbar = () => {
  const { toggleOffcanvas,likes, compares,inputValue, setInputValue, openCart, openLoginPage, openAccountPage, isRegisterOpen, subtotal, amount} = useGlobalContext()
let data = localStorage.getItem("NewUser");
const getNewName = () => {
  if(data) {
    return JSON.parse(localStorage.getItem("NewUser"))
  } else {
    return {}
  }
}
  const [info, setInfo] = useState(getNewName())
  useEffect(() => {
    setInfo(getNewName())
  }, [isRegisterOpen])

  return (
    <section className='navbar_section'>
        <div className='navbar_logo'>
          <button data-bs-target="#offcanvasRight" className='toggle_navbar' onClick={toggleOffcanvas}><span><HiOutlineMenuAlt1 className='toggle_icon'/></span></button>
          <Link to="/"><img className='logo' src="./assets/logo.png" alt="" /></Link>
        </div>
        <div className='navbar_nav'>
          <ul>
<li><Link className='link' to="/"><span><MdHomeRepairService/></span> Home</Link></li>
<li><Link className='link' to="/laptop"><span><MdLaptopMac/></span> Laptops</Link></li>
<li><Link className='link' to="/mobiles"><span><ImMobile/></span> Mobiles</Link></li>
<li><Link className='link' to="/tv"><span><FaTv/></span> TV</Link></li>
<li><Link className='link' to="/headphones"><span><FaHeadphonesAlt/></span> Headphones</Link></li>
          </ul>
        </div>
        <div className='navbar_account_checkout ' >
          <div className="account">
          <div className="icon" onClick={data ? openAccountPage :  openLoginPage}>
          <FaUserAlt/>
          </div>
          <div className="profile" onClick={openLoginPage}>
            {
              info.firstName ? info.firstName : "Login/Create Account"
            }
          </div>
          </div>
          <div className='checkout'>
          <div className="icon position-relative" >
            <span onClick={openCart}><HiShoppingCart/></span>
            <span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-pill bg-danger">{amount}</span>
          </div>
          <div className="check">
            <p className='total'>$<span>{subtotal.toFixed(2)}</span> </p>
          </div>
         </div>
        </div>
        <div className='navbar_search'>
          <div className="navbar_search-inner">
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='text-input' type="search" name="" id="" placeholder='Search our products'/>
          <button className='search-input' type="submit" value="Search"><span><MdOutlineSearch/></span> <span className='search-text'>Search</span> </button>
          </div>

        </div>
        <div className='navbar_wishlist-compare'>
          <div className='position-relative'><FiHeart/> <span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-pill bg-danger">{likes}</span></div>
          <div className='position-relative'><FiRefreshCcw/> <span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-pill bg-danger">{compares}</span></div>
        </div>
        <div className='navbar_call'>
          <div className="icon">
            <FaHeadphones/>
          </div>
          <div className="call">
            <p>+998 97 374 11 77</p>
            <p>Call Us Know</p>
          </div>
        </div>
    </section>
  )
}

export default Navbar