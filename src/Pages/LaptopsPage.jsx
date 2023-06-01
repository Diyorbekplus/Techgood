import React from 'react'
import Laptops from '../Components/Laptops'
import "../Style/css/Variables.css"
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { useGlobalContext } from '../Components/context'
const LaptopsPage = () => {
  const {showCategories} = useGlobalContext()
  return (
    <div className='laptops page'>
        <div className="header alert">
         <h2>Laptops</h2>
         <button className='close_btn' onClick={showCategories}><span><RiBarChartHorizontalLine/></span></button>
        </div>
        <Laptops/>
    </div>
  )
}

export default LaptopsPage