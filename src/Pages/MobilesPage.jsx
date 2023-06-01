import React from 'react'
import "../Style/css/Variables.css";
import Mobiles from '../Components/Mobiles';
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { useGlobalContext } from '../Components/context'
const MobilesPage = () => {
  const {showCategories} = useGlobalContext()
  return (
    <div className='mobiles page'>
        <div className="header alert">
         <h2>Mobiles</h2>
         <button className='close_btn' onClick={showCategories}><span><RiBarChartHorizontalLine/></span></button>
        </div>
        <Mobiles/>
    </div>
  )
}

export default MobilesPage