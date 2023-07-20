import React from "react";
import "./productpage.css";
import pimage from "../assests/pimages.jpg";
import p2image from "../assests/2download.jpg";
import p3image from "../assests/menformal.jpg";
import p4image from "../assests/men formal 2.jpg";
import p5image from "../assests/menredchecks.jpg";
import p6image from "../assests/download.jpg";
import { Link } from "react-router-dom";
const productpage = () => {
  const products = [
    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: pimage,
    },
    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: pimage,
    },
    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: p2image,
    },
    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: p3image,
    },

    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: p4image,
    },

    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: p5image,
    },
    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: p6image,
    },
    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: pimage,
    },
    {
      id: 1,
      name: "Mens Blue Shirt",
      price: 100,
      image: pimage,
    },
  ];

  return (
    <div className="product-box">
      <div className="product-container">
        <div className="sidebar">
          <div className="header">
            <h5>Filter</h5>
            <h5>Clear</h5>
          </div>

          <div className="sidebar-content">
            <div className="pricerange">
              <label for="customRange1" class="form-label">
                <h5>Price</h5>
                <input
                  type="range"
                  class="form-range"
                  id="customRange1"
                ></input>
              </label>
            </div>
            <div className="category">
              <h5>Category</h5>
              <div className="inp1">
                Men
                <input type="checkbox" />
                <br />
                kids
                <input type="checkbox" />
              </div>
            </div>
            <div className="rating">
              <h5>Rating</h5>
              <div className="ritems">
                <li>
                  <input type="radio" />
                  4stars
                </li>
                <li>
                  <input type="radio" />
                  3stars
                </li>
                <li>
                  <input type="radio" />
                  2stars
                </li>
                <li>
                  <input type="radio" />
                  1star
                </li>
              </div>
            </div>
            <div className="sorting">
              <h5>Sorting</h5>
              <div className="sitems">
                <li>
                  <input type="radio" />
                  Price-low to high
                </li>
                <li>
                  <input type="radio" />
                  Price-high to low
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="producthead">
          <h3>Showing All Products</h3>
          <div className="productitems">
            {products.map((product) => (
              <div className="productcards" key={product.id}>
                <div className="productimg">
                  <img src={product.image} alt="pimg" />
                </div>
                <div className="productcontent">
                  <p>{product.name}</p>
                  <h1>${product.price}</h1>
                  <Link to="/cart">
                    <button className="addcartbtn">Add to Cart</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productpage;
