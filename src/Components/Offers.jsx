import React from 'react'
import "../Style/css/Offers.css"
import { AiOutlineLine } from "react-icons/ai";
const Offers = () => {
  return (
    <div className='offers container-xxl'>
        <div className="offers-inner">
            <div className="offers-list">
            <div className='offer col-1 col-lg-1'><AiOutlineLine/></div>
            <div className='offer label col-12 col-md-6 col-lg-5'>Free delivery over $400. Fullfilled by Gudgety</div>
            <div className='offer col-1 col-lg-1'><AiOutlineLine/></div>
            <div className='offer label col-6 col-md-6 col-lg-5'>Free delivery over $400. Fullfilled by Gudgety</div>
            <div className='offer col-1 col-lg-1'><AiOutlineLine/></div>
            <div className='offer label col-6 col-md-6 col-lg-5'>Free delivery over $400. Fullfilled by Gudgety</div>
            <div className='offer col-1 col-lg-3'><AiOutlineLine/></div>
            </div>
        </div>
    </div>
  )
}

export default Offers