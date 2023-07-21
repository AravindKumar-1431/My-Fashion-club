import React from "react";
import "./loginpage.css";
import Navbar from "../NavBarmenu/Navbar";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="logbox">
        <h1>Signup</h1>
        <div className="loginitems">
          <h3>Name</h3>
          <input className=" inp1" type="text" placeholder="John" />
          <h3> Email address</h3>
          <input className=" inp1" type="text" placeholder="john@gmail.com" />
          <h3>Password</h3>
          <input className="inp2" type="password" placeholder="**********" />
          <div className="logitems4">
            <h4>
              <input type="checkbox" /> i accept all Terms & Conditions
            </h4>
            <button className="signbtn">Create Account</button>
            <Link to="/login">
              <p>Already have an account </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
