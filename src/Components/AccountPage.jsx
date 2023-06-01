import React from 'react'
import { useState } from 'react';
import "../Style/css/AccountPage.css"
import statusImg from "../Images/statusImg.png"
import { useGlobalContext } from './context'
const getData = () => {
  let detail = localStorage.getItem("NewUser");
  if(detail) {
    return JSON.parse(localStorage.getItem("NewUser"))
  }
  else {
    return {}
  }
}
const AccountPage = () => {
    const {closeAccountPage} = useGlobalContext();
    const [userData, setUserData] = useState(getData())
    const handleChange = (e) => {
      const {value, name} = e.target;
      setUserData(values => ({
        ...values,
        [name]: value
      }))
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      closeAccountPage()
    }

  return (
    <section className="account_page container">
        <div className="account_page_inner">
            <div className="account_page_header">
              <h2>Account Settings</h2>
              <button onClick={closeAccountPage}>X</button>
            </div>
            <div className="account_page_body row">
              <div className="menu_bar col-12 col-md-4 col-lg-4">
                <div className="status">
                  <img src={statusImg} alt="user" />
                  <h6 className='name'>{userData.firstName} {userData.lastName}</h6>
                </div>
                <div className="control_buttons">
                <button>Account</button>
                <button>Password</button>
                <button>Security</button>
                <button>Notification</button>
                </div>
              </div>
               <form className="row g-3 details col-12 col-md-8 col-lg-8">
              <h2 className="title">Account Settings</h2>
              <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">FirstName</label>
            <input type="text" className="form-control" id="firstName" value={userData.firstName || ""} onChange={handleChange}/>
            </div>
            <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">LastName</label>
            <input type="text" className="form-control" id="lastName" value={userData.lastName || ""} onChange={handleChange}/>
            </div>
            <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={userData.email || ""} onChange={handleChange}/>
            </div>
            <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="inputPhone" value={userData.phone || ""} onChange={handleChange}/>
            </div>
            <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" value={userData.address || ""} onChange={handleChange}/>
            </div>
            <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity"  value={userData.city || ""} onChange={handleChange}/>
            </div>
            <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <input type="text" className="form-control" id="inputState" value={userData.state || ""} onChange={handleChange}/>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" value={userData.zip || ""} onChange={handleChange}/>
            </div>
            <div className="col-12 submit_details">
            <button type="submit" className="update_btn" onClick={handleSubmit}>Update</button>
            <button type="btn" className="cancel_btn">Cancel</button>
            </div>
            </form>
            </div>
        </div>
    </section>
  )
}

export default AccountPage