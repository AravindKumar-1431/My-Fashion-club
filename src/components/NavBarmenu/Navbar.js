import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handelclick = () => setclick(!click);

  return (
    <div className="navbox">
      <Link to="/" className="link">
        <h1>FashionClub</h1>
      </Link>
      <div className="navlistinp">
        <div className="inputf">
          <i className="bi bi-search search-icon"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div>
        <ul className={click ? "navlist2 " : " navlist2  active"}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/product">
            <li>Products</li>
          </Link>
          <li>
            <button className="loginbtn">
              <Link to="/login" className="link">
                Login
              </Link>
            </button>
          </li>
          <Link to="/wish">
            <li className="hearti">
              <i class="bi bi-heart"></i>
            </li>
          </Link>
          <Link to="/cart">
            <li>
              <i class="bi bi-cart-dash"></i>cart
            </li>
          </Link>
        </ul>
        <div className="ham" onClick={handelclick}>
          {click ? (
            <i class="bi bi-x-circle"></i>
          ) : (
            <i class="bi bi-list ham"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
