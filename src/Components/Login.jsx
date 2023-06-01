import React, {useState} from 'react'
import { useGlobalContext } from './context';
const Login = () => {
    const {closeLoginPage} = useGlobalContext()
    const getNewName = () => {
        let data = localStorage.getItem("NewUser");
        if(data) {
            return JSON.parse(localStorage.getItem("NewUser"))
        }
        else {
            return {}
        }
    }
    const [inputs, setInputs] = useState({});
    const [data] = useState(getNewName())
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(values => ({
            ...values,
            [name] : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("OldUser", JSON.stringify(inputs))
        if(inputs.email === data.email && inputs.password === data.password) {
            closeLoginPage()
        }
        else {
            alert("Your email or password is not valid")
            
        }
    }
  return (
    <form  className="login col-12 col-sm-12 col-md-8 col-lg-4" onSubmit={handleSubmit}>
    <h2 className="title">Log In </h2>
    <div className="form-floating mb-3">
    <input value={inputs.email || ""} name="email" onChange={handleChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
    <label htmlFor="floatingInput">Email </label>
    </div>
    <div className="form-floating">
    <input value={inputs.password || ""} name="password" onChange={handleChange} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
    <label htmlFor="floatingPassword">Password</label>
    </div>
    <a href="!#">Forgot your password?</a>
    <button type="submit">Sign In</button>
</form>
  )
}

export default Login