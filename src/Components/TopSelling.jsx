import React from 'react'
import { topSellingProducts } from '../data'
import "../Style/css/TopSelling.css"
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { useGlobalContext } from './context';
const TopSelling = () => {
    const {ToggleLikes, addToCompare,addToCart } = useGlobalContext();
  return (
    <div className='top_selling container-xxl'>
        <div className="top_selling_inner">
            <div className="header">
                <h2>Top Selling Products</h2>
            </div>
            <ul>
                {
                    topSellingProducts.map((product) => {
                        const {id,stars, img, title,oldPrice, newPrice } = product
                        return (
                            <li className='' key={id}>
                                <div className="img">
                                    <img src={img} alt="" />
                                </div>
                                <div className="details">
                                <div className="stars">
                                    {
                                        stars.map((star, index) => {
                                            return <span key={index}>{star}</span>
                                        })
                                    }
                                </div>
                                <h6 className="title">{title}</h6>
                                <div className="price">
                                    <p className="old_price"><del>${oldPrice}</del></p>
                                    <p className="new_price">${newPrice}</p>
                                </div>
                                <button onClick={() => addToCart(newPrice)}>Add To Cart</button>
                                </div>

                                <div className="overlay">
                                    <div className="mark_product">
                                    <span><BsArrowsFullscreen/></span>
                                    <span onClick={() => ToggleLikes(id)}><FaHeart/></span>
                                    <span onClick={() => addToCompare()}><FiRefreshCcw/></span>
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

export default TopSelling