import React from 'react'
import "../Style/css/Cart.css"
import { useGlobalContext } from './context'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {  HiOutlineXMark } from "react-icons/hi2";

const Cart = () => {
const {closeCart, yourCart, increase, decrease, remove,subtotal} = useGlobalContext();

if (yourCart.length === 0) {
    return (
      <section className='cart container m-auto pt-5'>
        <header className='alert text-center '>
          <h2>Your bag</h2>
          <h4 className='empty-cart text-danger'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
        <div className="cart_inner">
        <div className="cart_header alert">
            <h6>Your Shopping Cart</h6>
            <button className='close-btn' onClick={closeCart}><span><HiOutlineXMark/></span></button>
        </div>
        <div className="cart_body">
            <div className="categories">
            <ul className="categories-list">
                <li className='product'>Product</li>
                <li className='price centered'>Price</li>
                <li className='quantity centered'>Quantity</li>
                <li className='total centered'>Total</li>
                <li className='remove centered'></li>
            </ul>
            </div>
            <section className="cart-list">
                {
                    yourCart.map((list) => {
                        const {id, title,img, newPrice,amount} = list;
                        let priceTotal = amount * newPrice;
                        let total = parseFloat(priceTotal.toFixed(2))
                        return (
                            <article key={id} className="cart-list-item">
                            <div className="inner">
                            <div className="title">
                                <img src={img} alt="" />
                                <p>{title}</p>
                            </div>
                            <div className="price">
                                <p>${newPrice}</p>
                            </div>
                            <div className="quantity">
                                <div className="quantity_control">
                                <button onClick={() => decrease(id)}><AiOutlineMinus/></button>
                                    <span>{amount}</span>
                                    <button onClick={() => increase(id)}><AiOutlinePlus/></button>
                                </div>
                            </div>
                            <div className="total">
                                <p>${total}</p>
                            </div>
                            <div className="remove">
                                <button onClick={() => remove(id)}><HiOutlineXMark/></button>
                            </div>
                            </div>
                        </article>
                        )
                    })
                }


            </section>

        </div>
        <div className="cart_footer">
            <div className="subtotal">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Cart