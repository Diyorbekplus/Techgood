import React from 'react'
import "../Style/css/LoginPage.css"
import { useGlobalContext } from './context'
import Login from './Login';

const LoginPage = () => {
    const {closeLoginPage, openRegisterPage} = useGlobalContext();

  return (
    <section className="login_page" >
        <div className="login_page_inner">
            <div className="login_page_header">
                <h2>Log In</h2>
                <button onClick={closeLoginPage}>X</button>
            </div>
            <div className="login_page_body row" >
                <Login/>

                <div className="register col-12 col-sm-12 col-md-8 col-lg-4">
                    <h2 className="title">New Costumer</h2>
                    <p className="text">
                    Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
                    </p>
                    <div className="to_register">
                        <button onClick={openRegisterPage}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginPage