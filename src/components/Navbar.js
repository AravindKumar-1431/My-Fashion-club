import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbox">
      <Link to="/" className="link">
        <h1>FashionClub</h1>{" "}
      </Link>

      <div className="navlist">
        {location.pathname !== "/cart" && (
          <div className="inputf">
            <i className="bi bi-search search-icon"></i>
            <input type="text" placeholder="Search" />
          </div>
        )}
        <ul className="navitems">
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
              {" "}
              <i class="bi bi-cart-dash"></i>cart
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
