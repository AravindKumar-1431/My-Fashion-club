import React from "react";
import "./productpage.css";
import pimage from "../assests/pimages.jpg";
import p2image from "../assests/2download.jpg";
import p3image from "../assests/menformal.jpg";
import p4image from "../assests/men formal 2.jpg";
import p5image from "../assests/menredchecks.jpg";
import p6image from "../assests/download.jpg";
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
              <h5>Price</h5>
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
                <i class="bi bi-record-circle-fill"> 4stars</i>
                <i class="bi bi-record-circle-fill"> 3stars</i>
                <i class="bi bi-record-circle-fill"> 2stars</i>
                <i class="bi bi-record-circle-fill"> 1stars</i>
              </div>
            </div>
            <div className="sorting">
              <h5>Sorting</h5>
              <div className="sitems">
                <i class="bi bi-record-circle-fill"> Price-low to high</i>
                <i class="bi bi-record-circle-fill"> Price-high to low</i>
              </div>
            </div>
          </div>
        </div>

        <div className="producthead">
          <h3>Showing All Products</h3>
          <div className="productitems">
            {products.map((product) => (
              <div className="pcard1" key={product.id}>
                <div className="productimgbox">
                  {" "}
                  <img src={product.image} alt="pimg" />
                </div>
                <p>{product.name}</p>
                <h1>${product.price}</h1>

                <button className="addcartbtn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productpage;

/*import React from "react";
import "./productpage.css";
import pimage from "../assests/pimages.jpg";
import p2image from "../assests/2download.jpg";
import p3image from "../assests/menformal.jpg";
import p4image from "../assests/men formal 2.jpg";
import p5image from "../assests/menredchecks.jpg";
import p6image from "../assests/download.jpg";
import prange from "../assests/pricerange.jpg";
import { Link } from "react-router-dom";

const ProductPage = () => {
  
  return (
    <div>
      <div className="product-container">
        <div className="sidebar">
          <div className="header">
            <h5>Filter</h5>
            <h5>Clear</h5>
          </div>

          <div className="sidebar-content">
            <div className="pricerange">
              {" "}
              <h5>Price</h5>
              <img src={prange} alt="primg" />
            </div>
            <div className="category">
              <h5>Category</h5>
              <div className="inp1">
                {" "}
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
                <i class="bi bi-record-circle-fill"> 4stars</i>
                <i class="bi bi-record-circle-fill"> 3stars</i>
                <i class="bi bi-record-circle-fill"> 2stars</i>
                <i class="bi bi-record-circle-fill"> 1stars</i>
              </div>
            </div>
            <div className="sorting">
              <h5>Sorting</h5>
              <div className="sitems">
                <i class="bi bi-record-circle-fill"> Price-low to high</i>
                <i class="bi bi-record-circle-fill"> Price-high to low</i>
              </div>
            </div>
          </div>
        </div>
        

        <div className="products">
          <div className="phead">
            <h3>Showing All Products</h3>
          </div>

          {products.map((product) => (
            <div className="pcard1" key={product.id}>
              <div className="productimgbox">
                {" "}
                <img src={product.image} alt="pimg" />
              </div>
              <p>{product.name}</p>
              <h1>${product.price}</h1>

              <Link to="/cart">
                <button className="addcartbtn">Add to Cart</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage; */
