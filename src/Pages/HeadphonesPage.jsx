import React from 'react'
import Headphones from '../Components/Headphones'
import "../Style/css/Variables.css"
import { useGlobalContext } from '../Components/context'
import { RiBarChartHorizontalLine } from "react-icons/ri";
const HeadphonesPage = () => {
  const {showCategories} = useGlobalContext()
  return (
    <div className='headphones page'>
        <div className="header alert">
         <h2>Televisions</h2>
         <button className='close_btn' onClick={showCategories}><span><RiBarChartHorizontalLine/></span></button>
        </div>
        <Headphones/>
    </div>
  )
}

export default HeadphonesPage