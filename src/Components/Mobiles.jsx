import React, {useState, useEffect} from 'react'
import "../Style/css/Products.css";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { useGlobalContext } from './context';
import {  HiOutlineXMark } from "react-icons/hi2";
const Mobiles = () => {
    const {mobilesCategory, mobilesList, ToggleLikes, addToCompare,addToCart,showCategoriesSection, hideCategories, inputValue } = useGlobalContext();
        const keys = ['brand']
    const search = (info) => {
        return info.filter((item) =>
        keys.some(key => item[key].toUpperCase().includes(inputValue.toUpperCase())))
     }
    const [data, setData] = useState(search(mobilesList));
    useEffect(() => {
        setData(search(mobilesList))
    }, [inputValue])
    const filterProducts = (cartItem) => {
        hideCategories()
        const result = mobilesList.filter((currData) => {
            return currData.brand === cartItem
        });
        setData(result)
    }
  return (
    <div className='products'>
            <div className='categories'>
            <div className="head">
                    <h2>Mobiles Categories</h2>
            </div>
            <div className="body">
                <ul className='product_categories'>
                    {
                        mobilesCategory.map((item) => {
                            const {id, title, brand} = item
                            return (
                                <li className='category' key={id} onClick={() => filterProducts(brand)}>{title}</li>
                            )
                        })
                    }

                </ul>
            </div>
            </div>
            {
                showCategoriesSection ? 
                <div className='small_categories'>
                <div className="head">
                        <h2>Laptops Categories</h2>
                        <button className='close_btn' onClick={hideCategories}><span><HiOutlineXMark/></span></button>
                </div>
                <div className="body">
                    <ul className='product_categories'>
                        {
                            mobilesCategory.map((item) => {
                                const {id, title, brand} = item
                                return (
                                    <li  className='category col-12 col-sm-11 col-md-10 col-lg-8 mx-auto' key={id} onClick={() => filterProducts(brand)}>{title}</li>
                                )
                            })
                        }
    
                    </ul>
                </div>
                </div> :
                ""
            }
        <div className="products_box">
            <ul className='products_list'>
    {
        data.map((gamer) => {
            const {id,img,  title, stars, oldPrice, newPrice} = gamer
            return (
                <li key={id} className="product">
                    <div className="img">
                    <img src={img} alt="" />
                    </div>
                    <div className="details">
                    <p className='stars'>{stars.map((star, index)=> {return <span key={index}>{star}</span>})}</p>
                    <h2 className='title'>{title}</h2>
                    <div className='price'>
                        <p className='old_price'>$<del>{oldPrice}</del></p>
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

export default Mobiles