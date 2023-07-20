import React, { useState } from "react";
import "./cartpage.css";
import cartimg from "../assests/men formal 2.jpg";
const Cartpage = () => {
  const [count, setcount] = useState(1);
  const handleIncrement = () => {
    setcount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setcount((prevCount) => Math.max(prevCount - 1, 1));
  };
  return (
    <div className="cart-container">
      <div className="cart-box">
        <div className="cart-productbox">
          <div className="productimg">
            <img src={cartimg} alt="cartimg" />
          </div>
          <div className="product-content">
            <div className="productinfo">
              <h3
                style={{
                  fontWeight: 600,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Men Formal Shirt
              </h3>
              <h5
                style={{
                  fontWeight: 1000,
                  fontSize: "20px",
                }}
              >
                $200
              </h5>
              <h3
                style={{
                  fontWeight: 400,
                  fontSize: "15px",
                  marginTop: "-8rem",
                }}
              >
                50% off
              </h3>
              <div>
                Quantity:
                <button className="qi" onClick={handleIncrement}>
                  +
                </button>
                {count}
                <button className="qd" onClick={handleDecrement}>
                  -
                </button>
              </div>
            </div>
            <div className="product-buttons">
              <button className="rbtn">Remove from cart</button>
              <button className="mbtn">Move to Wishlist</button>
            </div>
          </div>
        </div>
        <div className="cart-pricebox">
          <div className="pricebox-content">
            <h1>PRICE DETAILS</h1>
            <div className="line"></div>
            <h2>
              Price(1 items) <span className="price">$200</span>
            </h2>
            <h2>
              Discount <span className="price1">$100</span>
            </h2>
            <h2>
              Delivery charges <span className="dcharge">free</span>
            </h2>
            <div className="line"></div>
            <h1>
              Total Amount <span className="total">$100</span>
            </h1>
            <div className="line"></div>
            <h2>You will save $100 on this order</h2>
            <br />
            <button>
              <h2>Place Order</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
