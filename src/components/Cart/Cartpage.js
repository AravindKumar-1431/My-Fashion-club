import React from "react";
import "./cartpage.css";
import cartimg from "../assests/men formal 2.jpg";
const cartpage = () => {
  return (
    <div className="cart-container">
      <div className="cart-cardbox">
        <div className="cart-productbox">
          <div className="productimg">
            {" "}
            <img src={cartimg} alt="cmg" />
          </div>
          <div className="product-detailsbox">
            <h3
              style={{
                fontWeight: 500,
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Men Formal Shirt
            </h3>
            <h5
              style={{
                fontWeight: 700,
                fontSize: "25px",
              }}
            >
              $200
            </h5>
            <div className="pd2">
              <h3>50% off</h3>
              <h4 style={{ fontWeight: 400, fontSize: "13px" }}>Quantity:1</h4>
              <button style={{ fontWeight: 600 }} className="rbtn">
                Remove from cart
              </button>
              <button style={{ fontWeight: 600 }} className="mbtn">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="cart-pricebox">
          <h1 style={{ fontSize: "24px", fontWeight: 700, lineHeight: 3 }}>
            PRICE DETAILS
          </h1>
          <div className="line"></div>
          <h2>
            Price(1 items) <span className="price">$200</span>
          </h2>
          <h2>
            Discount <span className="discount">$100</span>
          </h2>
          <h2>
            Delivery charges <span className="delcharge">free</span>
          </h2>
          <div className="line"></div>
          <h1>
            Total Amount <span className="total">$100</span>
          </h1>
          <div className="line"></div>
          <h2 style={{ fontSize: "20px" }}>You will save $100 on this order</h2>
          <br />
          <button className="plo">
            <h2 style={{ fontSize: "20px", textAlign: "center" }}>
              Place Order{" "}
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default cartpage;
