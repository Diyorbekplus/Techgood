import React from 'react'
import "../Style/css/Features.css"
import { features } from '../data'
import Feature from './Feature'
const Features = () => {
  return (
    <marquee className='features' scrollamount="20" behavior="scroll">
      <div className="inner">
      {
        features.map((feature) => {
          return (
            <Feature key={feature.id} {...feature}/>
          )
        })
      }
      </div>
    </marquee>
  )
}

export default Features