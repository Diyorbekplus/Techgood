import React from 'react'
import Header from '../Components/Header'
import Features from '../Components/Features'
import Gamer from '../Components/Gamer'
import TopSelling from '../Components/TopSelling'
const Home = () => {
  return (
    <div className='home container-xxl'>
      <Header/>
      <Features/>
      <Gamer/>
      <TopSelling/>
    </div>
  )
}

export default Home