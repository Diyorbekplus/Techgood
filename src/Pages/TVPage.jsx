import React from 'react'
import TV from '../Components/TV';
import "../Style/css/Variables.css";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { useGlobalContext } from '../Components/context'
const TVPage = () => {
  const {showCategories} = useGlobalContext()
  return (
    <div className='tv page'>
        <div className="header alert">
         <h2>Televisions</h2>
         <button className='close_btn' onClick={showCategories}><span><RiBarChartHorizontalLine/></span></button>
        </div>
        <TV/>
    </div>
  )
}

export default TVPage