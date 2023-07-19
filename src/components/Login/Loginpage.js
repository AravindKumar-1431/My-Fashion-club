import React from "react";
import "./loginpage.css";
import Navbar from "../NavBarmenu/Navbar";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="logbox">
        <h1>Login</h1>
        <div className="loginitems">
          <h3>Email address</h3>
          <input className=" inp1" type="text" placeholder="john@gmail.com" />
          <h3>password</h3>
          <input className="inp2" type="password" placeholder="**********" />
          <div className="logitems2">
            <p>
              <input type="checkbox" /> Remember me
              <Link to="/">Forgot your Password?</Link>
            </p>
          </div>
          <div className="logitems3">
            <Link to="/">
              <button className="logbtn2">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <p>Create New Account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;

/* import React from 'react'
import './login.css'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='login'>
   
    </div>
  )
}

export default login
 */
