"use client";

import React, { useEffect } from "react";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="noline">
      <div className="logo-container">
        <div className="logo">
          <img src="src/assets/logo.jpeg" alt="Logo" className="logo-image" />
        </div>
        <div className="site-name">
          <span className="auction-text">Bid</span>
          <span className="domain-text">Estate</span>
        </div>
      </div>
      </Link>

      <nav className="navigation">
        <Link to="/" className="noline"><li>Home</li></Link>
        <Link to="/buy" className="noline"><li>Buy</li></Link>
        <Link to="/sell" className="noline"><li>Sell</li></Link>
        <Link to="/about" className="noline"><li>About</li></Link>

        <button className="login-button">Log In</button>
      </nav>
    </header>
  );
};

export default Header;
