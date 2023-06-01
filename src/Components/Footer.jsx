import React from 'react'
import "../Style/css/Footer.css"
const Footer = () => {
  return (<footer className="footer">
  <div className="container mt-5 p-4 pb-0 footer">
    <section className="mb-4">
      <a className=""
        href="https://www.facebook.com/DiyorbekDiyuller"
        role="button">
            <i className="fab fa-facebook-f"></i>
        </a>

      <a className=""
        href="https://twitter.com/Diyor_Diyuller"
        role="button"
        ><i className="fab fa-twitter"></i></a>

      <a className=""
        href="https://www.instagram.com/diyorbek__yuldashov/"
        role="button"
        ><i className="fab fa-instagram"></i></a>

      <a className=" "
        href="https://www.linkedin.com/in/diyorbek-diyuller/"
        role="button"
        ><i className="fab fa-linkedin-in"></i></a>
      <a className=" "
        href="https://github.com/Diyorbek-Diyuller"
        role="button"
        ><i className="fab fa-github"></i></a>
    </section>
  </div>
  <div className="text-center p-3 copyright">
    © 2020 Copyright:<a className="link" href="https://diyuller.netlify.app/">Diyorbek</a>
  </div>
</footer>
  )
}

export default Footer