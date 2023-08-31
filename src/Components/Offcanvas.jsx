import React, {useState, useEffect} from 'react'
import "../Style/css/Offcanvas.css"
import { Link } from 'react-router-dom';
import { MdHomeRepairService, MdLaptopMac} from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { FaTv, FaHeadphonesAlt} from "react-icons/fa";
import { HiShoppingCart} from "react-icons/hi";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import { useGlobalContext } from './context';
const Offcanvas = () => {
  const { likes, compares, openCart,toggleOffcanvas, amount, isRegisterOpen} = useGlobalContext()
let data = localStorage.getItem("NewUser");
const getNewName = () => {
  if(data) {
    return JSON.parse(localStorage.getItem("NewUser"))
  } else {
    return {}
  }
}
  const [setInfo] = useState(getNewName())
  useEffect(() => {
    setInfo(getNewName())
  }, [isRegisterOpen])
  return (
    <div className='offcanvas_navbar'>
    <section className='carts_wishlist_compares'>
    <div className='checkout amounts' onClick={openCart}>
    <div className="icon">
    <span ><HiShoppingCart/></span>
    <span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-pill bg-danger">{amount}</span>
    </div>
    </div>
    <div className='wishlist amounts'>
    <div className="icon position-relative">
    <span ><FiHeart/></span>
    <span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-pill bg-danger">{likes}</span>
    </div>
    </div>

    <div className='compares amounts'>
    <div className="icon position-relative">
    <span><FiRefreshCcw/></span>
    <span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-pill bg-danger">{compares}</span>
    </div>
    </div>
    </section>
    
  <ul>
<li onClick={toggleOffcanvas}><Link className='link' to="/"><span><MdHomeRepairService/></span> Home</Link></li>
<li onClick={toggleOffcanvas}><Link className='link' to="/laptop"><span><MdLaptopMac/></span> Laptops</Link></li>
<li onClick={toggleOffcanvas}><Link className='link' to="/mobiles"><span><ImMobile/></span> Mobiles</Link></li>
<li onClick={toggleOffcanvas}><Link className='link' to="/tv"><span><FaTv/></span> TV</Link></li>
<li onClick={toggleOffcanvas}><Link className='link' to="/headphones"><span><FaHeadphonesAlt/></span> Headphones</Link></li>
  </ul>
</div>
  )
}

export default Offcanvas