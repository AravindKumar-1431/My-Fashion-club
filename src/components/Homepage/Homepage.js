import React from "react";
import "./homepage.css";
import hom1 from "../assests/hom1.jpg";
import cardimg1 from "../assests/downloadcrd2.jpg";
import cardimg2 from "../assests/download.jpg";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <div className="Homecontainer">
        <div className="home">
          <img className="homimg" src={hom1} alt="img1" />
        </div>

        <div className="cards-container">
          <Link to="/product">
            <div className="card1">
              <img src={cardimg1} alt="crd1" />
              <div className="card1-content">
                <h5>NEW ARRIVALS</h5>
                <h3>Summer Collection</h3>
                <p>
                  Check out our best winter collection to stay warm in style
                  this season
                </p>
              </div>
            </div>
          </Link>

          <Link to="/product">
            <div className="card2">
              <img src={cardimg2} alt="crd1" />
              <div className="card1-content">
                <h5>NEW ARRIVALS</h5>
                <h3>Summer Collection</h3>
                <p>
                  Check out our best winter collection to stay warm in style
                  this season
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
