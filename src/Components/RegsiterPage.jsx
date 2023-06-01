import React, { useState } from 'react'
import "../Style/css/RegisterPage.css"
import { useGlobalContext } from './context'
const RegsiterPage = () => {
    const {closeRegisterPage, openLoginPage} = useGlobalContext();
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
      const {name, value} = e.target;
      setInputs(values => ({
        ...values,
        [name]: value
      }))
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      localStorage.setItem("NewUser", JSON.stringify(inputs))
      closeRegisterPage()
    }
  return (
    <section className="register_page" onSubmit={handleSubmit}>
        <div className="register_page_inner">
            <div className="register_page_header">
                <h2>Register</h2>
                <button onClick={closeRegisterPage}>X</button>
            </div>
            <div className="register_page_body">
            <form className="row g-3 container mx-auto">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Firstname</label>
    <input value={inputs.firstName || ""} name="firstName" onChange={handleChange} type="text" className="form-control" id="firstName"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Lastname</label>
    <input value={inputs.lastName || ""} name="lastName" onChange={handleChange} type="text" className="form-control" id="lastname"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input value={inputs.email || ""} name="email" onChange={handleChange} type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="password" className="form-label">Password</label>
    <input value={inputs.password || ""} name="password" onChange={handleChange}  type="text" className="form-control" id="password"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPhone" className="form-label">Phone</label>
    <input value={inputs.phone || ""} name="phone" onChange={handleChange} type="tel" className="form-control" id="inputPhone" placeholder="+998 97 777 77 77"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input value={inputs.address || ""} name="address" onChange={handleChange}  type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input value={inputs.city || ""} name="city" onChange={handleChange}  type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input value={inputs.zip || ""} name="zip" onChange={handleChange} type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" value={inputs.state || ""} name="state" onChange={handleChange}>
      <option>Uzbekistan</option>
      <option>Kazakhstan</option>
      <option>Turkey</option>
    </select>
  </div>
  <div className="">
    <button type="submit" className="register_btn col-12 col-md-10 col-lg-8">Register</button>
  </div>
  <div className="">
    <button onClick={openLoginPage} className="login_btn col-12 col-md-10 col-lg-8">Log In</button>
  </div>
</form>
            </div>
        </div>

    </section>
  )
}

export default RegsiterPage