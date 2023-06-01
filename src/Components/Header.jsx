import React from 'react'
import "../Style/css/Header.css"
import Carousel from './Carousel'
import ix from "../Images/iphone-x.png"
import smarttv from "../Images/smart-tv.png"
import macbook from "../Images/macbook.png"
import a01 from "../Images/a1-core.png"
import ideapad from "../Images/ideapad.png"
import jabra from "../Images/jabra.png"

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-inner">
      <div className="header-item carousel-section"><Carousel/></div>
        <div className="header-item iphone_x">
          <img src={ix} alt="" />
          <div className="caption">
            <h5>iPhone X</h5>
            <button><Link to={"/mobiles"} className='link'>Shop Now</Link></button>
          </div>
        </div>
        <div className="header-item smart-tv-section">
          <img src={smarttv} alt="" />
          <div className="caption">
            <h5>Smart TV</h5>
            <button><Link to={"/tv"} className='link'>Shop Now</Link></button>
          </div>
        </div>
        <div className="header-item laptop-section">
          <img src={macbook} alt="" />
          <div className="caption">
            <h5>Macbook</h5>
            <button><Link to={"/laptop"} className='link'>Shop Now</Link></button>
          </div>
        </div>
        <div className="header-item phone-section">
          <img src={a01} alt="" />
          <div className="caption">
            <h5>A01 Core</h5>
            <button><Link to={"/mobiles"} className='link'>Shop Now</Link></button>
          </div>
        </div>
        <div className="header-item cheap_laptop_section">
          <img src={ideapad} alt="" />
          <div className="caption">
            <h5>IdeaPad L3</h5>
            <button><Link to={"/mobiles"} className='link'>Shop Now</Link></button>
          </div>
        </div>
        <div className="header-item headphone">
        <img src={jabra} alt="" />
          <div className="caption">
            <h5>Jabra</h5>
            <button><Link to={"/headphones"} className='link'>Shop Now</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header