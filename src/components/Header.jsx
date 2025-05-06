"use client";

import React, { useState } from "react";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
      <div className="logo-container">
        <div className="logo">
          <img src="/placeholder.svg" alt="Logo" className="logo-image" />
        </div>
        <div className="site-name">
          <span className="auction-text">Bid</span>
          <span className="domain-text">Estate</span>
        </div>
      </div>
      </Link>

      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>

        <button className="login-button">Log In</button>
      </nav>
    </header>
  );
};

export default Header;
