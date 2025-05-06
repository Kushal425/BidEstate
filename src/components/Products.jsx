import React from "react";
import { Link } from "react-router";
import "./Products.css";

function Products() {
  return (
    <div>
      <h1 className="title">On BidEstate You Can</h1>
      <div className="Container">
        <Link to="/buy" className="noline">
          <div className="Buy">
            <h1>Buy</h1>
            <p>Bid on your dream property</p>
          </div>
        </Link>
        <Link to="sell" className="noline">
          <div className="Sell">
            <h1>Sell</h1>
            <p>List your property to get your price</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Products;
