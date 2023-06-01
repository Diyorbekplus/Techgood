import React from 'react'
import "../Style/css/Carousel.css"
import img1 from "../Images/carousel-1.png"
import img2 from "../Images/carousel-2.png"
import { Link } from 'react-router-dom'

const Carousel = () => {
  return (
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Samsung Galaxy S23</h5>
        <button><Link className='link' to="/mobiles">Sale Now</Link> </button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Samsung Galaxy S23</h5>
        <button><Link className='link' to="/mobiles">Sale Now</Link></button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
  )
}

export default Carousel