import React from 'react';
import { gamerProducts } from '../data';
import "../Style/css/Gamer.css"

import { BsArrowsFullscreen } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { useGlobalContext } from './context';
const Gamer = () => {
    const {ToggleLikes, addToCompare,addToCart} = useGlobalContext();
  return (
    <div className='gamer_products'>
        <div className="gamer_products_inner">
            <div className="gamer_products_header">
                <h2>Gamer Products</h2>
            </div>
            <ul>
                {
                    gamerProducts.map((gamer) => {
                        const {id,img,  title, stars, oldPrice, newPrice} = gamer
                        return (
                            <li key={id} className="gamer_product">
                                <div className="img">
                                <img src={img} alt="" />
                                </div>
                                <div className="details">
                                <p className='stars'>{stars.map((star, index)=> {return <span key={index}>{star}</span>})}</p>
                                <h2 className='title'>{title}</h2>
                                <div className='price'>
                                    <p className='old_price'><del>${oldPrice}</del></p>
                                    <p className='new_price'>${newPrice}</p>
                                </div> 
                                </div>
                                <div className="overlay">
                                    <div className="mark_product">
                                    <span><BsArrowsFullscreen/></span>
                                    <span onClick={() => ToggleLikes(id)}><FaHeart/></span>
                                    <span onClick={() => addToCompare()}><FiRefreshCcw/></span>
                                    </div>
                                    <div className="button">
                                    <button onClick={() => addToCart(newPrice)}>Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Gamer